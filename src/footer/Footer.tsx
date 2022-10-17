import React from "react";
import { ContainerFooter } from "./FooterStyled";

const Footer = () => {
  return (
    <ContainerFooter>
      <p>Nome</p>
      <input style={{ height: "40px" }}></input>
      <p>Cognome</p>
      <input style={{ height: "40px" }}></input>
      <p>Email</p>
      <input style={{ height: "40px" }}></input>
    </ContainerFooter>
  );
};

export default Footer;
