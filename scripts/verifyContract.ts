import {run} from "hardhat";

export async function verifyContract(contractName: string, contractAddress: string, args: any[]) {
    console.log(`Deploy success ${contractName} on ${contractAddress}`);
    try {
        console.log(`Verify ${contractName} on ${contractAddress}`);
        await run(`verify:verify`, {
            address: contractAddress,
            constructorArguments: args,
        });
        console.log(`Verify success  ${contractName} on ${contractAddress}`);
    } catch (e) {
        console.log(`Verify fail  ${contractName} on ${contractAddress} with error ${e}`);
    }
}