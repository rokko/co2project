import styled from "styled-components";
import SfondoObiettivo from "../media/sfondoobiettivo.png";
import { fadeInRight } from "react-animations";
const ContainerObiettivo = styled.div`
  animation: 2s keyframes ${fadeInRight};
  border-radius: 20px;
  width: 70%;
  padding: 1rem;
  font-size: 23px;
  display: flex;
  line-height: 3rem;
  flex-direction: column;
  -webkit-box-shadow: 1px 1px 17px 6px rgba(0, 0, 0, 0.39);
  box-shadow: 1px 1px 17px 6px rgba(0, 0, 0, 0.39);
  background-color: rgb(
    1,
    51,
    32,
    0.7
  ); //biancorgb(255,255,255,0.7); // verdone  // vecchio rgb(134, 177, 63, 0.7);
`;

const TestoObiettivo = styled.p`
  text-align: center;
  color: white; //white;
`;

const ContainerTotaleObiettivo = styled.div`
  border-radius: 20px;
  background-image: url("${SfondoObiettivo}");
  background-size: cover;
  height: 800px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  -webkit-box-shadow: 1px 2px 19px 8px rgba(0, 0, 0, 0.24);
  box-shadow: 1px 2px 19px 8px rgba(0, 0, 0, 0.24);
`;
export { ContainerObiettivo, TestoObiettivo, ContainerTotaleObiettivo };
