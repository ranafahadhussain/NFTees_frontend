import React from "react";
import styled, { useTheme } from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import ConnectWalletButton from "./components/ConnectWalletButton";
import LightLogo from "assets/images/Logo/LightLogo.svg";
import DarkLogo from "assets/images/Logo/DarkLogo.svg";
import MobileLightLogo from "assets/images/Logo/TextLightLogo.svg";
import MobileDarkLogo from "assets/images/Logo/TextDarkLogo.svg";
import DarkMobileIcon from "assets/images/icons/dark-mobile-icon.png";
import LightMobileIcon from "assets/images/icons/light-mobile-icon.png";

interface NavbarProps {
  onPresentMobileMenu: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onPresentMobileMenu }) => {
  const { isDark } = useTheme();
  const { pathname } = useLocation();

  return (
    <NavbarFixedTop>
      <NavbarInner className="forDesktop">
        <NavLogo exact to="/" activeClassName="">
          {pathname !== "/" && (
            <img src={isDark ? LightLogo : DarkLogo} alt="" />
          )}
        </NavLogo>
        <NavbarLinks className={pathname !== "/" ? "textCenter" : "textEnd"}>
          {pathname !== "/" && <Nav />}
          <ConnectWalletButton />
        </NavbarLinks>

        <MobileNavbarIcon onClick={onPresentMobileMenu}>
          <img src={DarkMobileIcon} alt="" />
        </MobileNavbarIcon>
      </NavbarInner>

      <NavbarInner className="forMobile align-items-center">
        <MobileNavbarIcon onClick={onPresentMobileMenu}>
          <img src={isDark ? LightMobileIcon :DarkMobileIcon} alt="" />
        </MobileNavbarIcon>

        <NavLogo exact to="/" activeClassName="">
          {pathname !== "/" && (
            <img src={isDark ? MobileLightLogo : MobileDarkLogo} alt="" />
          )}
        </NavLogo>
        <div>
        <ConnectWalletButton />

        </div>

        <NavbarLinks className={pathname !== "/" ? "textCenter" : "textEnd"}>
          {pathname !== "/" && <Nav />}
        </NavbarLinks>

        
      </NavbarInner>
    </NavbarFixedTop>
  );
};

export default Navbar;

const NavbarFixedTop = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 97;

  background-color: ${({ theme }) => theme.colors.navbackground};
  .forMobile {
    display: none;
  }
  ${({ theme }) => theme.mediaQueries.maxWidthMD} {
    position: sticky;
  }
  ${({ theme }) => theme.mediaQueries.Maxlg} {
    .forMobile {
      display: flex;
    }
    .forDesktop {
      display: none;
    }
  }
`;

const NavbarInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  width: 90%;
  margin: auto;
  min-height: 83px;
`;
const NavLogo = styled(NavLink)`
  img {
    max-width: unset !important;
  }
  ${({ theme }) => theme.mediaQueries.maxWidthMD} {
    img {
      width: auto;
    }
  }
`;
const MobileNavbarIcon = styled.div`
  display: none;
  width : 29px;
  cursor: pointer;
  ${({ theme }) => theme.mediaQueries.maxWidthMD} {
    display: block;
  }
`;
const NavbarLinks = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  &.textEnd {
    justify-content: end;
  }
  &.textcenter {
    justify-content: center;
  }

  ${({ theme }) => theme.mediaQueries.maxWidthMD} {
    display: none;
  }
`;
