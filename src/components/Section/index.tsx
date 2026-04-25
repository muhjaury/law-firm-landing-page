import React from "react";
import { Content, Wrapper } from "./section.styled";

type TSection = {
  variant?: "primary" | "secondary" | "tertiary";
  children: any;
};

function Section({ children, variant = "primary" }: TSection) {
  return (
    <Wrapper $variant={variant}>
      <Content>{children}</Content>
    </Wrapper>
  );
}

export default React.memo(Section);
