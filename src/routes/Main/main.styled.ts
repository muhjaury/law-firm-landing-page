import { color } from "@/constant/color";
import { DISABLE_IMAGE_STYLED } from "@/constant/variables";
import styled from "styled-components";

export const CoverWrapper = styled.div`
  display: flex;
  gap: 32px;
  flex-direction: column;
  justify-content: end;
  align-items: center;

  @media all and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ProfilePicture = styled.img`
  width: 320px;
  height: fit-content;
  ${DISABLE_IMAGE_STYLED}

  @media all and (min-width: 768px) {
    width: 460px;
  }
`;

export const CoverPicture = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.5;
  ${DISABLE_IMAGE_STYLED}

  @media all and (min-width: 768px) {
    height: 400px;
  }
`;

export const CoverCard = styled.div`
  width: 400px;
  border-radius: 8px;
  padding: 16px;
  z-index: 2;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const CoverTitle = styled.div`
  line-height: 30px;
  font-size: 32px;
  font-weight: 600;
  color: ${color.a1};
  cursor: default;
`;

export const CoverDescription = styled.div`
  line-height: 24px;
  font-size: 20px;
  font-weight: 600;
  color: ${color.a2};
  cursor: default;
`;

export const ButtonDescription = styled.div`
  color: ${color.z1};
`;

export const ButtonArrow = styled.img`
  height: 16px;
`;
