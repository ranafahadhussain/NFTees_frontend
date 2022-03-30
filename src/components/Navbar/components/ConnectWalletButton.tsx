import useAuth from "hooks/useAuth";
import styled, { useTheme } from "styled-components";
import DarkShopingBag from "assets/images/icons/dark-shopping-bag.png";
import LightShopingBag from "assets/images/icons/light-shopping-bag.png";

import { StaticRoutesEnum } from "utils/enums";
import { useHistory } from "react-router";
import DarkUser from "assets/images/icons/DarkUser.png";
import LightUser from "assets/images/icons/LightUser.png";

const ConnectWalletButton = () => {
  const { login, logout } = useAuth();
  const { isDark } = useTheme();
  const history = useHistory()
  return (
    <StyleMainWalletConnect className="d-flex align-items-center">
      <ConWalletButton
        onClick={() => {
          history.push(StaticRoutesEnum.WALLET);
        }}
        className="textButton"
      >
        {"Connect Wallet"}
      </ConWalletButton>
      <ShopCartImageDiv  onClick={() => {
          history.push(StaticRoutesEnum.CART);
        }}>
        <img src={isDark? LightShopingBag : DarkShopingBag} alt="" />
      </ShopCartImageDiv>

      <MobileConnectButton className="mobileButton">
        <img src={isDark ? LightUser : DarkUser} alt="" />
      </MobileConnectButton>
    </StyleMainWalletConnect>
  );
};

const StyleMainWalletConnect = styled.div`
  .mobileButton {
    display: none;
  }
  ${({ theme }) => theme.mediaQueries.Maxlg} {
    .textButton {
      display: none;
    }
    .mobileButton {
      display: revert;
    }
  }
`;

const ConWalletButton = styled.button`
  background: #c4c4c4;
  border-radius: 22px;
  border: none;
  outline: none;
  padding: 8px 22px;
  font-family: "Inter", sans-serif;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  margin-left: 1rem;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.1em;
  color: #000000;

  ${({ theme }) => theme.mediaQueries.mobNavsm} {
    width: 50%;
  }

  ${({ theme }) => theme.mediaQueries.mobNavxs} {
    width: 80%;
  }
`;
const MobileConnectButton = styled.div`
  width: 24px;
`;
const ShopCartImageDiv = styled.div`
  width: 40px;
  cursor : pointer;
  ${({ theme }) => theme.mediaQueries.Maxlg} {
    width: 30px;

  }
`;
export default ConnectWalletButton;
