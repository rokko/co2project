import React from "react";
import { TitleSection } from "../co2listing/Co2ListingStyled";
import {
  TestoSoluzione,
  ContainerSoluzione,
  ContainerTotaleSoluzione,
  BounceAnimation,
} from "./SoluzioneStyled";
import Bamboo from "../media/bamboo.jpg";
import { height } from "@mui/system";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import { useMediaQuery } from "react-responsive";

const Soluzione = () => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });

  if (!isTabletOrMobile) {
    return (
      <div style={{ width: "100%" }}>
        <TitleSection>SOLUZIONE</TitleSection>
        <ContainerTotaleSoluzione>
          <ContainerSoluzione
            style={{
              position: "absolute",
              left: "10%",
              top: "5rem",
              right: "55rem",
              borderRadius: "20px",
            }}
          >
            {" "}
            <Flip left>
              <TestoSoluzione>
                Per compensare l’aumento della CO2 bisogna aumentare la capacità
                di assorbimento. In natura questa è una proprietà tipica degli
                alberi. <br />
                Gli alberi sono in grado di assorbire la CO2 e rilasciare
                ossigeno grazie al processo di fotosintesi clorofilliana.
                <br /> Il Bambù rappresenta una coltivazione etica che contrasta
                pienamente ciascuna delle criticità esposte e rientra a pieno
                titolo nella GREEN ECONOMY.
                <br /> Si tratta di una risorsa naturale molto resistente e,
                grazie alla sua capacità di catturare una quantità di anidride
                carbonica enormemente superiore a quella assorbita da un bosco
                delle stesse dimensioni, presenta numerosi vantaggi per
                l’ambiente.
                <br />
              </TestoSoluzione>
            </Flip>
          </ContainerSoluzione>

          <ContainerSoluzione
            style={{
              position: "absolute",
              right: "10%",
              bottom: "5rem",
              left: "60rem",
              borderRadius: "20px",
            }}
          >
            <Flip right>
              <TestoSoluzione>
                Il suo apparato radicale, che si espande ad una profondità tra i
                10 ed i 30 cm, ha un andamento leptomorfo (strisciante), funge
                da vera e propria rete geotessile combattendo il dissesto
                idrogeologico oltre ad essere un efficace sistema di depurazione
                naturale delle acque reflue e del suolo da qualsiasi sostanza ed
                inquinante chimico.
                <br /> Il bambù è la pianta del futuro, in grado di combattere
                la deforestazione e di proteggere il suolo da smottamenti, frane
                e dilavamenti.
              </TestoSoluzione>
            </Flip>
          </ContainerSoluzione>
        </ContainerTotaleSoluzione>
      </div>
    );
  } else {
    return (
      <div style={{ width: "100%" }}>
        <TitleSection>SOLUZIONE</TitleSection>
        <ContainerTotaleSoluzione
          style={{
            flexDirection: "column",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ContainerSoluzione style={{ width: "300px", borderRadius: "20px" }}>
            {" "}
            <Flip left>
              <TestoSoluzione
                style={{ fontSize: "18px", lineHeight: "1.25rem" }}
              >
                Per compensare l’aumento della CO2 bisogna aumentare la capacità
                di assorbimento. In natura questa è una proprietà tipica degli
                alberi. <br />
                Gli alberi sono in grado di assorbire la CO2 e rilasciare
                ossigeno grazie al processo di fotosintesi clorofilliana.
                <br /> Il Bambù rappresenta una coltivazione etica che contrasta
                pienamente ciascuna delle criticità esposte e rientra a pieno
                titolo nella GREEN ECONOMY.
                <br /> Si tratta di una risorsa naturale molto resistente e,
                grazie alla sua capacità di catturare una quantità di anidride
                carbonica enormemente superiore a quella assorbita da un bosco
                delle stesse dimensioni, presenta numerosi vantaggi per
                l’ambiente.
                <br />
              </TestoSoluzione>
            </Flip>
          </ContainerSoluzione>

          <ContainerSoluzione style={{ width: "300px", borderRadius: "20px" }}>
            <Flip right>
              <TestoSoluzione
                style={{ fontSize: "18px", lineHeight: "1.25rem" }}
              >
                Il suo apparato radicale, che si espande ad una profondità tra i
                10 ed i 30 cm, ha un andamento leptomorfo (strisciante), funge
                da vera e propria rete geotessile combattendo il dissesto
                idrogeologico oltre ad essere un efficace sistema di depurazione
                naturale delle acque reflue e del suolo da qualsiasi sostanza ed
                inquinante chimico.
                <br /> Il bambù è la pianta del futuro, in grado di combattere
                la deforestazione e di proteggere il suolo da smottamenti, frane
                e dilavamenti.
              </TestoSoluzione>
            </Flip>
          </ContainerSoluzione>
        </ContainerTotaleSoluzione>
      </div>
    );
  }
};

export default Soluzione;
