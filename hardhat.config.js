require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

const GOERLI_URL = "j9bI-j0uGz4595rusxd2h5lybVe_3x5n";
const PRIVATE_KEY ="b575aca21b19e5f54bb82b7a9f3684412975de88c198dc4ac4ae70bf97b9f563";
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
       url:`https://polygon-mainnet.g.alchemy.com/v2/${GOERLI_URL}`,
      accounts: [PRIVATE_KEY],
    },
  },
};
