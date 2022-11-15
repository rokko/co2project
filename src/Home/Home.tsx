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
      <a
        style={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          zIndex: "1000000",
          width: "70px",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
        href="https://wa.me/393343648315"
      >
        <img
          alt={"whatsapp"}
          src={
            "data:image/png;base64,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"
          }
          style={{
            width: "70px",
          }}
        />
      </a>

      <Footer />
    </ContainerHome>
  );
};

export default Home;
