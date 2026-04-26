import { color } from "@/constant/color";
import styled from "styled-components";

export const Component = styled.input`
  height: 40px;
  width: 100%;
  padding: 0 16px;
  background: white;
  border: 2px solid ${color.a1};
  border-radius: 8px;
  font-size: 14px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: ${color.a2};

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  @media all and (min-width: 768px) {
    height: 48px;
    font-size: 16px;
  }
`;
