import styled from "styled-components";

const CartActionButton = styled.button`
  width: 169px;
  height: 42px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  border: unset;
  background: ${({ theme }) => theme.colors.cartActionBg};
  border-radius: 3px;
  color: ${({ theme }) => theme.colors.whiteBlack};
  ${({ theme }) => theme.mediaQueries.MaxSm} {
    width: 100%;
  }
`;

export default CartActionButton;
