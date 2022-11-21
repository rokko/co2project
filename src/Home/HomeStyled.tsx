import { Box, Button, Container } from "@mui/material";
import styled from "styled-components";
import { pulse } from "react-animations";

const ContainerHome = styled.div`
  /* background: rgb(76, 255, 174);
  background: linear-gradient(
    180deg,
    rgba(76, 255, 174, 1) 0%,
    rgba(255, 255, 255, 1) 44%,
    rgba(255, 255, 255, 1) 69%,
    rgba(255, 255, 255, 1) 100%
  );
  */
  background-color: #fefefe;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10rem;
`;
const ContainerTop = styled(Box)`
  padding: 0.5rem;
  display: flex;
  flex-direction: row;
  width: 95%;
  justify-content: space-between;
  align-items: center;
  align-content: center;
`;
const ContainerTitle = styled.div`
  animation: 10s ${pulse};
  margin-top: 16rem;
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
  cursor: pointer;

  background-color: #3075ff;
  border-radius: 10px;
  height: 50px;
  width: 220px;
  font-weight: bold;
  font-size: 20px;
  color: white;
  border: none;
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
