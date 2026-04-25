import { LoadingFullScreen } from "@/components";
import { useEffect, useState } from "react";
import { Content, Wrapper } from "./layout.styled";
import Navbar from "./nav";
import Footer from "./footer";

function CoreLayout({ ...props }: any) {
  const [initLoading, setInitLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setInitLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {initLoading ? (
        <LoadingFullScreen />
      ) : (
        <Wrapper>
          <Navbar />
          <Content>{props.children}</Content>
          <Footer />
        </Wrapper>
      )}
    </>
  );
}

export default CoreLayout;
