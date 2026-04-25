import { color } from "@/constant/color";
import { DISABLE_IMAGE_STYLED } from "@/constant/variables";
import styled from "styled-components";

export const Wrapper = styled.div<{ $isScrolled: boolean }>`
  width: 100%;
  background: ${({ $isScrolled }) =>
    $isScrolled ? "rgba(26, 32, 38, 0.8)" : color.a2};
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  z-index: 5;
  top: 0;

  @media all and (min-width: 768px) {
    height: 72px;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  padding: 16px 16px;

  @media all and (min-width: 768px) {
    padding: 16px 32px;
  }
`;

export const HeaderLogoWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;

export const HeaderIcon = styled.img`
  height: 24px;

  @media all and (min-width: 768px) {
    height: 40px;
  }
`;

export const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${color.z1};

  @media all and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const DesktopNavButtonsWrapper = styled.div`
  display: none;

  @media all and (min-width: 768px) {
    display: flex;
    gap: 40px;
  }
`;

export const MobileNavButtonsWrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;

  @media all and (min-width: 768px) {
    display: none;
  }
`;

export const NavbarItems = styled.div`
  margin: auto;
  font-size: 16px;
  font-weight: 600;
  color: ${color.z1};
  cursor: pointer;
`;

export const MenuButton = styled.img`
  height: 32px;
  width: 32px;
  cursor: pointer;
  ${DISABLE_IMAGE_STYLED}
`;

export const SideBarWrapper = styled.div<{ $isActiveSideBar: boolean }>`
  display: ${({ $isActiveSideBar }) => ($isActiveSideBar ? "flex" : "none")};
  z-index: 2;
  position: fixed;
  top: 48px;
  width: 100%;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  height: fit-content;
  background: ${color.a4};
  flex-direction: column;
  gap: 24px;
  padding: 16px;
  font-size: 16px;
  font-weight: 600;
  color: ${color.a1};

  @media all and (min-width: 768px) {
    display: none;
  }
`;

export const SideBarItem = styled.span`
  width: fit-content;
  cursor: pointer;
  color: ${color.z1};
`;
