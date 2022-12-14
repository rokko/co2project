import styled from "styled-components";

const HeaderProject = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const SecondPartHeader = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: center;
`;
const ButtonMetamaskProject = styled.button`
  background-color: darkgreen;
  border-radius: 10px;
  height: 40px;
  width: 200px;
  font-weight: bold;
  color: white;
  border: 1px solid darkgreen;
  -webkit-box-shadow: 1px 2px 19px 8px rgba(0, 0, 0, 0.24);
  box-shadow: 1px 2px 19px 8px rgba(0, 0, 0, 0.24);
`;

const TestoProgetto = styled.p`
  font-size: 24px;
`;
const ContainerProject = styled.div`
  background-color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10rem;
`;

const BoxText = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  padding: 3rem;
  text-align: justify;
`;

const BoxProject = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: row;
  width: 90%;
  height: 500px;
`;
export {
  HeaderProject,
  SecondPartHeader,
  ButtonMetamaskProject,
  ContainerProject,
  BoxProject,
  BoxText,
  TestoProgetto,
};
