import { useCallback, useEffect, useState } from "react";
import HEADER_LOGO from "./../../assets/img/logo.png";
import MENU from "./../../assets/svg/menu.svg";
import CLOSE from "./../../assets/svg/close.svg";
import {
  Content,
  DesktopNavButtonsWrapper,
  HeaderIcon,
  HeaderLogoWrapper,
  MenuButton,
  MobileNavButtonsWrapper,
  NavbarItems,
  SideBarItem,
  SideBarWrapper,
  Title,
  Wrapper,
} from "./nav.styled";

export default function Navbar() {
  const [isActiveSideBar, setIsActiveSideBar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleStickyScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleStickyScroll);

    return () => {
      window.removeEventListener("scroll", handleStickyScroll);
    };
  }, []);

  const handleMenuClick = useCallback(() => {
    setIsActiveSideBar(!isActiveSideBar);
  }, [isActiveSideBar]);

  const handleSideBarItemClick = useCallback(() => {
    setIsActiveSideBar(false);
  }, []);

  return (
    <Wrapper $isScrolled={isScrolled}>
      <Content>
        <HeaderLogoWrapper>
          <HeaderIcon src={HEADER_LOGO.src} />
          <Title>Nuzul Qadriy, S.H.</Title>
        </HeaderLogoWrapper>
        <DesktopNavButtonsWrapper>
          <NavbarItems>Tentang Kami</NavbarItems>
          <NavbarItems>Layanan</NavbarItems>
          <NavbarItems>Kontak</NavbarItems>
        </DesktopNavButtonsWrapper>
        <MobileNavButtonsWrapper>
          <MenuButton
            src={isActiveSideBar ? CLOSE.src : MENU.src}
            onClick={handleMenuClick}
          />
        </MobileNavButtonsWrapper>
      </Content>
      <SideBarWrapper $isActiveSideBar={isActiveSideBar}>
        <SideBarItem onClick={handleSideBarItemClick}>Tentang Kami</SideBarItem>
        <SideBarItem onClick={handleSideBarItemClick}>Layanan</SideBarItem>
        <SideBarItem onClick={handleSideBarItemClick}>Kontak</SideBarItem>
      </SideBarWrapper>
    </Wrapper>
  );
}
