import styled, { keyframes } from "styled-components";
import Bamboo from "../media/bamboo.jpg";
import { bounceIn } from "react-animations";

const BounceAnimation = keyframes`${bounceIn}`;
const TestoSoluzione = styled.div`
  text-align: center;
  font-size: 28px;
  color: black;
`;

const ContainerSoluzione = styled.div`
  max-width: 700px;
  padding: 1rem;
  display: flex;
  height: auto;
  line-height: 3rem;
  flex-direction: column;
  -webkit-box-shadow: 1px 1px 17px 6px rgba(0, 0, 0, 0.39);
  box-shadow: 1px 1px 17px 6px rgba(0, 0, 0, 0.39);
  background-color: rgb(255, 255, 255, 0.7);
`;

const ContainerTotaleSoluzione = styled.div`
  background-image: url("${Bamboo}");
  background-size: cover;
  height: 1000px;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  background-attachment: fixed;
`;
export {
  TestoSoluzione,
  ContainerSoluzione,
  ContainerTotaleSoluzione,
  BounceAnimation,
};
