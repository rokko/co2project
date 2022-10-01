import styled from "styled-components";

const BoxNFT = styled.div`
background-color: whitesmoke;
height: 450px;
width: 350px;
border-radius:20px;
flex-direction: column;
display: flex;
align-content: center;
align-items: center;
justify-content: center`;
const TitleSection = styled.p`
font-size: 28px;
color: darkgreen`

const ContainerBox = styled.div`
display: flex;
flex-direction: row;
  gap:2rem;
padding:2rem`

export {TitleSection, BoxNFT,ContainerBox};
