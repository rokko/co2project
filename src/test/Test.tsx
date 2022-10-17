import React from "react";
import {
  co2contract,
  handleEthereum,
  injected,
  mumbaiRete,
  polygonRete,
} from "../wallet/wallet";
import { useWeb3React } from "@web3-react/core";
import ABI from "../wallet/lastAbi.json";
import Web3Utils from "web3-utils";
var Contract = require("web3-eth-contract");

const Test = () => {
  const { chainId, account, activate, active, library } = useWeb3React();
  Contract.setProvider(window.ethereum);
  const contract = new Contract(ABI, co2contract);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <button>Balance OF</button>
    </div>
  );
};
