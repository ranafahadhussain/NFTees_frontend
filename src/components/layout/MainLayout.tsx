import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "components/Navbar";
import MobileNavbar from "components/MobileNavbar";
import Footer from "components/Footer";
import styled from "styled-components";

const MainLayout: React.FC = ({ children }) => {
  const { pathname, key, hash } = useLocation();

  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === "") {
      // window.onload = function () {
      window.scrollTo(0, 0);
      // }
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView(true);
          const topOfElement =
            window.pageYOffset + element.getBoundingClientRect().top - 80;
          window.scroll({ top: topOfElement, behavior: "smooth" });
        }
      }, 1000);
    }
  }, [pathname, hash, key]); // do this on route change

  const [mobileMenu, setMobileMenu] = useState(false);

  const handleDismissMobileMenu = useCallback(() => {
    setMobileMenu(false);
  }, [setMobileMenu]);

  const handlePresentMobileMenu = useCallback(() => {
    setMobileMenu(true);
  }, [setMobileMenu]);

  return (
    <>
      <Navbar onPresentMobileMenu={handlePresentMobileMenu} />
      <MobileNavbar onDismiss={handleDismissMobileMenu} visible={mobileMenu} />
      <MainLayoutBody>{children}</MainLayoutBody>
      <Footer />
    </>
  );
};

export default MainLayout;

const MainLayoutBody = styled.div`
  padding-top: 100px;
  ${({ theme }) => theme.mediaQueries.Maxlg} {
    padding-top: 10px;
  }
`;
