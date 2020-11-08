import React from "react";
import { Container, FooterLink } from "./style";

function Footer({color}) {
  return (
      <Container color={color}>
        <FooterLink color={color}>Simples 1</FooterLink>
        <FooterLink color={color}>Simples 2</FooterLink>
        <FooterLink color={color}>Complexa 1</FooterLink>
        <FooterLink color={color}>Complexa 2</FooterLink>
      </Container>
  );
}

export default Footer;
