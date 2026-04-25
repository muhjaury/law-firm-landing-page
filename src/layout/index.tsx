import { LoadingFullScreen } from "@/components";
import { useEffect, useState } from "react";
import { Content, Wrapper } from "./layout.styled";
import Navbar from "./nav";

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
        </Wrapper>
      )}
    </>
  );
}

export default CoreLayout;
