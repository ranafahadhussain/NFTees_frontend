import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import NavigationTabArray from "utils/navigationTab";

const Nav: React.FC = () => {
  const { pathname } = useLocation();


  return (
    <StyledNav>
      {NavigationTabArray.map((data, index) => (
        <StyledLink key={index} exact to={ data.route} activeClassName= {pathname ===  data.route ? 'active' : ''} >
          {
            data.name
          }
        </StyledLink>
      ))}
    </StyledNav>
  );
};

const StyledNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  .disabled {
    pointer-events: none;
      opacity: 0.4;
  }
`;
const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0.1em;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.blackWhite};
  margin :  0px 20px;
  padding : 2px 0px;
  &.active {
    border-bottom : 1px solid ${({ theme }) => theme.colors.blackWhite};
}
`;

export default Nav;
