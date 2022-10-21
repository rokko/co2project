import React from "react";
import {
  ButtonMetamaskProject,
  HeaderProject,
  SecondPartHeader,
  ContainerProject,
  BoxProject,
  BoxText,
  TestoProgetto,
} from "./ProjectStyled";
import {
  BoxNFT,
  ButtonBuy,
  TextNft,
  TextPrice,
  TitleSection,
} from "../co2listing/Co2ListingStyled";
import Albero from "../media/albero.png";
import { Link } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
import { connect } from "http2";
import { mumbaiRete, injected } from "../wallet/wallet";
import { ButtonMetamask, ContainerTop } from "../Home/HomeStyled";
import Logo from "../media/logo.png";
import { Crediti } from "../crediti";
import { Faq } from "../faq";

const Project = () => {
  const { chainId, account, activate, active, library, deactivate } =
    useWeb3React();
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
    <ContainerProject>
      <ContainerTop>
        <img src={Logo} width={"200rem"}></img>

        <SecondPartHeader>
          <Link to={"/"}>
            <p>Home</p>
          </Link>
          <ButtonMetamask
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
            onClick={() => {
              account ? deactivate() : connect();
            }}
          >
            {account ? "Disconnetti" : "Connetti Portafoglio"}
          </ButtonMetamask>
        </SecondPartHeader>
      </ContainerTop>
      <BoxProject>
        <BoxNFT>
          <img src={Albero} width={"80%"} />
          <div style={{ display: "flex", flexDirection: "row", gap: "5rem" }}>
            <TextNft>
              CO2 credit <br />
              TRADABLE
            </TextNft>
          </div>

          <TextPrice>90€ - 101,3 MATIC</TextPrice>

          <ButtonBuy>BUY</ButtonBuy>
        </BoxNFT>
        <BoxText>
          <TitleSection style={{ textAlign: "left" }}>Credito CO2</TitleSection>
          <TestoProgetto>
            L’unicità del bambù è rappresentata dall’estrema rapidità di
            crescita e di sviluppo. La sua particolare abilità nel rigenerarsi
            spontaneamente ogni qualvolta venga recisa, fa del bambù una pianta
            che si presta bene a numerosi impieghi: dalla cucina all’industria
            dell’abbigliamento per la realizzazione di tessuti, dai mobili, ma
            soprattutto al mondo dell’edilizia, bioedilizia, dove viene
            utilizzata per costruire edifici a bassissimo impatto ambientale.
            <br />
            L’utilizzo del bambù per le costruzioni garantisce addirittura
            maggiori prestazioni (in termini di resistenza, trazione e
            compressione) rispetto ai tradizionali materiali come il legno,
            l’acciaio e il calcestruzzo ed è rinominato “acciaio vegetale”.
          </TestoProgetto>
        </BoxText>
      </BoxProject>
      <Crediti />
      <Faq />
    </ContainerProject>
  );
};

export default Project;
