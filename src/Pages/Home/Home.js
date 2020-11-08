import React from "react";
import Footer from "../../Components/Footer/Footer";
import { Page, Title, ContainerAnimacao, Animacao, ContainerBotoes, Botao } from "./style";

function Home() {
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
        <Animacao>
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
        <Botao>Voltar</Botao>
        <Botao>Avançar</Botao>
      </ContainerBotoes>

      <Footer color="color4"></Footer>
    </Page>
  );
}

export default Home;
