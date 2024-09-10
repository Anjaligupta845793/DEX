const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Dex", function () {
  let dex, tokenA, tokenB, owner, user;

  beforeEach(async function () {
    [owner, user] = await ethers.getSigners();
    const initialSupply = ethers.utils.parseEther("100");
    const Dex = await ethers.getContractFactory("Dex");
    dex = await Dex.deploy();
    const TokenA = await ethers.getContractFactory("tokenA");
    const TokenB = await ethers.getContractFactory("tokenB");
    tokenA = await TokenA.deploy(initialSupply);
    tokenB = await TokenB.deploy(initialSupply);
    await tokenA.transfer(user.address, ethers.utils.parseEther("90"));
    await tokenB.transfer(user.address, ethers.utils.parseEther("90"));
  });

  describe("deployment of contract", function () {
    it("should check the name and symbol of tokenA", async function () {
      let name = "tokenA";
      let symbol = "A";
      expect(await tokenA.name()).to.equal(name);
      expect(await tokenA.symbol()).to.equal(symbol);
    });

    it("should check the name and symbol of tokenB", async function () {
      let name = "tokenB";
      let symbol = "B";
      expect(await tokenB.name()).to.equal(name);
      expect(await tokenB.symbol()).to.equal(symbol);
    });
  });

  describe("creating a pool", function () {
    it("should create a new pool", async function () {
      const amountA = ethers.utils.parseEther("10");
      const amountB = ethers.utils.parseEther("20");
      await tokenA.connect(user).approve(dex.address, amountA);
      await tokenB.connect(user).approve(dex.address, amountB);
      await dex
        .connect(user)
        .createPool(tokenA.address, tokenB.address, amountA, amountB);
      const [tokenABalance, tokenBBalance] = await dex.getbalance(
        tokenA.address,
        tokenB.address
      );
      expect(tokenABalance).to.equal(amountA);
      expect(tokenBBalance).to.equal(amountB);
    });
  });

  describe("adding liquidity", function () {
    it("should add liquidity to the pool", async function () {
      const amountA = ethers.utils.parseEther("10");
      const amountB = ethers.utils.parseEther("20");
      await tokenA.connect(user).approve(dex.address, amountA);
      await tokenB.connect(user).approve(dex.address, amountB);
      await dex
        .connect(user)
        .createPool(tokenA.address, tokenB.address, amountA, amountB);
      const additionalAmountA = ethers.utils.parseEther("5");
      const additionalAmountB = ethers.utils.parseEther("10");
      await tokenA.connect(user).approve(dex.address, additionalAmountA);
      await tokenB.connect(user).approve(dex.address, additionalAmountB);
      await dex
        .connect(user)
        .addLiquidity(
          tokenA.address,
          tokenB.address,
          additionalAmountA,
          additionalAmountB
        );
      const [tokenABalance, tokenBBalance] = await dex.getbalance(
        tokenA.address,
        tokenB.address
      );
      expect(tokenABalance).to.equal(amountA.add(additionalAmountA));
      expect(tokenBBalance).to.equal(amountB.add(additionalAmountB));
    });
  });

  describe("removing liquidity", function () {
    it("should remove liquidity from the pool", async function () {
      const amountA = ethers.utils.parseEther("10");
      const amountB = ethers.utils.parseEther("20");
      await tokenA.connect(user).approve(dex.address, amountA);
      await tokenB.connect(user).approve(dex.address, amountB);
      await dex
        .connect(user)
        .createPool(tokenA.address, tokenB.address, amountA, amountB);
      await dex.connect(user).removeLiquidity(tokenA.address, tokenB.address);
      const [tokenABalance, tokenBBalance] = await dex.getbalance(
        tokenA.address,
        tokenB.address
      );
      expect(tokenABalance).to.equal(0);
      expect(tokenBBalance).to.equal(0);
    });
  });

  describe("swapping tokens", function () {
    it("should swap tokens", async function () {
      const amountA = ethers.utils.parseEther("10");
      const amountB = ethers.utils.parseEther("20");
      await tokenA.connect(user).approve(dex.address, amountA);
      await tokenB.connect(user).approve(dex.address, amountB);
      await dex
        .connect(user)
        .createPool(tokenA.address, tokenB.address, amountA, amountB);
      const swapAmount = ethers.utils.parseEther("5");
      await tokenA.connect(user).approve(dex.address, swapAmount);
      await dex.connect(user).swap(tokenA.address, tokenB.address, swapAmount);
      const [tokenABalance, tokenBBalance] = await dex.getbalance(
        tokenA.address,
        tokenB.address
      );
      expect(tokenABalance).to.equal(amountA.add(swapAmount));
    });
  });
});
