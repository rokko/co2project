import styled from "styled-components";

const BoxNFT = styled.div`
  background-color: rgb(191, 191, 191, 0.8);
  &:hover {
    background-color: white;
  }
  height: 550px;
  width: 460px;
  border-radius: 20px;
  flex-direction: column;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  -webkit-box-shadow: 1px 2px 19px 8px rgba(0, 0, 0, 0.24);
  box-shadow: 1px 2px 19px 8px rgba(0, 0, 0, 0.24);
`;
const TitleSection = styled.p`
  font-size: 40px;
  text-align: center;
  color: black;
  font-weight: bold;
`;

const TextNft = styled.p`
  font-weight: bold;
  font-size: 20px;
  text-align: left;
`;

const TextPrice = styled.p`
  font-size: 22px;
`;

const ContainerBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  padding: 2rem;
`;

const ButtonBuy = styled.button`
  background-color: #3075ff;

  border-radius: 10px;
  height: 40px;
  width: 180px;
  font-weight: bold;
  color: white;
  border: none;
`;

const ContainerCrediti = styled.div`
  margin-top: 10rem;
`;

export {
  TitleSection,
  BoxNFT,
  ContainerBox,
  TextNft,
  TextPrice,
  ButtonBuy,
  ContainerCrediti,
};
