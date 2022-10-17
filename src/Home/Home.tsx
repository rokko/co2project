import React from "react";
import {
  ButtonMetamask,
  ContainerHome,
  ContainerTitle,
  ContainerTop,
  TitleHome,
} from "./HomeStyled";
import ABI from "../wallet/abi_co2.json";

import Logo from "../media/logo.png";
import { Co2Listing } from "../co2listing";
import { TheMission } from "../themission";
import {
  co2contract,
  handleEthereum,
  injected,
  mumbaiRete,
  polygonRete,
} from "../wallet/wallet";
import { useWeb3React } from "@web3-react/core";
var Contract = require("web3-eth-contract");

const Home = () => {
  const { chainId, account, activate, active, library, deactivate } =
    useWeb3React();
  console.log(account);
  console.log(Contract);
  Contract.setProvider(window.ethereum);
  const contract = new Contract(ABI, co2contract);
  console.log(contract);

  handleEthereum();

  const connect = async () => {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [mumbaiRete],
      });
    } catch (switchError) {
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [mumbaiRete],
      });
    }
    await activate(injected);
    // handle other "switch" errors
  };
  return (
    <ContainerHome>
      <ContainerTop>
        <img src={Logo} width={"200rem"}></img>
        {!account ? (
          <ButtonMetamask onClick={() => connect()}>
            Connetti Portafoglio
          </ButtonMetamask>
        ) : (
          <ButtonMetamask
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
            onClick={() => deactivate()}
          >
            Disconnetti
          </ButtonMetamask>
        )}
      </ContainerTop>
      <ContainerTitle>
        <TitleHome>
          Discover, collect, and <br />
          sell your CO2 credits
        </TitleHome>
      </ContainerTitle>
      <Co2Listing />
      <TheMission />
    </ContainerHome>
  );
};

export default Home;
