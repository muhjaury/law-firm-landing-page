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

export const CoverPicture = styled.img`
  height: 240px;
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
  margin-top: 160px;
  width: 300px;
  border-radius: 8px;
  padding: 16px;
  z-index: 2;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media all and (min-width: 768px) {
    margin-top: unset;
    width: 400px;
    font-size: 32px;
  }
`;

export const CoverTitle = styled.div`
  line-height: 30px;
  font-size: 24px;
  font-weight: 600;
  color: ${color.a1};
  cursor: default;

  @media all and (min-width: 768px) {
    font-size: 32px;
  }
`;

export const CoverDescription = styled.div`
  line-height: 24px;
  font-size: 20px;
  font-weight: 600;
  color: ${color.a2};
  cursor: default;

  @media all and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const ButtonDescription = styled.div`
  color: ${color.z1};
`;

export const ButtonArrow = styled.img`
  height: 16px;
`;

export const StatisticWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;
  justify-content: center;

  @media all and (min-width: 768px) {
    flex-direction: row;
    gap: 32px;
  }
`;

export const StatisticCard = styled.div`
  padding: 16px;
  border-left: 4px solid ${color.a1};
  border-right: 4px solid ${color.a1};
  border-radius: 20px;
  width: 320px;

  @media all and (min-width: 768px) {
    width: fit-content;
  }
`;

export const StatisticTitle = styled.span`
  font-size: 32px;
  font-weight: 600;
  color: ${color.a1} !important;

  @media all and (min-width: 768px) {
    font-size: 48px;
  }
`;

export const StatisticDescription = styled.span`
  font-size: 24px;
  font-weight: 600;
  color: ${color.a1};

  @media all and (min-width: 768px) {
    font-size: 32px;
  }
`;

export const SectionTitleWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 24px;

  @media all and (min-width: 768px) {
    margin-bottom: 8px;
  }
`;

export const SectionTitle = styled.span<{
  $variant?: "primary" | "secondary";
}>`
  color: ${({ $variant }) =>
    $variant === "secondary" ? color.a2 : color.z1} !important;
  font-size: 24px;
  font-weight: 600;
  font-style: italic;
  border-bottom: 2px solid ${color.a1};
  cursor: default;

  @media all and (min-width: 768px) {
    font-size: 32px;
  }
`;

export const ProfileWrapper = styled.div`
  display: flex;
  gap: unset;
  justify-content: center;
  align-items: center;

  @media all and (min-width: 768px) {
    margin-top: 8px;
    gap: 24px;
  }
`;

export const ProfilePicture = styled.img`
  flex: 1;
  width: 100px;
  height: fit-content;
  ${DISABLE_IMAGE_STYLED}

  @media all and (min-width: 768px) {
    width: 460px;
  }
`;

export const ProfileDescriptionWrapper = styled.div`
  flex: 1;
`;

export const ProfileCard = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 8px;

  @media all and (min-width: 768px) {
    gap: 16px;
  }
`;

export const ProfileDescriptionTitle = styled.span`
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  font-style: italic;

  @media all and (min-width: 768px) {
    font-size: 32px;
  }
`;

export const ProfileDescriptionDescription = styled.span`
  color: ${color.z1} !important;
  font-size: 14px;
  font-style: italic;

  @media all and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const ServicesWrapper = styled.div`
  margin: 24px 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  justify-content: center;

  @media all and (min-width: 768px) {
    margin: 40px 0;
    flex-direction: row;
    gap: 32px;
  }
`;

export const ServicesCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border-left: 4px solid ${color.a1};
  border-radius: 20px;
  width: 100%;
  box-shadow:
    0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media all and (min-width: 768px) {
    width: 300px;
    height: 160px;
  }
`;

export const ServicesTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${color.a1};
  cursor: default;

  @media all and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const ServicesDescription = styled.div`
  font-size: 14px;
  color: ${color.a2};
  cursor: default;

  @media all and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const ContactWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  align-items: center;

  @media all and (min-width: 768px) {
    flex-direction: row;
    margin-top: 8px;
  }
`;

export const ContactFormWrapper = styled.div`
  flex: 1;
  height: 100%;
  width: 100%;
  padding: unset;

  @media all and (min-width: 768px) {
    padding: 16px;
  }
`;

export const ContactFormCard = styled.div`
  height: 100%;
  width: 100%;
  background: ${color.z1};
  border-top-right-radius: 24px;
  border-bottom-left-radius: 24px;
  border-left: 4px solid ${color.a1};
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ContactAddressWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ContactAddressIconLabelWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const ContactAddressIcon = styled.img`
  height: 20px;

  @media all and (min-width: 768px) {
    height: 24px;
  }
`;

export const ContactAddressValue = styled.div`
  font-size: 14px;
  color: ${color.z1};

  @media all and (min-width: 768px) {
    font-size: 16px;
  }
`;
