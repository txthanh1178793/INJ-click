import { Network } from "@injectivelabs/networks";
import { ChainId, EthereumChainId } from "@injectivelabs/ts-types";

export const isProduction = false;

export const IS_DEVELOPMENT: boolean = true;
export const IS_PRODUCTION: boolean = false;

const env = {
  NEXT_ALCHEMY_GOERLI_KEY: "qMVuB_50VSArugxMaOG4RsUK7hiQI1Ip",
  NEXT_NETWORK: Network.Testnet,
  NEXT_ETHEREUM_CHAIN_ID: EthereumChainId.Goerli,
  NEXT_CHAIN_ID: ChainId.Testnet,
};

export const ALCHEMY_GOERLI_KEY = "qMVuB_50VSArugxMaOG4RsUK7hiQI1Ip";

export const alchemyRpcEndpoint = `https://eth-mainnet.g.alchemy.com/v2/qMVuB_50VSArugxMaOG4RsUK7hiQI1Ip`;
export const alchemyWsRpcEndpoint = `wss://eth-mainnet.g.alchemy.com/v2/qMVuB_50VSArugxMaOG4RsUK7hiQI1Ip`;

export const ETHEREUM_CHAIN_ID = (env.NEXT_ETHEREUM_CHAIN_ID ||
  EthereumChainId.Goerli) as EthereumChainId;
export const CHAIN_ID = (env.NEXT_CHAIN_ID || ChainId.Testnet) as ChainId;

export const NETWORK: Network =
  (env.NEXT_NETWORK as Network) || Network.Testnet;

export const IS_TESTNET: Boolean = [
  Network.Testnet,
  Network.TestnetK8s,
].includes(NETWORK);


export const PREDICT_CONTRACT_ADDRESS = "inj1lxz8ty4rdulcux5knduj686097gawxwmwe8w5w";