import React from "react";
import { TitleSection } from "../co2listing/Co2ListingStyled";
import {
  BloccoTesto,
  ContainerImages,
  ContainerTotaleProblemi,
  SingleImage,
  TestoProblemi,
  TitoloProblemi,
} from "./ProblemiStyled";
import Sole from "../media/sole.jpg";
import Deserto from "../media/deserto.jpg";
import Montagna from "../media/montagna.jpg";
import Fade from "react-reveal/Fade";
import { useMediaQuery } from "react-responsive";

const Problemi = () => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });

  if (!isTabletOrMobile)
    return (
      <ContainerTotaleProblemi>
        <TitleSection>PROBLEMI</TitleSection>
        <ContainerImages>
          <Fade left>
            <SingleImage>
              <img
                src={Sole}
                style={{
                  width: "500px",
                  height: "350px",
                  borderRadius: "20px",
                }}
              />
              <BloccoTesto>
                <TestoProblemi>
                  <TitoloProblemi>
                    Surriscaldamento ed effetto serra
                  </TitoloProblemi>
                  <br />
                  per le enormi emissioni di CO2
                </TestoProblemi>
              </BloccoTesto>
            </SingleImage>
          </Fade>
          <Fade right>
            <SingleImage>
              <BloccoTesto>
                <TestoProblemi>
                  <TitoloProblemi>Impoverimento dei terreni </TitoloProblemi>
                  <br />
                  fino a desertificazione
                </TestoProblemi>
              </BloccoTesto>
              <img
                src={Deserto}
                style={{
                  width: "500px",
                  height: "350px",
                  borderRadius: "20px",
                }}
              />
            </SingleImage>
          </Fade>
          <Fade left>
            <SingleImage>
              <img
                src={Montagna}
                style={{
                  width: "500px",
                  height: "350px",
                  borderRadius: "20px",
                }}
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
          </Fade>
        </ContainerImages>
      </ContainerTotaleProblemi>
    );
  else
    return (
      <ContainerTotaleProblemi>
        <TitleSection>PROBLEMI</TitleSection>
        <ContainerImages>
          <Fade left>
            <SingleImage style={{ flexDirection: "column" }}>
              <img
                src={Sole}
                style={{
                  width: "300px",
                  borderRadius: "20px",
                }}
              />
              <BloccoTesto>
                <TestoProblemi>
                  <TitoloProblemi>
                    Surriscaldamento ed effetto serra
                  </TitoloProblemi>
                  <br />
                  per le enormi emissioni di CO2
                </TestoProblemi>
              </BloccoTesto>
            </SingleImage>
          </Fade>
          <Fade right>
            <SingleImage style={{ flexDirection: "column" }}>
              <img
                src={Deserto}
                style={{
                  width: "300px",
                  borderRadius: "20px",
                }}
              />
              <BloccoTesto>
                <TestoProblemi>
                  <TitoloProblemi>Impoverimento dei terreni </TitoloProblemi>
                  <br />
                  fino a desertificazione
                </TestoProblemi>
              </BloccoTesto>
            </SingleImage>
          </Fade>
          <Fade left>
            <SingleImage style={{ flexDirection: "column" }}>
              <img
                src={Montagna}
                style={{
                  width: "300px",
                  borderRadius: "20px",
                }}
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
          </Fade>
        </ContainerImages>
      </ContainerTotaleProblemi>
    );
};

export default Problemi;
