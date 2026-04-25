import React from "react";
import LOADING from "./../../assets/img/loading.png";
import "./loadingFullScreen.css";
import { Indicator, Wrapper } from "./loadingFullScreen.styled";

function LoadingFullScreen() {
  return (
    <Wrapper>
      <img src={LOADING.src} className="loading-picture" />
      <Indicator />
    </Wrapper>
  );
}

export default React.memo(LoadingFullScreen);
