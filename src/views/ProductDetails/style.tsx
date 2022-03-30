import styled from "styled-components";

export const StyleMainProductDetails = styled.div`
  text-align: center;
  .wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .pt3 {
    padding: 15px 0px 25px;
  }
  .marginBottm {
    margin-bottom: 30px;
  }
`;

export const StyleImagDiv = styled.div`
  width: 309px;
  height: 300px;
  background: #ffffff;
  box-shadow: 2px 2px 15px rgba(139, 135, 135, 0.25);
  border-radius: 8px;
  ${({ theme }) => theme.mediaQueries.MaxSm} {
    width: 263px;
    height: 255px;
  }
`;
export const StyletSecondColumn = styled.div`
  /* width: 309px;
  height: 300px; */
  padding: 20px 40px;
  .proHeading {
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 24px;
    letter-spacing: 0.1em;
    text-align : left;
    margin-bottom : 5px;
    color: ${({ theme }) => theme.colors.blackWhite};
  }
  ${({ theme }) => theme.mediaQueries.MaxSm} {
    width: 263px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const PriceSection = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.colors.blackWhite};
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  ${({ theme }) => theme.mediaQueries.MaxSm} {
    font-size: 12px;
    line-height: 12px;
    &.color {
        margin-right : 10px;
    margin-top: auto!important;
    margin-bottom: auto!important;
    }
    
    
  }
`;

export const ColorWrapper = styled.div`
  ${({ theme }) => theme.mediaQueries.MaxSm} {
    display: flex;
    align-items: center;
  }
`;
export const SelectColorSection = styled.div`
  display: flex;
  .blackColor {
    width: 59px;
    height: 59px;
    background: #000000;
    margin-right: 10px;
    border: 1px solid ${({ theme }) => theme.colors.blackWhite};
  }
  .grayColor {
    width: 59px;
    height: 59px;
    background: #f1f1f1;
    border: 1px solid ${({ theme }) => theme.colors.blackWhite};
  }

  ${({ theme }) => theme.mediaQueries.MaxSm} {
    .blackColor,
    .grayColor {
      width: 31px;
      height: 31px;
    }
  }
`;

export const SizeSection = styled.div`
  margin: 20px 0px 10px;
  .sizeHead {
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.1em;
    color: ${({ theme }) => theme.colors.blackWhite};
    display: flex;
    align-items: center;
    .textOne {
      font-size: 16px;
      line-height: 16px;
      margin-right: 5px;
    }
    .textTwo {
      font-size: 12px;
      line-height: 12px;
    }
  }
  .sizeNumberSection {
    display: flex;
    margin: 10px 0px 0px;
    .sizeNumber {
      width: 43px;
      height: 43px;
      border: 1px solid ${({ theme }) => theme.colors.blackWhite};
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 18px;
      letter-spacing: 0.1em;
      color: ${({ theme }) => theme.colors.blackWhite};
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 10px;
      cursor: pointer;
    }
  }
  ${({ theme }) => theme.mediaQueries.MaxSm} {
    .textOne {
      font-size: 12px;
      line-height: 12px;
      margin-right: 5px;
    }
    .textTwo {
      font-size: 10px;
      line-height: 10px;
    }
    .sizeNumberSection {
      .sizeNumber {
        width: 34px;
        height: 34px;
        margin-right: 5px;
      }
    }
  }
`;

export const AddToCartBtn = styled.div`
  width: 202px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 0.1em;
  color: #000000;
  background: #c4c4c4;
  padding: 10px;
  cursor:pointer;
`;

export const SaleInfoSection = styled.div`
  width: 211px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: 0.1em;
  text-align: left;
  margin: 40px 0px 30px;
  color: ${({ theme }) => theme.colors.blackWhite};
  ${({ theme }) => theme.mediaQueries.MaxSm} {
    font-size: 12px;
    line-height: 12px;
    width : 133px;
    text-align: center;
  }
`;
