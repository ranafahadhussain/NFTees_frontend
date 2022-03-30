import styled from "styled-components";
import { InputFieldProps } from "./types";

const InputField = ({ placeHolder }: InputFieldProps) => {
  return <StyleInput placeholder={placeHolder} />;
};

const StyleInput = styled.input<InputFieldProps>`
  background-color: inherit;
  border: 0.5px solid #979797;
  box-sizing: border-box;
  border-radius: 4px;
  font-weight: 400;
  font-size: 10px;
  line-height: 10px;
  padding: 14px 16px;
  width: 100%;
  color: ${({ theme }) => theme.colors.blackWhite};
  margin-bottom: 11px;
  ::-webkit-input-placeholder {
    /* Edge */
    color: ${({ theme }) => theme.colors.blackWhite};
    font-weight: 400;
    font-size: 10px;
    line-height: 10px;
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${({ theme }) => theme.colors.blackWhite};
    font-weight: 400;
    font-size: 10px;
    line-height: 10px;
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.blackWhite};
    font-weight: 400;
    font-size: 10px;
    line-height: 10px;
  }
`;

export default InputField;
