import styled from "styled-components";

export const Page = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: var(--color4);
  color: var(--color1);
  padding: 1% 0;
  position: relative;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: var(--color1);

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
  margin-top: 10%;
  margin-bottom: 10%;
`;

export const Animacao = styled.div`
  height: 100%;
  position: relative;
  width: 100px;
  height: 100px;

  & circle {
    ${(props) => (props.etapa > 0 ? "stroke: #f94444" : "")}
  }
  
  & .crescendo {
    ${(props) =>
      props.etapa > 1
        ? `
            animation: crescendo 1.4s ease-in-out infinite;
            stroke-dasharray: 80px, 200px;
            stroke-dashoffset: 0px;
          `
        : ""}
  }

  & .rodando {
    ${(props) =>
      props.etapa > 2 ? "animation: rodando 1.4s linear infinite;" : ""}
  }


  @keyframes rodando {
    to {
      transform: rotate(1turn);
    }
  }

  @keyframes crescendo {
    0% {
      stroke-dasharray: 1px, 200px;
      stroke-dashoffset: 0px;
    }
    50% {
      stroke-dasharray: 100px, 200px;
      stroke-dashoffset: -15px;
    }
    100% {
      stroke-dasharray: 100px, 200px;
      stroke-dashoffset: -125px;
    }
  }
`;

export const ContainerBotoes = styled.div`
  width: 100;
  text-align: center;
`;

export const Botao = styled.button`
  padding: 15px;
  font-size: 18px;
  border-radius: 5px;
  margin: 0 15px;
  color: var(--color4);
  background-color: var(--color3);
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: var(--color1);
    color: var(--color4);
  }
`;

/*
  ► ease-in will start the animation slowly, and finish at full speed.
  ► ease-out will start the animation at full speed, then finish slowly.
  ► ease-in-out will start slowly, be fastest at the middle of the animation, then finish slowly.
  ► ease is like ease-in-out, except it starts slightly faster than it ends.
  ► linear uses no easing.
*/
