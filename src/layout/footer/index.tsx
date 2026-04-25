import dayjs from "dayjs";
import { Wrapper } from "./footer.styled";

function Footer() {
  return <Wrapper>Copyright © {dayjs().format("YYYY")}, Vlaws Corp</Wrapper>;
}

export default Footer;
