import React, { useState } from "react";
import Lottie from "react-lottie";
import {
  Page,
  Title,
  ContainerAnimacao,
  ContainerBotoes,
  Botao,
} from "./style";
import Footer from "../../Components/Footer/Footer";

import animacao1 from "./animacoes/01.json";
import animacao2 from "./animacoes/02.json";
import animacao3 from "./animacoes/03.json";
import animacao4 from "./animacoes/04.json";

export default function Complexa() {
  const [animacao, setAnimacao] = useState({
    isStopped: true,
    isPaused: false,
  });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animacao1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Page>
      <Title>Animação complexa com Lottie</Title>

      <ContainerAnimacao>
        <Lottie
          options={defaultOptions}
          height={400}
          width={400}
          isStopped={animacao.isStopped}
          isPaused={animacao.isPaused}
        />
      </ContainerAnimacao>

      <ContainerBotoes>
        <Botao onClick={() => setAnimacao({ ...animacao, isStopped: true })}>
          STOP
        </Botao>
        <Botao onClick={() => setAnimacao({ ...animacao, isStopped: false })}>
          START
        </Botao>
        <Botao
          onClick={() =>
            setAnimacao({ ...animacao, isPaused: !animacao.isPaused })
          }
        >
          PAUSE
        </Botao>
      </ContainerBotoes>

      <Footer color="color4" />
    </Page>
  );
}
