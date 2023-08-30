import {ethers} from "hardhat";
async function main() {
    const myTokenAddress = process.env.MY_TOKEN_ADDRESS || "";
    const myToken = await ethers.getContractAt("MyToken", myTokenAddress);
    const txMint = await myToken.mint(myTokenAddress, (1e18).toString());
    const txReceipt = await txMint.wait();
    console.log('txReceipt = ', txReceipt);
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
