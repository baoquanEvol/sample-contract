import {ethers} from "hardhat";
import {getAddress} from "ethers/lib/utils";
const {randomBytes, hexlify} = ethers.utils;
export const randomHex = (bytes = 32) => hexlify(randomBytes(bytes));
export const randomAddress = () => getAddress(randomHex(20));
async function main() {
    const myTokenAddress = process.env.MY_TOKEN_ADDRESS || "";
    const myToken = await ethers.getContractAt("MyToken", myTokenAddress);
    const toRandomAddress = randomAddress()
    const txTransfer = await myToken.transfer(toRandomAddress, (2e18).toString());
    const txReceipt = await txTransfer.wait();
    console.log('txReceipt = ', txReceipt);
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
