import React from "react";
import { TitleSection } from "../co2listing/Co2ListingStyled";
import { ReactComponent as Arch } from "../media/arch.svg";
const Crediti = () => {
  return (
    <div id="blockchain">
      <TitleSection>I NOSTRI CREDITI SU BLOCKCHAIN</TitleSection>
      <Arch style={{ width: "100%" }} />
    </div>
  );
};
export default Crediti;
