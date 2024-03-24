// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./LEthToken.sol";

contract Vault {
    lEthToken public lEth;
    mapping(address => uint256) public balances;
    uint256 public totalStaked;

    event Staked(address indexed user, uint256 amount);
    event Withdrawn(address indexed user, uint256 amount);

    constructor(address _lEthToken) {
        lEth = lEthToken(_lEthToken);
    }

    function deposit() external payable {
        require(msg.value > 0, "Cannot stake 0 Ether");
        balances[msg.sender] += msg.value;
        totalStaked += msg.value;

        // Mint lEth tokens to the user
        lEth.mint(msg.sender, msg.value);

        emit Staked(msg.sender, msg.value);
    }

    function withdraw(uint256 amount) external {
        require(balances[msg.sender] >= amount, "Insufficient balance");
        balances[msg.sender] -= amount;
        totalStaked -= amount;

        // Burn lEth tokens from the user
        lEth.burn(msg.sender, amount);

        payable(msg.sender).transfer(amount);

        emit Withdrawn(msg.sender, amount);
    }

    function getBalance(address user) external view returns (uint256) {
        return balances[user];
    }
}
