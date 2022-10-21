import styled from "styled-components";

const ImpattoTitle = styled.p`
  font-size: 28px;
  font-weight: bold;
  text-align: center;
`;

const ImpattoTesto = styled.p`
  text-align: center;
  margin: 2px;
  font-size: 23px;
`;
const ImpattoSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  padding: 2rem;
  background-color: rgb(191, 191, 191, 0.7);
`;

const ImpattoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
  justify-content: flex-end;
  padding: 5rem;
`;

const ContainerTotale = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  gap: 1rem;
`;

export {
  ImpattoTesto,
  ImpattoTitle,
  ImpattoSection,
  ImpattoContainer,
  ContainerTotale,
};
