import { Heading } from "components/Heading";
import Container from "components/layout/Container";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { StaticRoutesEnum } from "utils/enums";
import { StyleMainTable } from "./style";

const ShopingCart: React.FC = () => {
  const history = useHistory();

  return (
    <Container>
      <ShopingContainer>
        <Heading className="pt3 text-center">YOUR CART</Heading>

        <StyleMainCart>
          <ShopingBtn
            onClick={() => {
              history.push(StaticRoutesEnum.COLLECTION);
            }}
          >
            CONTINUE SHOPPING{" "}
          </ShopingBtn>

          <StyleMainTable>
            <div className="small-container cart-page">
              <table>
                <tr>
                  <th></th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>

                <tr>
                  <td className="name">
                    <div className="cart-info">
                      <div className="img-div">
                        <img src="https://i.ibb.co/B3vYjvw/buy-1.jpg" alt="" />
                      </div>
                      <div className="textSection">
                        <div className="heading">Red Printed T-Shirt</div>
                        <div className="subHeading">
                          100% Cotton - White - Medium
                        </div>
                        <div className="removeBtn">Remove</div>
                      </div>
                    </div>
                  </td>

                  <td className="price">
                    <div className="mobileHeading">PRICE</div>
                    <div>0.03</div>
                  </td>
                  <td className="quantity">
                    <div className="mobileHeading">QUANTITY</div>

                    <input type="number" value="1" />
                  </td>
                  <td className="totalEth">
                    <div className="mobileHeading">TOTAL</div>
                    <div>0.03 ETH</div>
                  </td>
                </tr>
                <tr>
                  <td className="name">
                    <div className="cart-info">
                      <div className="img-div">
                        <img src="https://i.ibb.co/B3vYjvw/buy-1.jpg" alt="" />
                      </div>
                      <div className="textSection">
                        <div className="heading">Red Printed T-Shirt</div>
                        <div className="subHeading">
                          100% Cotton - White - Medium
                        </div>
                        <div className="removeBtn">Remove</div>
                      </div>
                    </div>
                  </td>

                  <td className="price">
                    <div className="mobileHeading">PRICE</div>
                    <div>0.03</div>
                  </td>
                  <td className="quantity">
                    <div className="mobileHeading">QUANTITY</div>

                    <input type="number" value="1" />
                  </td>
                  <td className="totalEth">
                    <div className="mobileHeading">TOTAL</div>
                    <div>0.03 ETH</div>
                  </td>
                </tr>
              </table>

              <div className="total-price">
                <div className="subTotalMainDiv">
                  <div className="d1">Subtotal</div>
                  <div className="d2">₹3500.00</div>
                </div>
                <div className="buttonSection">
                  <div>
                    <button className="updateCart">UPDATE CART</button>
                  </div>
                  <div
                    onClick={() => {
                      history.push(StaticRoutesEnum.CART_INFORMATION);
                    }}
                  >
                    <button className="checkOutBtn">CHECKOUT</button>
                  </div>
                </div>
              </div>
            </div>
          </StyleMainTable>
        </StyleMainCart>
      </ShopingContainer>
    </Container>
  );
};

export default ShopingCart;

const ShopingContainer = styled.div`
  .pt3 {
    padding: 15px 0px 25px;
  }
`;
const StyleMainCart = styled.div``;

const ShopingBtn = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  color: #000000;
  background: #c4c4c4;
  width: fit-content;
  border-radius: 3px;
  padding: 10px 15px;

  ${({ theme }) => theme.mediaQueries.MaxSm} {
    font-size: 10px;
    line-height: 10px;
  }
`;
