import Container from "components/layout/Container";
import React from "react";
import styled, { useTheme } from "styled-components";
import LightRoundLogo from "assets/images/icons/light-round-logo.svg";
import DarkRoundLogo from "assets/images/icons/dark-round-logo.svg";
import NavigationTabArray from "utils/navigationTab";
import { useHistory } from "react-router";

const Home: React.FC = () => {
  const { isDark } = useTheme();
  const history = useHistory()
  return (
    <Container>
      <StyleHomeMain>
        <div className = "text-center">
          <img src={isDark ? LightRoundLogo : DarkRoundLogo} alt="" className = "roundedLogo"/>
          {NavigationTabArray.map((data, index) => (
            <StyleNavLink key={index} onClick = {()=>{
              history.push(data?.route)
            }}>{data.name}</StyleNavLink>
          ))}
        </div>
      </StyleHomeMain>
    </Container>
  );
};

export default Home;

const StyleHomeMain = styled.div`
  min-height: calc(100vh - 170px);
  display : flex ; 
  align-items : center;
  justify-content : center;
  .text-center {
    text-align : center;
  }
  ${({ theme }) => theme.mediaQueries.MaxSm} {
    .roundedLogo {
      width : 80%;
    }
  }
  
`;

const StyleNavLink = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 25px;
  letter-spacing: 0.05em;
  cursor:pointer;
  color: ${({ theme }) => theme.colors.blackWhite};
  padding-top : 20px;
  text-align :center;
  ${({ theme }) => theme.mediaQueries.MaxSm} {
    font-size: 18px;
    line-height: 18px;
  }
`;
