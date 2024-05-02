import { defineChain } from '../../utils/chain/defineChain.js'

export const avalanche = /*#__PURE__*/ defineChain({
  id: 43_114,
  name: 'Avalanche',
  nativeCurrency: {
    decimals: 18,
    name: 'Avalanche',
    symbol: 'AVAX',
  },
  rpcUrls: {
    default: { http: ['https://api.avax.network/ext/bc/C/rpc'] },
  },
  blockExplorers: {
    default: {
      name: 'SnowScan',
      url: 'https://snowscan.xyz',
      apiUrl: 'https://api.snowscan.xyz/api',
    },
  },
  contracts: {
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 11907934,
    },
    ensUniversalResolver: {
      address: '0x24DFa1455A75f64800BFdB2447958D2B632b94f6',
    }
  },
})
