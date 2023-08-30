# sample-contract

## Tutorial

### Install
```shell
npm install
```

### Prepare .env
```shell
cp .env.example .env
# update PRIVATE_KEY in .env
# update API_KEY in .env
```

[Deploy contract](https://testnet.bscscan.com/tx/0x4ba1ae11483066366ac2ecd4b634763e996c761357d996cf10f048b150a23c10)
```shell
npx hardhat run --network testnet scripts/deploy.ts
# after deploy: update MY_TOKEN_ADDRESS in .env
```

[Send transaction Mint](https://testnet.bscscan.com/tx/0x97950d9d50185de56ba2faf5ee5d334c6b41bef4db1ce233b0b5046e65969bc6)
```shell
npx hardhat run --network testnet scripts/transactions/txMint.ts
```

[Send transaction transfer token](https://testnet.bscscan.com/tx/0xc2b1a2096db31f08fef130ff202b2ae9902ac8de04b414973d0b19e026c16062)
```shell
npx hardhat run --network testnet scripts/transactions/txTransferToken.ts
```

Refer more (advance) `contracts/smartAccount`