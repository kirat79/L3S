// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./Vault.sol";
import "./libs/TypeCasts.sol";
import "./interfaces/IMessageRecipient.sol";

contract Receiver is IMessageRecipient {
    Vault public vault;

    constructor(address _vault) {
        vault = Vault(_vault);
    }

    function handle(
        uint32 _origin,
        bytes32 _sender,
        bytes calldata _data
    ) external payable virtual override {
        (address user, uint256 amount, uint256 nonce) = abi.decode(
            _data,
            (address, uint256, uint256)
        );

        // Stake the received Ether in the vault contract
        vault.deposit{value: amount}();
    }
}
