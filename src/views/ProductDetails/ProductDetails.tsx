import { Heading } from "components/Heading";
import Container from "components/layout/Container";
import useTheme from "hooks/useTheme";
import ShirtImage from "assets/images/nfts/BigNFt.png";
import DarkEth from "assets/images/icons/DarkEth.png";
import {
  ColorWrapper,
  PriceSection,
  SaleInfoSection,
  AddToCartBtn,
  SelectColorSection,
  SizeSection,
  StyleImagDiv,
  StyleMainProductDetails,
  StyletSecondColumn,
} from "./style";
import { StaticRoutesEnum } from "utils/enums";
import { useHistory } from "react-router-dom";

const ProductDetails: React.FC = () => {
  const { isDark } = useTheme();
  const history = useHistory();
  return (
    <Container>
      <StyleMainProductDetails>
        <Heading className="pt3">Classics t-shirts</Heading>

        <div className="wrapper">
          <StyleImagDiv>
            <img src={ShirtImage} alt="" />
          </StyleImagDiv>

          <StyletSecondColumn>
            <div className="proHeading"> HOLD T-Shirt </div>
            <PriceSection>
              <div>(100$) </div>
              <div>
                <img src={isDark ? DarkEth : DarkEth} alt="" />
              </div>
              <div>0.05/ETH</div>
            </PriceSection>

            <ColorWrapper>
              <PriceSection className="color">Colors</PriceSection>
              <SelectColorSection>
                <div className="blackColor"></div>
                <div className="grayColor"></div>
              </SelectColorSection>
            </ColorWrapper>

            <SizeSection>
              <div className="sizeHead">
                <div className="textOne">Size: </div>
                <div className="textTwo">view size chart</div>
              </div>
              <div className="sizeNumberSection">
                <div className="sizeNumber">S</div>
                <div className="sizeNumber">M</div>
                <div className="sizeNumber">L</div>
                <div className="sizeNumber">XL</div>
              </div>
            </SizeSection>
            <AddToCartBtn
              onClick={() => {
                history.push(StaticRoutesEnum.CART);
              }}
            >
              Choice a Size{" "}
            </AddToCartBtn>
            <SaleInfoSection>
              <div>Material</div>
              <div>100% 6.5oz Cotton Screen printed logo Made in Canada</div>
            </SaleInfoSection>
          </StyletSecondColumn>
        </div>
      </StyleMainProductDetails>
    </Container>
  );
};

export default ProductDetails;
