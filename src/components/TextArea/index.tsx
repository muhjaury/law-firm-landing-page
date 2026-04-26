import { TextareaHTMLAttributes } from "react";
import { Input } from "./textArea.styled";

interface CustomInputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

function TextArea(props: CustomInputProps) {
  return <Input {...props} rows={5} />;
}

export default TextArea;
