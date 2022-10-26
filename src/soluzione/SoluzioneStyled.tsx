import styled from "styled-components";
import Bamboo from "../media/bamboo.jpg";

const TestoSoluzione = styled.div`
  text-align: center;
  font-size: 28px;
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
  background-color: rgb(191, 191, 191, 0.7);
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
  border-radius: 20px;
`;
export { TestoSoluzione, ContainerSoluzione, ContainerTotaleSoluzione };
