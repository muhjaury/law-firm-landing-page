import { color } from "@/constant/color";
import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }`;

export const Indicator = styled.div`
  height: 56px;
  width: 56px;
  border-radius: 50%;
  border: 2px solid transparent;
  border-top: 2px solid ${color.a2};
  border-right: 2px solid ${color.a2};
  border-bottom: 2px solid ${color.a2};
  animation: ${spin} 1s linear infinite;
`;
