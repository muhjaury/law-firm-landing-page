import { useCallback, useEffect, useState } from "react";
import MENU from "./../../assets/svg/menu.svg";
import {
  Content,
  DesktopNavButtonsWrapper,
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
        <Title>Nuzul Qadriy, S.H.</Title>
        <DesktopNavButtonsWrapper>
          <NavbarItems>Tentang Kami</NavbarItems>
          <NavbarItems>Layanan</NavbarItems>
          <NavbarItems>Kontak</NavbarItems>
        </DesktopNavButtonsWrapper>
        <MobileNavButtonsWrapper>
          <MenuButton src={MENU.src} onClick={handleMenuClick} />
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
