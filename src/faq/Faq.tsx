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
              Tra le diverse tecnolgie presenti attualmente sul mercato, abbiamo
              selezione quella di Polygon MATIC, in quanto è quella che risulta
              essere più completa su 3 punti:
              <br />
              -Prestazioni;
              <br />
              -Pubblico;
              <br />
              -Costi;
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
              L'utente ha la possibilità di acquistare due tipologie di crediti
              CO2;
              <br />
              -Crediti ad uso singolo: in questo caso una volta acquistato/i,
              l'utente non potrà trasferirli ad altri soggetti;
              <br></br>-Crediti scambiali: in questo caso invece, una volta
              acquistato/i, l'utente potrà scambiarli nel mercato secondario di
              sua scelta (es. trasferimento diretto, vendita su Opensea o
              altri…).
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
              Per acquistare il/i tuo/i credito/i devi innanzitutto collegare il
              tuo portafoglio MetaMask
              <br />
              1. Se non possiedi un portafoglio segui i passaggi elencati qui di
              seguito, altrimenti passa al prossimo punto:
              <br />
              Vai a impostazioni {">"} Estensioni {">"} Nella barra di ricerca
              digita "MetaMask" {">"} clicca su Aggiungi Estensione
              <br />
              Una volta aggiunta l'estensione procedi alla creazione del
              portafoglio (ricorda di salvare esternamente la passphrase di 12
              parole)
              <br />
              <br />
              2.Clicca su "Connetti Portafoglio" per collegare il tuo
              portafoglio all'app.
              <br />
              Dopo aver scelto la tipologia di credito desiderata, seleziona la
              quantità di crediti CO2 da acquistare e procedere con la
              transazione, cliccando su acquista.
              <br />
              Apparirà la finestra di MetaMask per controllare che il saldo sia
              sufficiente e per permetterti di confermare la transazione.
              <br />
              Arrivato a questo punto avrai correttamente acquistato i tuoi
              crediti CO2
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
