// scripts/deployTokenA.js
const { ethers } = require("hardhat");

async function main() {
  const initialSupply = ethers.utils.parseUnits("1000000", 18);
  const DEXcontract = await ethers.getContractFactory("Dex");
  const DEX = await DEXcontract.deploy();
  await DEX.deployed();
  console.log(`DEX deployed to: ${DEX.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
