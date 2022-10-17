import { Box, Button, Container } from "@mui/material";
import styled from "styled-components";

const ContainerHome = styled.div`
  background: #00b09b; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    #00b09b,
    #96c93d
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    #00b09b,
    #96c93d
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  height: 100%;
`;
const ContainerTop = styled(Box)`
  padding: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const ContainerTitle = styled(Box)`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
`;
const TitleHome = styled.p`
  font-size: 80px;
  color: darkgreen;
  font-weight: bold;
`;

const BlueSpan = styled.span`
  color: blue;
`;

const ButtonMetamask = styled.button`
  background-color: darkgreen;
  border-radius: 10px;
  height: 40px;
  width: 200px;
  font-weight: bold;
  color: white;
  border: 1px solid #006400;
  -webkit-box-shadow: 1px 2px 19px 8px rgba(0, 0, 0, 0.24);
  box-shadow: 1px 2px 19px 8px rgba(0, 0, 0, 0.24);
`;

export {
  ContainerTop,
  ContainerHome,
  ContainerTitle,
  TitleHome,
  BlueSpan,
  ButtonMetamask,
};
