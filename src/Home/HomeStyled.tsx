import { Box, Button, Container } from "@mui/material";
import styled from "styled-components";

const ContainerHome = styled.div`
  background: #00b09b; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    #4cffae,
    #ffffff
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    #4cffae,
    #ffffff
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10rem;
`;
const ContainerTop = styled(Box)`
  padding: 2rem;
  display: flex;
  flex-direction: row;
  width: 90%;
  justify-content: space-between;
  align-items: center;
  align-content: center;
`;
const ContainerTitle = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
`;
const TitleHome = styled.p`
  font-size: 75px;
  color: black;
  font-weight: bold;
  text-align: center;
`;

const BlueSpan = styled.span`
  color: #3075ff;
`;

const ButtonMetamask = styled.button`
  background-color: #3075ff;
  border-radius: 10px;
  height: 50px;
  width: 220px;
  font-weight: bold;
  font-size: 20px;
  color: white;
  border: 1px solid #006400;
  -webkit-box-shadow: 1px 2px 19px 8px rgba(0, 0, 0, 0.24);
  box-shadow: 1px 2px 19px 8px rgba(0, 0, 0, 0.24);
`;

const SubtitleText = styled.p`
  margin-top: -50px;
  font-style: italic;
  font-size: 25px;
  text-align: center;
`;

export {
  ContainerTop,
  ContainerHome,
  ContainerTitle,
  TitleHome,
  BlueSpan,
  ButtonMetamask,
  SubtitleText,
};
