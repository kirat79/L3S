import { type Chain } from "viem";

export const l3s = {
  id: 14531773,
  name: "Layer3 Stake",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: { http: ["http://rpc.l3stake.xyz"] },
  },
  blockExplorers: {
    default: { name: "Blockscout", url: "http://explorer.l3stake.xyz/api" },
  },
} as const satisfies Chain;
