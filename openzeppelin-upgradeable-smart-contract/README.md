# Hello OpenZeppelin Upgradeable Smart Contract

- Simple Upgrade(deploy,verify, verify proxy,upgrade)
- unsafe (constructor,uninitialized,redorder,storage,kill)
- ERC20 Upgrade

```shell

#1 Create The Implemented Contract no constructor as Implemented Contract Can Not Have Constructor

#2 Import Openzeppelin Hardhat Upgrades & Etherscan For Verify in Hardhat Config.js

#3 Run the Deploy Script with help of Hardhat Upgardes.deployProxy and deploy (Proxy,Admin Proxy,Implemented V1)

#4 Verify The Implemented V1 Contract and Also Set the Proxy Contract in Order to Interact

#5 Run the Upgrade Script with V2 Implementation Contract Deploy it Then Upgrades.upgradeProxy(ProxyAddress,V2)

#6 Repeat Step 4

```
