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
import Pulse from "react-reveal/Pulse";

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
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
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
        <Pulse duration={4000}>
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
        </Pulse>
      </div>
      <Co2Listing />
      <TheMission />
      <Problemi />
      <Soluzione />
      <Crediti />
      <AreeImpatto />
      <Faq />
      <Partner />

      <img
        style={{
          position: "fixed",
          backgroundColor: "white",
          bottom: "5rem",
          right: "1rem",

          zIndex: "1000000",

          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
        src={
          "data:image/png;base64,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"
        }
      />

      <Footer />
    </ContainerHome>
  );
};

export default Home;
