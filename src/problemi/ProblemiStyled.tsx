import styled from "styled-components";

const ContainerImages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  position: relative;
  border-radius: 20px;
`;

const SingleImage = styled.div`
  border-radius: 20px;
  background-color: white;
  width: 80vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  -webkit-box-shadow: 1px 2px 19px 8px rgba(0, 0, 0, 0.24);
  box-shadow: 1px 2px 19px 8px rgba(0, 0, 0, 0.24);
`;

const TitoloProblemi = styled.span`
  font-weight: bold;
`;

const TestoProblemi = styled.p`
  font-size: 28px;
  text-align: center;
`;

const BloccoTesto = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  border-radius: 20px;
`;

const ContainerTotaleProblemi = styled.div`
  border-radius: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-attachment: fixed;
`;
export {
  ContainerImages,
  SingleImage,
  TitoloProblemi,
  TestoProblemi,
  BloccoTesto,
  ContainerTotaleProblemi,
};
