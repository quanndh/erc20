const hre = require("hardhat");

async function main() {
  const [signer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", signer.address);

  const Token = await hre.ethers.deployContract("Token");

  await Token.waitForDeployment();

  console.log("Token address:", await Token.getAddress());
}
main();
