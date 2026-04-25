import { Btn, Wrapper } from "./button.styled";

function Button(props: any) {
  return (
    <Wrapper>
      <Btn {...props}>{props.children}</Btn>
    </Wrapper>
  );
}

export default Button;
