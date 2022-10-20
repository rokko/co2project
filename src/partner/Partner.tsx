import React from "react";
import { TitleSection } from "../co2listing/Co2ListingStyled";
import Messina from "../media/messina.jpg";
import Science from "../media/science.png";
import { PartnerContainer } from "./PartnerStyled";
const Partner = () => {
  return (
    <>
      <TitleSection>I NOSTRI PARTNER</TitleSection>
      <PartnerContainer>
        <img src={Science} />
        <img src={Messina} />
      </PartnerContainer>
    </>
  );
};

export default Partner;
