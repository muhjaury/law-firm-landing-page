import { DISABLE_IMAGE_STYLED } from "@/constant/variables";
import styled from "styled-components";

export const AboutMeWrapper = styled.div`
  display: flex;
  gap: 32px;
  flex-direction: column;

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

export const ProfileDescription = styled.div``;
