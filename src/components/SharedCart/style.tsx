import styled from "styled-components";

export const StyleMainTable = styled.div`

  .hideOrderMain {
    display : none;
    align-items : center;
    justify-content : space-between;
    padding-bottom :10px;
    padding-top :5px;

    border-bottom: 0.5px solid #979797;

    .cartIcon {
      width: 163px;
      height: 18px;
    }
   .totalEth {
    font-weight: 600;
    font-size: 14px;
    line-height: 30px;
    color: ${({ theme }) => theme.colors.blackWhite};
   }
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }

  .cart-info {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    color: ${({ theme }) => theme.colors.blackWhite};

    .img-div {
      background: #ffffff;
      border: 1px solid #e4e4e4;
      box-sizing: border-box;
      box-shadow: 0px 0px 15px rgba(166, 164, 164, 0.25);
      border-radius: 3px;
      width: 86px;
      height: 93px;
      margin-right: 17px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;

      .quantityTop {
        position: absolute;
        width: 25px;
        height: 25px;
        background: #c4c4c4;
        border-radius: 45px;
        top: -12px;
        right: -12px;
      }
      img {
        width: 72px;
        height: 65px;
      }
    }
    .textSection {
      .heading {
        font-weight: 600;
        font-size: 18px;
        line-height: 18px;
        margin-bottom: 5px;
        text-align: start;
      }
      .subHeading {
        font-weight: 400;
        font-size: 16px;
        line-height: 16px;
        margin-bottom: 5px;
      }
    }
  }
  tr {
    border-bottom: 1px solid #959595;
    .totalEth {
      font-weight: 400;
      font-size: 18px;
      line-height: 18px;
      color: ${({ theme }) => theme.colors.blackWhite};
    }
  }

  th {
    text-align: left;
    padding: 14px 5px;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 18px;
    color: ${({ theme }) => theme.colors.blackWhite};
  }
  td {
    padding: 20px 5px;
  }

  .total-price {
    padding-top: 10px;
    .subTotalMainDiv {
      display: flex;
      justify-content: space-around;
      width: 100%;
      margin-left: auto;
      font-weight: 400;
      font-size: 16px;
      line-height: 30px;
      color: ${({ theme }) => theme.colors.blackWhite};

      &.last-one {
        border-bottom: 0.5px solid #979797;

      }
      .d1 {
        width: 50%;
      }
      .d2 {
        width: 50%;
        text-align: end;
        &.semi-bold {
          font-weight: 600;
        }
      }
    }
  }

  /* .total-price table {
    width: 100%;
    tr {
      border: unset;
    }
  } */
  td:nth-last-child(2) {
    text-align: center;
  }
  td:last-child {
    text-align: right;
  }
  th:nth-last-child(2) {
    text-align: center;
  }
  th:last-child {
    text-align: right;
  }
  @media (max-width: 670px) {
 .hideOrderMain {
   display:flex
 }
    .cart-page {
      margin-top: 10px;
    }

    .cart-info {
      display: flex;
      flex-wrap: wrap;
      .img-div {
        width: 49px;
        height: 53px;
        margin-right: 10px;
        .quantityTop {
          position: absolute;
          width: 13px;
          height: 13px;
          font-size : 10px;
          top: -6px;
          right: -6px;
        }
        img {
          width: 41px;
          height: 37px;
        }
      }
      .textSection {
        .heading {
          font-size: 12px;
          line-height: 12px;
        }
        .subHeading {
          font-size: 10px;
          line-height: 10px;
          display: flex;
          flex-wrap: wrap;
        }
    
      }
    }
    tr {
  
      .totalEth {
        font-size: 10px;
        line-height: 10px;
      }
      
    }

    .total-price {
      .subTotalMainDiv {
        width: 100%;
        margin-left: auto;
        font-size: 10px;
        line-height: 25px;
        .d1 {
          width: 50%;
        }
        .d2 {
          width: 50%;
          text-align: end;
        }
      }
    }
  }
`;
