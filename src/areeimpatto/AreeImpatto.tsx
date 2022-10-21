import React from "react";
import { TitleSection } from "../co2listing/Co2ListingStyled";
import {
  ImpattoTesto,
  ImpattoTitle,
  ImpattoContainer,
  ImpattoSection,
  ContainerTotale,
} from "./AreeImpattoStyled";

const AreeImpatto = () => {
  return (
    <ContainerTotale>
      <TitleSection>4 AREE D'IMPATTO POSITIVO DEL BAMBU'</TitleSection>
      <ImpattoContainer>
        <ImpattoSection>
          <ImpattoTitle>Inquinamento atmosferico</ImpattoTitle>
          <ImpattoTesto>
            Le foglie di bambù assorbono l’anidride carbonica e trasformano gli
            agenti nocivi in biomassa. Una piantagione di bambù è capace di
            assorbire tonnellate di carbonio smaltendo azoto e metalli pesanti.
          </ImpattoTesto>
        </ImpattoSection>
        <ImpattoSection>
          <ImpattoTitle>Inquinamento agricolo</ImpattoTitle>
          <ImpattoTesto>
            Le piante di bambù crescono autonomamente. Ogni coltivazione di
            bambù gigante si rigenera autonomamente. Dopo aver disposto le prime
            piante non servirà inquinare l’aria muovendo trattori o macchine
            agricole per arare il terreno.
          </ImpattoTesto>
        </ImpattoSection>
        <ImpattoSection>
          <ImpattoTitle>Inquinamento idrico</ImpattoTitle>
          <ImpattoTesto>
            La capacità delle colture di bambù di elaborare i nitriti consente
            di mantenere pulite le acque di fiumi e laghi. Un’azione, quella
            delle acque, garantita anche dalla capacità di evitare le frane e il
            cedimento a valle dei detriti.
          </ImpattoTesto>
        </ImpattoSection>
        <ImpattoSection>
          <ImpattoTitle>Inquinamento del suolo</ImpattoTitle>
          <ImpattoTesto>
            Le proprietà antibatteriche e antimicotiche del bambù lo rendono
            immune dagli attacchi di parassiti e batteri, eliminando per intero
            l’impiego di prodotti chimici e pesticidi. Dalla piantumazione del
            bambù gigante fino alla crescita delle canne (culmi) non serve
            quindi nessuna aggiunta di pesticidi o erbicidi. Le radici del bambù
            creano una fitta ramificazione nel sottosuolo creando un sostegno
            molto utile per il terreno. Non solo: sono attribuite al bambù
            capacità importanti di bonifica dei terreni. Così come avviene per
            l’inquinamento dell’aria, le radici del bambù assorbono le sostanze
            nocive dal suolo e lo trasformano in ossigeno.
          </ImpattoTesto>
        </ImpattoSection>
      </ImpattoContainer>
    </ContainerTotale>
  );
};

export default AreeImpatto;
