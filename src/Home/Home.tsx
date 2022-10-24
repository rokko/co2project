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
import ABI from "../wallet/nuovo.json";

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
import { SecondPartHeader } from "../project/ProjectStyled";
import { Link } from "react-router-dom";
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
          height: "1200px",
          width: "99vw",
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <ContainerTop>
          <img src={Logo} width={"160rem"}></img>
          <SecondPartHeader>
            <a href="#obiettivo" style={{ textDecoration: "none" }}>
              <p
                style={{ color: "black", fontSize: "25px", fontWeight: "500" }}
              >
                Obiettivo
              </p>
            </a>
            <a href="#blockchain" style={{ textDecoration: "none" }}>
              <p
                style={{ color: "black", fontSize: "25px", fontWeight: "500" }}
              >
                Blockchain
              </p>
            </a>
            <a href="#faq" style={{ textDecoration: "none" }}>
              <p
                style={{ color: "black", fontSize: "25px", fontWeight: "500" }}
              >
                FAQ
              </p>
            </a>
            <a href="#footer" style={{ textDecoration: "none" }}>
              <p
                style={{ color: "black", fontSize: "25px", fontWeight: "500" }}
              >
                Contattaci
              </p>
            </a>
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
          </SecondPartHeader>
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
