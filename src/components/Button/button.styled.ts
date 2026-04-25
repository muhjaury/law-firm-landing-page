import { color } from "@/constant/color";
import styled from "styled-components";

export const Wrapper = styled.div``;

export const Btn = styled.button`
  display: flex;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 16px;
  border: 1px solid ${color.a1};
  background: ${color.a1};
  min-width: 80px;
  min-height: 32px;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    border: 1px solid #997518;
    background: #997518;
  }
`;
