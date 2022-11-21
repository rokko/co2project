import { Divider } from "@mui/material";
import React from "react";
import { TitleSection } from "../co2listing/Co2ListingStyled";
import { ContainerFaq, TestoDomandaFaq } from "./FaqStyled";
import { Collapse } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useMediaQuery } from "react-responsive";

const Faq = () => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  if (!isTabletOrMobile) {
    return (
      <ContainerFaq id="faq">
        <TitleSection style={{ textAlign: "left" }}>FAQ</TitleSection>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="first-header"
          >
            <TestoDomandaFaq>
              Perchè è stata adottata la tecnologia blockchain?
            </TestoDomandaFaq>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Abbiamo scelto di adottare questa tecnologia per migliorare
              l'esperienza d'uso dei nostri clienti, con una gestione più
              efficiente e una certificazione piu solida e inalterabile dei
              nostri crediti CO2.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="second-header"
          >
            <TestoDomandaFaq>
              Quale tecnologia blockchain è stata scelta?
            </TestoDomandaFaq>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="third-header"
          >
            <TestoDomandaFaq>
              Cosa può fare l'utente, una volta acquistato il/i credito/i?
            </TestoDomandaFaq>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="third-header"
          >
            <TestoDomandaFaq>Come acquistare un credito?</TestoDomandaFaq>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </ContainerFaq>
    );
  } else {
    return (
      <ContainerFaq style={{ width: "100%", padding: "2rem" }} id="faq">
        <TitleSection style={{ textAlign: "left" }}>FAQ</TitleSection>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="first-header"
          >
            <TestoDomandaFaq>
              Perchè è stata adottata la tecnologia blockchain?
            </TestoDomandaFaq>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="second-header"
          >
            <TestoDomandaFaq>
              Quale tecnologia blockchain è stata scelta?
            </TestoDomandaFaq>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="third-header"
          >
            <TestoDomandaFaq>
              Cosa può fare l'utente, una volta acquistato il/i credito/i?
            </TestoDomandaFaq>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="third-header"
          >
            <TestoDomandaFaq>Come acquistare un credito?</TestoDomandaFaq>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </ContainerFaq>
    );
  }
};

export default Faq;
