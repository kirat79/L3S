// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "./libs/TypeCasts.sol";

interface IHypERC20 {
    /**
     * @notice Transfers tokens to the specified recipient on a remote chain
     * @param _destination The domain ID of the destination chain
     * @param _recipient The address of the recipient, encoded as bytes32
     * @param _amount The amount of tokens to transfer
     */
    function transferRemote(
        uint32 _destination,
        bytes32 _recipient,
        uint256 _amount
    ) external payable;
}

contract Bridge is Ownable {
    using Address for address payable;
    using TypeCasts for address;

    IHypERC20 public mailbox;
    address public l3Bridge;
    uint32 public l3Domain;

    event EtherLocked(address indexed user, uint256 amount, uint256 nonce);
    event DebugLog(string message, uint256 value, bytes32 recipient);

    mapping(uint256 => bool) public processedNonces;
    uint256 public nonce;

    constructor(
        address _mailbox,
        uint32 _l3Domain,
        address _l3Bridge,
        address _initOwner
    ) Ownable(_initOwner) {
        require(_mailbox != address(0), "Invalid mailbox address");
        require(_l3Bridge != address(0), "Invalid L3 bridge address");

        mailbox = IHypERC20(_mailbox);
        l3Domain = _l3Domain;
        l3Bridge = _l3Bridge;
    }

    function lockEther() external payable {
        require(msg.value > 0, "Must send Ether to lock");

        uint256 currentNonce = nonce;
        nonce++;

        bytes32 recipientAddress = l3Bridge.addressToBytes32();

        emit DebugLog("Before dispatch", msg.value, recipientAddress);

        // Send a message to L3 indicating that Ether has been locked
        try
            mailbox.transferRemote{value: msg.value}(
                l3Domain,
                recipientAddress,
                msg.value
            )
        {
            emit EtherLocked(msg.sender, msg.value, currentNonce);
        } catch Error(string memory reason) {
            emit DebugLog(reason, msg.value, recipientAddress);
            revert(reason);
        } catch (bytes memory lowLevelData) {
            emit DebugLog("Low-level error", msg.value, recipientAddress);
            revert("Low-level error");
        }
    }

    function setL3Bridge(address _l3Bridge) external onlyOwner {
        require(_l3Bridge != address(0), "Invalid L3 bridge address");
        l3Bridge = _l3Bridge;
    }

    function setL3Domain(uint32 _l3Domain) external onlyOwner {
        l3Domain = _l3Domain;
    }
}
