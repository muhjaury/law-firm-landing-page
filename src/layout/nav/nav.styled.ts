import { color } from "@/constant/color";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100dvw;
  background: ${color.a2};
  height: 48px;

  @media all and (min-width: 768px) {
    height: 72px;
  }
`;
