import { Component } from "./input.styled";
import React, { InputHTMLAttributes } from "react";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function Input(props: CustomInputProps) {
  return <Component {...props} />;
}

export default React.memo(Input);
