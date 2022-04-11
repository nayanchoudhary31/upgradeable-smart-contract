const {ethers,upgrades} = require('hardhat');
const ProxyAddress = "0x30961DC40f85Febac2A74CE5490516103572e38F";

async function main(){

    const BoxV2 = await ethers.getContractFactory("BoxV2"); // deployed the upgrade Box Contract

    await upgrades.upgradeProxy(ProxyAddress,BoxV2); // Upgrade the proxy Contract With New Implementation Contract

    console.log("Contract Upgraded..");
}

main();