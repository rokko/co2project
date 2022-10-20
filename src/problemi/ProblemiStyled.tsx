import styled from "styled-components";

const ContainerImages = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4rem;
`;

const SingleImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
`;

const TitoloProblemi = styled.span`
  font-weight: bold;
`;

const TestoProblemi = styled.p`
  font-size: 28px;
  text-align: center;
`;

const BloccoTesto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
`;
export {
  ContainerImages,
  SingleImage,
  TitoloProblemi,
  TestoProblemi,
  BloccoTesto,
};
