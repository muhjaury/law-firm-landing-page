import { color } from "@/constant/color";
import styled from "styled-components";

export const Wrapper = styled.div<{
  $variant: "primary" | "secondary" | "tertiary";
}>`
  min-height: 400px;
  width: 100%;
  background: ${({ $variant }) => {
    switch ($variant) {
      case "primary":
        return color.z1;
      case "secondary":
        return color.a2;
      case "tertiary":
        return color.a3;
    }
  }};
  display: flex;
  justify-content: center;

  p,
  span,
  h1,
  h2,
  h3,
  h4,
  h5 {
    color: ${({ $variant }) => {
      switch ($variant) {
        case "primary":
          return color.a3;
        case "secondary":
          return color.a1;
        case "tertiary":
          return color.a1;
      }
    }};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 1200px;
  padding: 64px 16px 32px;

  @media all and (min-width: 768px) {
    padding: 72px 32px 32px;
  }
`;
