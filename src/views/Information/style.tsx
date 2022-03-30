import styled from "styled-components";

export const CartInformationContainer = styled.div`
  .pt3 {
    padding: 15px 0px 25px;
  }
`;
export const FlexContainer = styled.div`
  display: flex;
  .first-col {
    width: 60%;
    border-right: 0.5px solid #979797;
  }
  .second-col {
    width: 40%;
  }
  ${({ theme }) => theme.mediaQueries.MaxSm} {
    flex-direction: column-reverse;
    .first-col,
    .second-col {
      width: 100%;
      border-right: 0px solid #979797;

    }
  }
`;

export const FormHeading = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  padding-bottom : 15px;
  color: ${({ theme }) => theme.colors.blackWhite};
  ${({ theme }) => theme.mediaQueries.MaxSm} {
    font-size: 12px;
    line-height: 12px;
  }
`;
