import React, { useState, useCallback, useMemo } from "react";
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
 
  const animacoes = useMemo(()=> [animacao1, animacao2, animacao3, animacao4],[]);


  const [animacaoOptions, setAnimacaoOptions] = useState({
    loop: true,
    autoplay: true,
    animationData: animacao1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  });

  const trocarAnimacao = useCallback(
    (event) => {
      const animacaoSelecionada = Number(event.target.id) - 1;

      setAnimacaoOptions({
        ...animacaoOptions,
        animationData: animacoes[animacaoSelecionada],
      });
    },
    [animacaoOptions]
  );

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
          options={animacaoOptions}
          height={400}
          width={400}
          isStopped={animacao.isStopped}
          isPaused={animacao.isPaused}
        />
      </ContainerAnimacao>

      <ContainerBotoes>
        <Botao onClick={() => setAnimacao({ ...animacao, isStopped: false })}>
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
      <ContainerBotoes marginTop={10}>
        <Botao id="1" onClick={trocarAnimacao}>01</Botao>
        <Botao id="2" onClick={trocarAnimacao}>02</Botao>
        <Botao id="3" onClick={trocarAnimacao}>03</Botao>
        <Botao id="4" onClick={trocarAnimacao}>04</Botao>
      </ContainerBotoes>

      <Footer color="color4" />
    </Page>
  );
}
