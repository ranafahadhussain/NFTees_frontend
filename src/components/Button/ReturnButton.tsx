import styled from "styled-components";

const ReturnButton  = styled.button`
font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 10px;
border: unset;
background: inherit;
color: ${({ theme }) => theme.colors.blackWhite};
${({ theme }) => theme.mediaQueries.MaxSm} {
    margin-bottom: 31px;
    width:fit-content;
  }
`;

export default ReturnButton;
