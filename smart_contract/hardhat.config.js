require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/wvu8o-KhjHiJqPNjoghw3XVOFacCT9QL",
      accounts: [
        "b391b88e5168d5d047b42ce4b0269c76c0805a702464506a87288cf2ddd054be",
      ],
    },
  },
};
