require("@nomicfoundation/hardhat-toolbox");
require("dotenv/config");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    bscTestnet: {
      url: process.env.BSC_TEST_RPC,
      accounts: [process.env.BSC_TEST_PRIVATE_KEY],
      chainId: 97,
    },
  },
};
