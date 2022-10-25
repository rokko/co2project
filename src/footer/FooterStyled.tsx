import styled from "styled-components";

const ContainerFooter = styled.div`
  border-top: 1px solid;
  gap: 2rem;
  display: flex;
  flex-direction: row;
  padding: 2rem;
  width: 100%;
  height: 200px;
`;


const LeftFooter = styled.div`
  border-right: 1px solid;
width: 50%;
display:flex;
flex-direction: column`


const RightFooter = styled.div`
display: flex;
flex-direction: row;
align-content: center;
justify-content: center
`
export { ContainerFooter, LeftFooter, RightFooter };
