import React, { forwardRef, ReactNode } from "react";
import styled from "styled-components";

export interface ButtonProps {
  id?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  title?: string | ReactNode;
  classes?: string;
  rightIcon?: string;
  leftIcon?: string;
  buttonType?: "button" | "submit" | "reset";
  titleClasses ?: string;
}

const DynamicButton = forwardRef<HTMLButtonElement, ButtonProps>(
  (props: ButtonProps, ref) => {
    const { id, onClick, disabled, title, classes, rightIcon, leftIcon, titleClasses } =
      props;
    return (
      <StyledButton
        ref={ref}
        id={id}
        className={`btn  ${classes}`}
        onClick={onClick}
        disabled={disabled}
      >
        <div className="flexContainer">
          <div className="leftIcon">
            {leftIcon && <img src={leftIcon} alt="" />}
          </div>
          <div className={`title  ${titleClasses}`}>{title}</div>
          <div className="rightIcon">
            {rightIcon && <img src={rightIcon} alt="" />}
          </div>
        </div>
      </StyledButton>
    );
  }
);
export default DynamicButton;

const StyledButton = styled.button`
  background: #ffffff;
  border: 1px solid #bfbfbf;
  box-sizing: border-box;
  box-shadow: 0px 2px 6px rgba(104, 104, 104, 0.25);
  border-radius: 14px;
  width: 384px;
  height: 46px;
  cursor : pointer;
  .flexContainer {
      display : flex ;
      align-items: center;
  }
  .rightIcon,
  .leftIcon {
    width: 4vw;
  }
  .title {
    font-size: 16px;
    line-height: 16px;
    letter-spacing: 0.1em;
    width : 245px;
    text-align: initial;
  }

  color: #000000;
  ${({ theme }) => theme.mediaQueries.MaxSm} {
    width: 345px;
    height: 41px;
    .rightIcon,
  .leftIcon {
    width: 10vw;
  }
  }
`;
