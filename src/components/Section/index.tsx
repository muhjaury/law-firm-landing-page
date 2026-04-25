import React from "react";
import { Content, Wrapper } from "./section.styled";

type TSection = {
  children: any;
  id?: string;
  variant?: "primary" | "secondary" | "tertiary";
};

function Section({ children, id, variant = "primary" }: TSection) {
  return (
    <Wrapper $variant={variant} id={id}>
      <Content>{children}</Content>
    </Wrapper>
  );
}

export default React.memo(Section);
