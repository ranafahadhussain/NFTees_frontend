import React from "react";
import styled, { keyframes, useTheme } from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import NavigationTabArray from "utils/navigationTab";
import DarkClose from "assets/images/icons/DarkClose.png";
import LightClose from "assets/images/icons/LightClose.png"

interface MobileMenuProps {
  onDismiss: () => void;
  visible?: boolean;
}

const MobileNavbar: React.FC<MobileMenuProps> = ({ onDismiss, visible }) => {
  const { isDark } = useTheme();
  const { pathname } = useLocation();


  if (visible) {
    return (
      <StyledMobileMenuWrapper onClick={onDismiss}>
        <StyledBackdrop />

        <StyledMobileMenu>
          <StyledLogoAndIcon>
            <img
              src={isDark ? LightClose : DarkClose}
              alt=""
              onClick={onDismiss}
            />
          </StyledLogoAndIcon>

          {NavigationTabArray.map((data, index) => (
            <StyledLink
              key={index}
              exact
              activeClassName= {pathname ===  data.route ? 'active' : ''}       
              to={data.route}
              onClick={onDismiss}
              className = {''}
            >
               {
                  
                  data.name
                }
            </StyledLink>
          ))}
          
        </StyledMobileMenu>
      </StyledMobileMenuWrapper>
    );
  }
  return null;
};

const StyledMobileMenuWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
`;
const StyledBackdrop = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  position: absolute;
  top: 0;
  right: 40%;
  bottom: 0;
  left: 0;
`;
const slideIn = keyframes`
  0% {
    transform: translateX(0)
  }
  100% {
    transform: translateX(-100%);
  }
`;
const StyledMobileMenu = styled.div`
  /* animation: ${slideIn} 0.3s forwards ease-in; */
  display: flex;
  flex: 1;
  flex-direction: column;
  position: relative;
  top: 0;
  /* left: 100%; */
  bottom: 0;
  width: 60%;
  height: 100%;
  max-width: 100%;
  overflow-y: scroll;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  padding: 30px 0px 40px 0;
  .disabled {
    pointer-events: none;
      opacity: 0.4;
  }
  
  ${({ theme }) => theme.mediaQueries.mobNavsm} {
    width: 60%;
  }
`;
const StyledLogoAndIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  width :13px;
  margin-left : 40px;
  margin-bottom : 20px;

`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-transform: capitalize;
  padding: 10px 40px;
}
  color: ${({ theme }) => theme.colors.blackWhite};
  &.isDisabled {
    pointer-events: none !important;
  }
  &.active {
    background: ${({ theme }) => theme.colors.activeMobileNav};
  }
  &.yellow-color {
  }
`;
export default MobileNavbar;
