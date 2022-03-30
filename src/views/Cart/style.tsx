import styled from "styled-components";

export const StyleMainTable = styled.div`
  .cart-page {
    margin-bottom: 50px;
  }
  .mobileHeading {
    display: none;
    font-size: 10px;
    margin-bottom: 10px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  .cart-info {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding-left: 15%;
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
      img {
        height: inherit;
      }
    }
    .textSection {
      .heading {
        font-weight: 600;
        font-size: 18px;
        line-height: 18px;
        margin-bottom: 5px;
      }
      .subHeading {
        font-weight: 400;
        font-size: 16px;
        line-height: 16px;
        margin-bottom: 5px;
      }
      .removeBtn {
        font-weight: 600;
        font-size: 14px;
        line-height: 14px;
        cursor: pointer;
        margin-bottom: 5px;
      }
    }
  }
  tr {
    border-bottom: 1px solid #959595;
    .price {
      font-weight: 400;
      font-size: 18px;
      line-height: 18px;
      color: ${({ theme }) => theme.colors.blackWhite};
    }
    .totalEth {
      font-weight: 400;
      font-size: 18px;
      line-height: 18px;
      color: ${({ theme }) => theme.colors.blackWhite};
    }
    .quantity {
      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      /* Firefox */
      input[type="number"] {
        -moz-appearance: textfield;
      }
      input {
        width: 35px;
        height: 35px;
        text-align: center;
        border: 1px solid #979797;
        color: ${({ theme }) => theme.colors.blackWhite};
      }
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
    /* display: flex;
    justify-content: flex-end; */
    .subTotalMainDiv {
      display: flex;
      justify-content: space-around;
      width: 300px;
      margin-left: auto;
      padding: 20px 0px;
      .d1 {
        width: 50%;
        text-align: center;
      }
      .d2 {
        width: 50%;
        text-align: end;
      }
    }
    .buttonSection {
        display: flex;
        justify-content: end;
    }
    .checkOutBtn {
      background: #2f2f2f;
      border-radius: 3px;
      width: 140px;
      border: unset;
      font-family: "Proxima Nova";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 16px;
      color: #ffffff;
      height: 42px;
    }
    .updateCart {
      width: 141px;
      height: 42px;
      border: unset;
      background: #c4c4c4;
      border-radius: 3px;
      font-family: "Proxima Nova";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 16px;
      margin-right : 15px;

      color: #000000;
    }
  }

  /* .total-price table {
    width: 100%;
    max-width: 300px;
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
    th {
      display: none;
    }
    .cart-page {
      margin-top: 35px;
    }

    .mobileHeading {
      display: revert;
    }
    .cart-info {
      display: flex;
      flex-wrap: wrap;
      padding-left: 0% !important;
      .img-div {
        width: 49px;
        height: 53px;
        margin-right: 10px;
        img {
          height: inherit;
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
        .removeBtn {
          font-size: 9px;
          line-height: 9px;
        }
      }
    }
    tr {
      .price {
        font-size: 10px;
        line-height: 10px;
      }
      .totalEth {
        font-size: 10px;
        line-height: 10px;
      }
      .quantity {
        input {
          width: 20px;
          height: 20px;
          text-align: center;
          font-size: 10px;
          border: 0.5px solid #979797;
        }
      }
    }

    .total-price {
    .subTotalMainDiv {
      width: 200px;
      margin-left: auto;
      font-size: 10px;
    line-height: 10px;
      .d1 {
        width: 50%;
        text-align: center;
      }
      .d2 {
        width: 50%;
        text-align: end;
      }
    }
    .buttonSection {
        display: flex;
        justify-content: end;
        flex-direction: column;
        div:first-child {
            text-align : end ;
            margin-bottom : 30px;
        }
    }
    .checkOutBtn {
      width: 100%;
      font-size: 10px;
      line-height: 10px;
      height: 31px;
    }
    .updateCart {
      width: 104px;
      height: 31px;
      font-size: 10px;
      line-height: 10px;
      margin-right : 0px;
      color: #000000;
    }
  }


  }
`;
