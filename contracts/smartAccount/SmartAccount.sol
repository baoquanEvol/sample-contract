// SPDX-License-Identifier: MIT

pragma solidity =0.8.17;

contract SmartAccount {
    address public admin;
    bool public isRoot = true;

    function initContract() external {
        // admin
        admin = tx.origin;
    }
    function deleteContract() public payable {
        if (!isRoot) {
            address payable addr = payable(msg.sender);
            selfdestruct(addr);
        }
    }
}