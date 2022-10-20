import React from "react";
import { TitleSection } from "../co2listing/Co2ListingStyled";
import {
  BloccoTesto,
  ContainerImages,
  SingleImage,
  TestoProblemi,
  TitoloProblemi,
} from "./ProblemiStyled";
import Sole from "../media/sole.jpg";
import Deserto from "../media/deserto.jpg";
import Montagna from "../media/montagna.jpg";
const Problemi = () => {
  return (
    <>
      <TitleSection>PROBLEMI</TitleSection>
      <ContainerImages>
        <SingleImage>
          <img
            src={Sole}
            style={{ width: "500px", borderRadius: "200px", height: "350px" }}
          />
          <BloccoTesto>
            <TestoProblemi>
              <TitoloProblemi>Surriscaldamento ed effetto serra</TitoloProblemi>
              <br />
              per le enormi emissioni di CO2
            </TestoProblemi>
          </BloccoTesto>
        </SingleImage>
        <SingleImage>
          <img
            src={Deserto}
            style={{ width: "500px", borderRadius: "200px", height: "350px" }}
          />
          <BloccoTesto>
            <TestoProblemi>
              <TitoloProblemi>Impoverimento dei terreni </TitoloProblemi>
              <br />
              fino a desertificazione
            </TestoProblemi>
          </BloccoTesto>
        </SingleImage>
        <SingleImage>
          <img
            src={Montagna}
            style={{ width: "500px", borderRadius: "200px", height: "350px" }}
          />
          <BloccoTesto>
            <TestoProblemi>
              <TitoloProblemi> Dissesto idrogeologico</TitoloProblemi>
              <br />
              con conseguenti smottamenti, frane ed
              <br />
              effetti devastanti da alluvioni
            </TestoProblemi>
          </BloccoTesto>
        </SingleImage>
      </ContainerImages>
    </>
  );
};

export default Problemi;
