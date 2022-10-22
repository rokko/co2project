import React from "react";
import {
  BlueSpan,
  ButtonMetamask,
  ContainerHome,
  ContainerTitle,
  ContainerTop,
  SubtitleText,
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
import { Footer } from "../footer";
import { Problemi } from "../problemi";
import { Soluzione } from "../soluzione";
import { Crediti } from "../crediti";
import { AreeImpatto } from "../areeimpatto";
import { Faq } from "../faq";
import { Partner } from "../partner";
import SfondoPrimo from "../media/sfondoiniziale.png";
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
      <div
        style={{
          backgroundImage: `url(${SfondoPrimo})`,
          height: "1100px",
          width: "99vw",
          backgroundSize: "cover",
        }}
      >
        <ContainerTop>
          <img src={Logo} width={"180rem"}></img>
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
            Scopri, colleziona e<br />
            scambia i tuoi <BlueSpan>Crediti CO2</BlueSpan>
          </TitleHome>
          <SubtitleText>
            "Etica e sostenibilità dovrebbero essere alla base di ogni nostra
            <br />
            attività se vogliamo condurre una vita in salute e benessere
            sociale"
          </SubtitleText>
        </ContainerTitle>
      </div>
      <Co2Listing />
      <TheMission />
      <Problemi />
      <Soluzione />
      <Crediti />
      <AreeImpatto />
      <Faq />
      <Partner />

      <Footer />
    </ContainerHome>
  );
};

export default Home;
