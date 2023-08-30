// SPDX-License-Identifier: MIT

pragma solidity =0.8.17;

import "@openzeppelin/contracts/proxy/Clones.sol";

contract FactoryAccount {
    function createAccount(address tokenImplementation, bytes32 salt) external {
        address clone = Clones.cloneDeterministic(tokenImplementation, salt);
        ISmartAccount(payable(clone)).initContract();
    }

    function getAccount(address tokenImplementation, bytes32 salt, address deployer) external view returns (address) {
        return Clones.predictDeterministicAddress(tokenImplementation, salt, deployer);
    }
}

interface ISmartAccount {
    function initContract() external;
}