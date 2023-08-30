import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-abi-exporter";
import dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    // multiple version
    compilers: [
      {
        version: "0.8.17",
      },
    ]
  },
  abiExporter: {
    path: './abi',
    runOnCompile: true,
    clear: true,
    spacing: 2,
  },
  networks: {
    hardhat: {
        blockGasLimit: 40000000,
        allowUnlimitedContractSize: true
    },
    testnet: {
      blockGasLimit: 40000000,
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      accounts: [process.env.PRIVATE_KEY as string],
    },
    mainnet: {
      blockGasLimit: 40000000,
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      accounts: [process.env.PRIVATE_KEY as string],
    }
  },
  mocha: {
    timeout: 40000
  },
  etherscan: {
    apiKey: process.env.API_KEY,
  },
};

export default config;
