import styled from "styled-components";

export const Page = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: var(--color3);
  color: var(--color1);
  padding: 1% 0;
  position: relative;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: var(--color4);

  text-align: center;
`;

export const ContainerAnimacao = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  justify-items: center;
  align-content: center;
  align-self: center;
  justify-self: center;
  position: relative;
  width: 100%;
  margin-top: 50px;
  margin-bottom: 30px;
`;

export const ContainerBotoes = styled.div`
  margin-top: ${props=> props.marginTop || 0}px;
  width: 100;
  text-align: center;
`;

export const Botao = styled.button`
  padding: 15px;
  font-size: 18px;
  border-radius: 5px;
  margin: 0 15px;
  color: var(--color4);
  background-color: var(--color2);
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: var(--color4);
    color: var(--color2);
  }
`;