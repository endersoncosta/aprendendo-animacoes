import React, { useCallback, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import {
  Page,
  Title,
  ContainerAnimacao,
  Animacao,
  ContainerBotoes,
  Botao,
} from "./style";

function Simples() {
  const [etapa, setEtapa] = useState(3);

  const previous = useCallback(() => {
    if (etapa <= 0) setEtapa(3);
    else setEtapa(etapa-1);
  }, [etapa]);

  const next = useCallback(() => {
    console.log(etapa)

    if (etapa >= 3) setEtapa(0);
    else setEtapa(etapa+1);
  }, [etapa]);

  return (
    <Page>
      <Title>Animação simples em css</Title>

      <ContainerAnimacao>
        {
          //? Circle CX e CY são posição
          //? R é raio
          //? fill é a cor de preenchimento
          //? stroke é a cor do traço, da "borda"
          //? stroke-width é a grossura do traço
        }
        <Animacao etapa={etapa}>
          <svg className="rodando" viewBox="22 22 44 44">
            <circle
              className="crescendo"
              cx="44"
              cy="44"
              r="20.2"
              fill="none"
              stroke-width="3.6"
            />
          </svg>
        </Animacao>
      </ContainerAnimacao>

      <ContainerBotoes>
        <Botao onClick={previous}>Voltar</Botao>
        <Botao onClick={next}>Avançar</Botao>
      </ContainerBotoes>

      <Footer color="color3"></Footer>
    </Page>
  );
}

export default Simples;
