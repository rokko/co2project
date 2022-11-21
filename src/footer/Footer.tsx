import React from "react";
import { useMediaQuery } from "react-responsive";
import { ContainerFooter, LeftFooter, RightFooter } from "./FooterStyled";
import "./Footer.css";
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
                color: "white",
                borderRadius: "5px",
                border: "none",
                padding: "10px",
                fontWeight: "bold",
                fontSize: "15px",
              }}
            >
              Prenota una chiamata{" "}
            </button>
          </a>
        </LeftFooter>
        <RightFooter>
          <p style={{ fontSize: "40px", fontWeight: "bold" }}>BAMBOO 2.0 </p>
          <div className="container">
            <form id="contact" action="" method="post">
              <h4>Contattaci</h4>
              <fieldset>
                <input
                  placeholder="Il tuo indirizzo Email"
                  type="email"
                  required
                />
              </fieldset>
              <fieldset>
                <textarea
                  placeholder="Scrivi qui il tuo messaggio"
                  required
                ></textarea>
              </fieldset>
              <fieldset>
                <button
                  name="submit"
                  type="submit"
                  id="contact-submit"
                  data-submit="...Sending"
                >
                  Invia
                </button>
              </fieldset>
            </form>
          </div>
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
