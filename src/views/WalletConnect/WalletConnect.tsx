import { ButtonWithIcon } from "components/Button";
import { Heading } from "components/Heading";
import Container from "components/layout/Container";
import styled from "styled-components";
import MetaMask from "assets/images/wallet/MetaMask.png";
import Coinbase from "assets/images/wallet/coinBase.png";
import WalletConnectIcon from "assets/images/wallet/walletconnect.png";
import Fortmatic from "assets/images/wallet/fortmatic.png";

const WalletConnect: React.FC = () => {
  return (
    <Container>
      <StyleMainCommunity>
        <Heading className="pt3">Login with your wallet</Heading>
        <StyledSubHeading>
          You need an Ethereum wallet to connect
        </StyledSubHeading>
        <StyledSubHeading>
          using an exssiting wallet to create a new one
        </StyledSubHeading>
        <WalletText>What is a Wallet?</WalletText>
        <div className="marginBottm">
          <ButtonWithIcon title="Discord" leftIcon={MetaMask} />
        </div>
        <div className="marginBottm">
          <ButtonWithIcon title="Instagram" leftIcon={Coinbase} />
        </div>
        <div className="marginBottm">
          <ButtonWithIcon title="Facebook" leftIcon={WalletConnectIcon} />
        </div>
        <div className="marginBottm">
          <ButtonWithIcon title="Twitter" leftIcon={Fortmatic} />
        </div>
        <div className="marginBottm">
          <ButtonWithIcon title="Show More option" titleClasses = "text-center" />
        </div>
      </StyleMainCommunity>
    </Container>
  );
};

export default WalletConnect;

const StyleMainCommunity = styled.div`
  text-align: center;
  .pt3 {
    padding: 15px 0px 0px;
  }
  .marginBottm {
    margin-bottom: 30px;
  }
`;

const StyledSubHeading = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 22px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.blackWhite};
  margin-bottom: 15px;
  ${({ theme }) => theme.mediaQueries.MaxSm} {
    font-size: 16px;
    line-height: 16px;
  }
`;

const WalletText = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 23px;
  line-height: 23px;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.colors.blackWhite};
  margin: 35px 0px;
  ${({ theme }) => theme.mediaQueries.MaxSm} {
    font-size: 18px;
    line-height: 18px;
  }
`;
