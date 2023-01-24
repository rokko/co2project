import { InjectedConnector } from "@web3-react/injected-connector";
import { useWeb3React } from "@web3-react/core";
export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 137, 80001],
});
export const co2contract = "0x5420Ab2feebaa5C7F8e70cbCF8Df12bBf73De42e";

export const mumbaiRete = {
  chainId: `0x${Number(80001).toString(16)}`,
  chainName: "Mumbai",
  nativeCurrency: {
    name: "Polygon Test",
    symbol: "MATIC",
    decimals: 18,
  },
  rpcUrls: ["https://matic-mumbai.chainstacklabs.com"],
  blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
};
export const polygonRete = {
  chainId: `0x${Number(137).toString(16)}`,
  chainName: "Polygon Mainnet",
  nativeCurrency: {
    name: "Polygon Mainnet",
    symbol: "MATIC",
    decimals: 18,
  },
  rpcUrls: ["https://rpc-mainnet.maticvigil.com/"],
  blockExplorerUrls: ["https://polygonscan.com/"],
};

export const ethereumRete = {
  chainId: `0x${Number(1).toString(16)}`,
  chainName: "Ethereum Main",
  nativeCurrency: {
    name: "Ethereum",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: ["wss://mainnet.infura.io/ws/v3/932542c8ff3b4ac986b27763a775d2be"],
  blockExplorerUrls: ["https://etherscan.io"],
};

export const testRete = {
  chainId: `0x${Number(4).toString(16)}`,
  chainName: "Rinkeby",
  nativeCurrency: {
    name: "Ethereum",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: ["https://rinkeby.infura.io/v3/"],
  blockExplorerUrls: ["https://rinkeby.etherscan.io"],
};

export const test2Rete = {
  chainId: `0x${Number(3).toString(16)}`,
  chainName: "Ropsten",
  nativeCurrency: {
    name: "Ethereum",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: ["wss://ropsten.infura.io/ws/v3/932542c8ff3b4ac986b27763a775d2be"],
  blockExplorerUrls: ["https://ropsten.etherscan.io"],
};

export const handleEthereum = () => {
  const { ethereum } = window;
  return !!(ethereum && ethereum.isMetaMask);
};
