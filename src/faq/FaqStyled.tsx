import styled from "styled-components";

const TestoDomandaFaq = styled.p`
  font-size: 21px;
  font-weight: bold;
`;

const TestoRispostaFaq = styled.p`
  font-size: 28px;
`;

const ContainerFaq = styled.div`
  width: 100%;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export { ContainerFaq, TestoDomandaFaq, TestoRispostaFaq };
