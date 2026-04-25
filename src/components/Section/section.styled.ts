import { color } from "@/constant/color";
import styled from "styled-components";

export const Wrapper = styled.div<{
  variant: "primary" | "secondary" | "tertiary";
}>`
  width: 100%;
  background: ${({ variant }) => {
    console.log(variant);
    switch (variant) {
      case "primary":
        return color.a1;
      case "secondary":
        return color.a2;
      case "tertiary":
        return color.a3;
    }
  }};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 1200px;
  padding: 16px 16px;

  @media all and (min-width: 768px) {
    padding: 16px 32px;
  }
`;
