import React from "react";
import {ContainerFooter, LeftFooter, RightFooter} from "./FooterStyled";

const Footer = () => {
  return (
    <ContainerFooter id="footer">
    <LeftFooter>
        <p style={{fontSize:'28px', fontWeight:'bold'}}>Iscriviti alla newsletter</p>
      <p style={{fontSize:'22px'}}>Nome</p>
      <input style={{ width:'300px',height: "40px", borderRadius:'20px' }} />
      <p style={{fontSize:'22px'}}>Cognome</p>
      <input style={{ width:'300px',height: "40px" ,borderRadius:'20px'}}></input>
      <p style={{fontSize:'22px'}}>Email</p>
      <input style={{ width:'300px',height: "40px",borderRadius:'20px' }}></input>
    </LeftFooter>
      <RightFooter>
        <p style={{fontSize:'40px', fontWeight:'bold'}}>BAMBOO 2.0 </p>
      </RightFooter>
    </ContainerFooter>
  );
};

export default Footer;
