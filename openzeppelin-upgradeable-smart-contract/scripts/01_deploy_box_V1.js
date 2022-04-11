const {ethers,upgrades} = require('hardhat');

async function main(){
  const Box = await ethers.getContractFactory("Box");

  const box = await upgrades.deployProxy(Box,[43],{
    initializer : "initialize",
  })

  await box.deployed();

  console.log(`Box Deployed to ${box.address}`)
}

main();