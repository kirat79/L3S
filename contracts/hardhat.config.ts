import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    layer3: {
      chainId: 14531773,
      url: "http://127.0.0.1:8449/",
    },
  },
};

export default config;
