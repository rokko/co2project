import styled from "styled-components";

const ImpattoTitle = styled.p`
  font-size: 28px;
  font-weight: bold;
  text-align: center;
`;

const ImpattoTesto = styled.p`
  text-align: center;
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
  background-color: rgb(191, 191, 191, 0.5);
  padding: 4rem;
  -webkit-box-shadow: 1px 2px 19px 8px rgba(0, 0, 0, 0.24);
  box-shadow: 1px 2px 19px 8px rgba(0, 0, 0, 0.24);
`;

export {
  ImpattoTesto,
  ImpattoTitle,
  ImpattoSection,
  ImpattoContainer,
  ContainerTotale,
};
