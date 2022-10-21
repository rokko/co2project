import styled from "styled-components";

const ImpattoTitle = styled.p`
  font-size: 28px;
  font-weight: bold;
  text-align: center;
`;

const ImpattoTesto = styled.p`
  margin: 2px;
  font-size: 28px;
`;
const ImpattoSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImpattoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const ContainerTotale = styled.div`
  background-color: #bfbfbf;
  padding: 4rem;
`;

export {
  ImpattoTesto,
  ImpattoTitle,
  ImpattoSection,
  ImpattoContainer,
  ContainerTotale,
};