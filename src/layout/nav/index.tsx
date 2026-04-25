import {
  Content,
  DesktopNavButtonsWrapper,
  MenuButton,
  MobileNavButtonsWrapper,
  NavbarItems,
  Title,
  Wrapper,
} from "./nav.styled";
import MENU from "./../../assets/svg/menu.svg";

export default function Navbar() {
  return (
    <Wrapper>
      <Content>
        <Title>Nuzul Qadriy, S.H.</Title>
        <DesktopNavButtonsWrapper>
          <NavbarItems>Tentang Kami</NavbarItems>
          <NavbarItems>Layanan</NavbarItems>
          <NavbarItems>Kontak</NavbarItems>
        </DesktopNavButtonsWrapper>
        <MobileNavButtonsWrapper>
          <MenuButton src={MENU.src} />
        </MobileNavButtonsWrapper>
      </Content>
    </Wrapper>
  );
}
