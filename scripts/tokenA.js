const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  const balance = await deployer.getBalance();

  console.log(`Deployer balance: ${ethers.utils.formatEther(balance)} ETH`);

  if (balance.lt(ethers.utils.parseEther("0.01"))) {
    console.error(
      "Insufficient funds to deploy the contract. Please fund the account."
    );
    process.exit(1);
  }

  const initialSupply = ethers.utils.parseUnits("100", 18);
  const TokenA = await ethers.getContractFactory("tokenA");
  const gasPrice = ethers.utils.parseUnits("25", "gwei");
  const tokenA = await TokenA.deploy(initialSupply, { gasPrice });
  await tokenA.deployed();

  console.log(`TokenA deployed to: ${tokenA.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
