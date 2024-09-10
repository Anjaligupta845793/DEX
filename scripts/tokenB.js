const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  const balance = await deployer.getBalance();

  console.log(`Deployer balance: ${ethers.utils.formatEther(balance)} MATIC`);

  if (balance.lt(ethers.utils.parseEther("0.01"))) {
    console.error(
      "Insufficient funds to deploy the contract. Please fund the account."
    );
    process.exit(1);
  }

  const initialSupply = ethers.utils.parseUnits("100", 18);
  const TokenB = await ethers.getContractFactory("tokenB");
  const gasPrice = ethers.utils.parseUnits("25", "gwei");
  const tokenB = await TokenB.deploy(initialSupply, { gasPrice });
  await tokenB.deployed();

  console.log(`TokenB deployed to: ${tokenB.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
