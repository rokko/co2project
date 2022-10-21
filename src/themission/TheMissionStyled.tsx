import styled from "styled-components";
import SfondoObiettivo from "../media/sfondoobiettivo.png";
const ContainerObiettivo = styled.div`
  width: 70%;
  padding: 1rem;
  font-size: 28px;
  display: flex;
  line-height: 3rem;
  flex-direction: column;
  -webkit-box-shadow: 1px 1px 17px 6px rgba(0, 0, 0, 0.39);
  box-shadow: 1px 1px 17px 6px rgba(0, 0, 0, 0.39);
  background-color: rgb(191, 191, 191, 0.7);
`;

const TestoObiettivo = styled.p`
  text-align: center;
`;

const ContainerTotaleObiettivo = styled.div`
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
