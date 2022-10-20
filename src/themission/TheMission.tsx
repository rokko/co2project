import React from "react";
import { TitleSection } from "../co2listing/Co2ListingStyled";
import { ContainerObiettivo } from "./TheMissionStyled";

const TheMission = () => {
  return (
    <>
      <ContainerObiettivo>
        <TitleSection>L'OBIETTIVO</TitleSection>
        <p>
          In un’ottica di eticità e di conservazione dell’ambiente nasce il
          progetto di realizzare dei veri e propri “polmoni verdi” che assorbano
          anidride carbonica rilasciando ossigeno.
          <br /> Partendo dalle normative messe in atto dai governi al fine di
          combattere quella che è una vera e propria guerra per preservare il
          nostro ambiente, specialmente dal devastante effetto serra, siamo in
          grado di realizzare degli impianti specificatamente atti a filtrare
          l’aria depurandola. <br />
          Allo stesso tempo si possono ricavare prodotti di pregio
          eco-sostenibili e di grande valore anche commerciale.
          <br /> I risvolti benefici sono innumerevoli e, con l’iniziativa,
          pensiamo di realizzare piccoli progetti ma di grosso impatto sociale
          che possano essere di monito a tutti delle enormi risorse naturali di
          cui l’uomo può disporre.
        </p>
      </ContainerObiettivo>
    </>
  );
};

export default TheMission;
