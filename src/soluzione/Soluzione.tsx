import React from "react";
import { TitleSection } from "../co2listing/Co2ListingStyled";
import {
  TestoSoluzione,
  ContainerSoluzione,
  ContainerTotaleSoluzione,
} from "./SoluzioneStyled";
import Bamboo from "../media/bamboo.jpg";
import { height } from "@mui/system";
const Soluzione = () => {
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
          }}
        >
          <TestoSoluzione>
            Per compensare l’aumento della CO2 bisogna aumentare la capacità di
            assorbimento. In natura questa è una proprietà tipica degli alberi.{" "}
            <br />
            Gli alberi sono in grado di assorbire la CO2 e rilasciare ossigeno
            grazie al processo di fotosintesi clorofilliana.
            <br /> Il Bambù rappresenta una coltivazione etica che contrasta
            pienamente ciascuna delle criticità esposte e rientra a pieno titolo
            nella GREEN ECONOMY.
            <br /> Si tratta di una risorsa naturale molto resistente e, grazie
            alla sua capacità di catturare una quantità di anidride carbonica
            enormemente superiore a quella assorbita da un bosco delle stesse
            dimensioni, presenta numerosi vantaggi per l’ambiente.
            <br />
          </TestoSoluzione>
        </ContainerSoluzione>
        <ContainerSoluzione
          style={{
            position: "absolute",
            right: "10%",
            bottom: "5rem",
            left: "60rem",
          }}
        >
          <TestoSoluzione>
            Il suo apparato radicale, che si espande ad una profondità tra i 10
            ed i 30 cm, ha un andamento leptomorfo (strisciante), funge da vera
            e propria rete geotessile combattendo il dissesto idrogeologico
            oltre ad essere un efficace sistema di depurazione naturale delle
            acque reflue e del suolo da qualsiasi sostanza ed inquinante
            chimico.
            <br /> Il bambù è la pianta del futuro, in grado di combattere la
            deforestazione e di proteggere il suolo da smottamenti, frane e
            dilavamenti.
          </TestoSoluzione>
        </ContainerSoluzione>
      </ContainerTotaleSoluzione>
    </div>
  );
};

export default Soluzione;
