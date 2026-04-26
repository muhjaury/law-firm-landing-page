import { useCallback, useEffect, useState } from "react";
import HEADER_LOGO from "./../../assets/img/logo.png";
import SCROLL_TO_TOP from "./../../assets/img/scroll-to-top.png";
import CLOSE from "./../../assets/svg/close.svg";
import MENU from "./../../assets/svg/menu.svg";
import {
  Content,
  DesktopNavButtonsWrapper,
  HeaderIcon,
  HeaderLogoWrapper,
  MenuButton,
  MobileNavButtonsWrapper,
  NavbarItems,
  ScrollToTopIcon,
  ScrollToTopWrapper,
  SideBarItem,
  SideBarWrapper,
  Title,
  Wrapper,
} from "./nav.styled";

export default function Navbar() {
  const [isActiveSideBar, setIsActiveSideBar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLongScrolled, setIsLongScrolled] = useState(false);

  useEffect(() => {
    const handleStickyScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      if (window.scrollY > 200) {
        setIsLongScrolled(true);
      } else {
        setIsLongScrolled(false);
      }
    };
    window.addEventListener("scroll", handleStickyScroll);

    return () => {
      window.removeEventListener("scroll", handleStickyScroll);
    };
  }, []);

  const handleMenuButtonClick = useCallback(() => {
    setIsActiveSideBar(!isActiveSideBar);
  }, [isActiveSideBar]);

  const handleMenuItemClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();

      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleSideBarItemClick = (id: string) => {
    setIsActiveSideBar(false);
    handleMenuItemClick(id);
  };

  const handleScrollToTopClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Wrapper $isScrolled={isScrolled}>
        <Content>
          <HeaderLogoWrapper>
            <HeaderIcon src={HEADER_LOGO.src} />
            <Title>Nuzul Qadriy, S.H. & Rekan</Title>
          </HeaderLogoWrapper>
          <DesktopNavButtonsWrapper>
            <NavbarItems onClick={() => handleMenuItemClick("tentang-kami")}>
              Tentang Kami
            </NavbarItems>
            <NavbarItems onClick={() => handleMenuItemClick("layanan-kami")}>
              Layanan
            </NavbarItems>
            <NavbarItems onClick={() => handleMenuItemClick("kontak")}>
              Kontak
            </NavbarItems>
          </DesktopNavButtonsWrapper>
          <MobileNavButtonsWrapper>
            <MenuButton
              src={isActiveSideBar ? CLOSE.src : MENU.src}
              onClick={handleMenuButtonClick}
            />
          </MobileNavButtonsWrapper>
        </Content>
        <SideBarWrapper $isActiveSideBar={isActiveSideBar}>
          <SideBarItem onClick={() => handleSideBarItemClick("tentang-kami")}>
            Tentang Kami
          </SideBarItem>
          <SideBarItem onClick={() => handleSideBarItemClick("layanan-kami")}>
            Layanan
          </SideBarItem>
          <SideBarItem onClick={() => handleSideBarItemClick("kontak")}>
            Kontak
          </SideBarItem>
        </SideBarWrapper>
      </Wrapper>
      {isLongScrolled && (
        <ScrollToTopWrapper>
          <ScrollToTopIcon
            src={SCROLL_TO_TOP.src}
            onClick={handleScrollToTopClick}
          />
        </ScrollToTopWrapper>
      )}
    </>
  );
}
