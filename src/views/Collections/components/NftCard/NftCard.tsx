import styled from "styled-components";
import Image1 from "assets/images/nfts/Nft1.png";
const NftCard: React.FC = () => {
  return (
    <StyleMainCardContainer className="mx-auto">
      <StyleInnerContainer>
        <div className="image-div">
          <img src={Image1} alt="" />
        </div>

        <StyleCardInformation>
          <div className="productName">Product Name </div>
          <div className="productPrice">$164.00 CAD</div>
        </StyleCardInformation>
      </StyleInnerContainer>
    </StyleMainCardContainer>
  );
};

export default NftCard;

const StyleMainCardContainer = styled.div`
  background: #ffffff;
  box-shadow: 2px 2px 15px rgba(139, 135, 135, 0.25);
  border-radius: 8px;
  max-width: 230px;
  min-height: 246px;
  margin-bottom:28px;
  cursor : pointer;
  ${({ theme }) => theme.mediaQueries.MaxSm} {
    max-width: 170px;
    min-height: 182px;
  }
`;

const StyleInnerContainer = styled.div`
  padding: 17px 23px;
  .image-div {
    max-width: 189px;
    max-height: 167px;
    text-align: center;
    ${({ theme }) => theme.mediaQueries.MaxSm} {
      max-width: 140px;
      min-height: 123px;
    }
    img {
      object-fit: contain;
    }
  }
`;
const StyleCardInformation = styled.div`
  font-family: "Proxima Nova";
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.1em;
  color: #000000;

  text-align: center;
  .productName {
    font-size: 14px;
    line-height: 14px;
    padding-bottom: 7px;
    ${({ theme }) => theme.mediaQueries.MaxSm} {
        font-size: 9px;
        line-height: 9px;
    }
  }
  .productPrice {
    font-size: 12px;
    line-height: 12px;
    padding-bottom: 7px;
    ${({ theme }) => theme.mediaQueries.MaxSm} {
        font-size: 7px;
        line-height: 7px;
    }
  }
`;
