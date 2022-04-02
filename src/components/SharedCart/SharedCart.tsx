
import { CartHideIcon } from "components/Svg";
import styled from "styled-components";
import { StyleMainTable } from "./style";

const SharedCart: React.FC = () => {

  return (
    <ShopingContainer>
      <StyleMainCart>
        <StyleMainTable>
          <div className="hideOrderMain">
              <div >
                <CartHideIcon className="cartIcon" />
              </div>
              <div>
                0.13 ETH
              </div>
          </div>
          <div className="small-container cart-page">
            <table>
              <tr>
                <td className="name">
                  <div className="cart-info">
                    <div className="img-div">
                      <img src="https://i.ibb.co/B3vYjvw/buy-1.jpg" alt="" />
                      <div className="quantityTop">2</div>
                    </div>
                    <div className="textSection">
                      <div className="heading">Red Printed T-Shirt</div>
                      <div className="subHeading">
                        100% Cotton - White - Medium
                      </div>
                    </div>
                  </div>
                </td>
                <td className="totalEth">
                  <div>0.03 ETH</div>
                </td>
              </tr>
            </table>

            <div className="total-price">
              <div className="subTotalMainDiv">
                <div className="d1">Subtotal</div>
                <div className="d2 semi-bold">0.09 ETH</div>
              </div>
              <div className="subTotalMainDiv">
                <div className="d1">Shipping</div>
                <div className="d2">0.01 ETH</div>
              </div>
              <div className="subTotalMainDiv last-one">
                <div className="d1">Gas fee</div>
                <div className="d2">0.02 ETH</div>
              </div>
              <div className="subTotalMainDiv ">
                <div className="d1">Total</div>
                <div className="d2 semi-bold">0.12 ETH</div>
              </div>
            </div>
          </div>
        </StyleMainTable>
      </StyleMainCart>
    </ShopingContainer>
  );
};

export default SharedCart;

const ShopingContainer = styled.div`
  padding-left: 35px;
  ${({ theme }) => theme.mediaQueries.MaxSm} {
    padding-left: 0px;

  }
`;
const StyleMainCart = styled.div``;
