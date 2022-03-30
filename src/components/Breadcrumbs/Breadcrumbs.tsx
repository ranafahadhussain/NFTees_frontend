import { Breadcrumb } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import { StaticRoutesEnum } from "utils/enums";

const Breadcrumbs = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  return (
    <BreadcrumbsContainer>
      <Breadcrumb>
        <Breadcrumb.Item
          href="#"
          onClick={() => {
            history.push(StaticRoutesEnum.CART);
          }}
          className={pathname === StaticRoutesEnum.CART && "active"}
        >
          Cart
        </Breadcrumb.Item>
        <Breadcrumb.Item
          href="#"
          onClick={() => {
            history.push(StaticRoutesEnum.CART_INFORMATION);
          }}
          className={pathname === StaticRoutesEnum.CART_INFORMATION && "active"}
        >
          Information
        </Breadcrumb.Item>
        <Breadcrumb.Item
          onClick={() => {
            history.push(StaticRoutesEnum.HOME);
          }}
          className={pathname === StaticRoutesEnum.CART && "active"}
        >
          Shipping
        </Breadcrumb.Item>
        <Breadcrumb.Item
          onClick={() => {
            history.push(StaticRoutesEnum.HOME);
          }}
          className={pathname === StaticRoutesEnum.CART && "active"}
        >
          Payment
        </Breadcrumb.Item>
      </Breadcrumb>
    </BreadcrumbsContainer>
  );
};

const BreadcrumbsContainer = styled.div`
  background-color: transparent;
  width: 100%;
  padding: 10px 0px;
  .breadcrumb-item:before {
    content: ">";
    color: ${({ theme }) => theme.colors.blackWhite};
  }
  .breadcrumb-item:first-child:before {
    content: "";
  }
  .breadcrumb-item {
    a {
      font-family: "Proxima Nova";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 16px;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.blackWhite};
      ${({ theme }) => theme.mediaQueries.MaxSm} {
        font-size: 12px;
        line-height: 12px;
      }
    }
    
  }
  .active {
    a {
      font-weight: 700;
      color: ${({ theme }) => theme.colors.blackWhite};
      font-size: 17px;
      ${({ theme }) => theme.mediaQueries.MaxSm} {
        font-size: 13px;
        line-height: 13px;
      }
    }
  }
`;

export default Breadcrumbs;
