
import styled from "styled-components";

export const StyleMainWork = styled.div`
  padding: 55px 0px;
  width : 510px;
  @media (max-width: 670px) {
    width : 100%;

  }
  
  .questionHeading {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 12px;
    letter-spacing: 0.1em;
    color: ${({ theme }) => theme.colors.blackWhite};
  }
  .font20{
    font-size: 20px;
    margin-right : 7px;
  }
  .questionText {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 12px;
    letter-spacing: 0.1em;
    color: ${({ theme }) => theme.colors.blackWhite};
    a {
        text-decoration : none;
    }
  }
  ${({ theme }) => theme.mediaQueries.MaxSm} {
    .questionHeading, .font20 {
      font-size: 14px;
      font-weight: 600;
    }
    .questionText {
      font-size: 14px;
      font-weight: 500;
    }
  }
`;
export const StyleWork = styled.div`
padding-top : 25px;
`;

export const Listitem = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 22px;
`;

export const BoxBullet = styled.div`
  min-width: 10px;
  height: 10px;
  background-color: ${({ theme }) => theme.colors.blackWhite};
  display: flex;
  border-radius: 2px;
  margin-right: 10px;
  padding: 4px;
  ${({ theme }) => theme.mediaQueries.MaxSm} {
    min-width: 5px;
    height: 5px;
  }
`;
export const HideBoxBullet = styled.div`
  min-width: 10px;
  height: 10px;
  background-color: transparent;
  display: flex;
  border-radius: 2px;
  margin-right: 10px;
  padding: 4px;
  ${({ theme }) => theme.mediaQueries.MaxSm} {
    min-width: 5px;
    height: 5px;
  }
`;
