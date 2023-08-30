import {ethers} from "hardhat";
import {verifyContract} from "../verifyContract";

async function main() {
    const SmartAccount = await ethers.getContractFactory("SmartAccount");
    const smartAccount = await SmartAccount.deploy();
    await smartAccount.deployed();
    await verifyContract("SmartAccount", smartAccount.address, []);

    const FactoryAccount = await ethers.getContractFactory("FactoryAccount");
    const factoryAccount = await FactoryAccount.deploy();
    await factoryAccount.deployed();
    await verifyContract("FactoryAccount", factoryAccount.address, []);
}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
