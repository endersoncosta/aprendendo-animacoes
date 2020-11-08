import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  position: absolute;
  bottom: 0;

  display: flex;
  background-color: ${(props) => `var(--${props.color})`};
`;

export const FooterLink = styled.p`
  flex: 1;
  text-align: center;
  font-size: 24px;
  padding: 10px;
  color: ${(props) => `var(--${invertColor(props.color)})`};
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => `var(--${invertColor(props.color)})`};
    color: ${(props) => `var(--${props.color})`};
  }
`;

const invertColor = (color) => {
  if (color === "color1" || color === "color2" || color === "color3") return "color4";
  else return "color1";
};
