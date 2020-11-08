import React from "react";
import { Container, FooterLink } from "./style";
import { useHistory } from "react-router-dom";



function Footer({color}) {
  const history = useHistory();

  return (
      <Container color={color}>
        <FooterLink color={color} onClick={() => history.push("/1")}>Simples</FooterLink>
        <FooterLink color={color} onClick={() => history.push("/2")}>Complexa</FooterLink>
      </Container>
  );
}

export default Footer;
