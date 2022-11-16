import React from "react";
import { useMediaQuery } from "react-responsive";
import { TitleSection } from "../co2listing/Co2ListingStyled";
import Messina from "../media/messina.jpg";
import Science from "../media/science.png";
import { PartnerContainer } from "./PartnerStyled";
const Partner = () => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  if (!isTabletOrMobile) {
    return (
      <>
        <TitleSection>I NOSTRI PARTNER</TitleSection>
        <PartnerContainer>
          <img src={Science} />
          <img src={Messina} />
        </PartnerContainer>
      </>
    );
  } else {
    return (
      <>
        <TitleSection>I NOSTRI PARTNER</TitleSection>
        <PartnerContainer style={{ display: "flex", flexDirection: "column" }}>
          <img src={Science} />
          <img src={Messina} />
        </PartnerContainer>
      </>
    );
  }
};

export default Partner;
