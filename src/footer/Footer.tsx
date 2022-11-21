import React from "react";
import { useMediaQuery } from "react-responsive";
import { ContainerFooter, LeftFooter, RightFooter } from "./FooterStyled";

const Footer = () => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  if (!isTabletOrMobile) {
    return (
      <ContainerFooter id="footer">
        <LeftFooter>
          <a
            href={
              "https://calendly.com/maxschipilliti/consulenze-percorso-di-affiancamento?month=2022-11"
            }
          >
            <button
              style={{
                boxShadow: "1px 2px 19px 8px rgba(0, 0, 0, 0.24);",
                backgroundColor: "#3075ff",
                width: "20rem",
                height: "2rem",
                color: "white",
                borderRadius: "15px",
                border: "none",
                fontWeight: "bold",
              }}
            >
              PRENOTA UNA CHIAMATA
            </button>
          </a>
        </LeftFooter>
        <RightFooter>
          <p style={{ fontSize: "40px", fontWeight: "bold" }}>BAMBOO 2.0 </p>
          <p style={{ fontSize: "22px" }}>Email</p>
          <input
            style={{ width: "300px", height: "40px", borderRadius: "20px" }}
          ></input>
        </RightFooter>
      </ContainerFooter>
    );
  } else {
    return (
      <ContainerFooter
        style={{ display: "flex", flexDirection: "column" }}
        id="footer"
      >
        <LeftFooter style={{ borderRight: "none" }}>
          <p style={{ fontSize: "22px" }}>Email</p>
          <input
            style={{ width: "300px", height: "40px", borderRadius: "20px" }}
          ></input>
        </LeftFooter>
        <RightFooter>
          <p style={{ fontSize: "40px", fontWeight: "bold" }}>BAMBOO 2.0 </p>
          <a
            href={
              "https://calendly.com/maxschipilliti/consulenze-percorso-di-affiancamento?month=2022-11"
            }
          >
            <button
              style={{
                backgroundColor: "#3075ff",
                width: "20rem",
                height: "2rem",
                color: "white",
                borderRadius: "15px",
                border: "none",
                fontWeight: "bold",
              }}
            >
              PRENOTA UNA CHIAMATA
            </button>
          </a>
        </RightFooter>
      </ContainerFooter>
    );
  }
};

export default Footer;
