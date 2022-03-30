import styled, { useTheme } from "styled-components";
import DarkFacebook from "assets/images/icons/DarkFacebook.png";
import DarkInstagram from "assets/images/icons/DarkInstagram.png";
import DarkSpotify from "assets/images/icons/DarkSpotify.png";
import DarkTiktok from "assets/images/icons/DarkTiktok.png";
import DarkTwitter from "assets/images/icons/DarkTwitter.png";
import DarkYoutube from "assets/images/icons/DarkYoutube.png";

import LightFacebook from "assets/images/icons/LightFacebook.png";
import LightInstagram from "assets/images/icons/LightInstagram.png";
import LightSpotify from "assets/images/icons/LightSpotify.png";
import LightTiktok from "assets/images/icons/LightTiktok.png";
import LightTwitter from "assets/images/icons/LightTwitter.png";
import LightYoutube from "assets/images/icons/LightYoutube.png";

const Footer = () => {
  const { isDark } = useTheme();

  return (
    <FooterContainer>
      <FooterContent>
        <div className="cumPadding">CONTACT US</div>/
        <div className="cumPadding">SHIPPING AND POLICIES</div> /
        <div className="cumPadding">MAILING LIST</div> /
        <div className="cumPadding">MAILING LIST</div>
      </FooterContent>

      <FooterSocialIcon>
        <div className="IconPadding">
          <img
            src={isDark ? LightFacebook : DarkFacebook}
            alt=""
            className="ffIcon"
          />
        </div>
        <div className="IconPadding">
          <img
            src={isDark ? LightTiktok : DarkTiktok}
            alt=""
            className="ttIcon"
          />
        </div>
        <div className="IconPadding">
          <img
            src={isDark ? LightInstagram : DarkInstagram}
            alt=""
            className="isIcon"
          />
        </div>
        <div className="IconPadding">
          <img
            src={isDark ? LightTwitter : DarkTwitter}
            alt=""
            className="twIcon"
          />
        </div>
        <div className="IconPadding">
          <img
            src={isDark ? LightYoutube : DarkYoutube}
            alt=""
            className="yoIcon"
          />
        </div>
        <div className="IconPadding">
          <img
            src={isDark ? LightSpotify : DarkSpotify}
            alt=""
            className="spIcon"
          />
        </div>
      </FooterSocialIcon>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  background-color: transparent;
  width: 100%;
  padding: 10px 0px;
`;
const FooterContent = styled.span`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.colors.blackWhite};
  .cumPadding {
    padding-left: 10px;
    padding-right: 5px;
  }
  ${({ theme }) => theme.mediaQueries.MaxSm} {
    font-size: 11px;
  }
`;

const FooterSocialIcon = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .ffIcon {
    width: 21px;
    height: 21px;
  }
  .ttIcon {
    width: 17px;
    height: 17px;
  }
  .isIcon {
    width: 17px;
    height: 17px;
  }
  .twIcon {
    width: 24px;
    height: 25px;
  }
  .yoIcon {
    width: 21px;
    height: 21px;
  }
  .spIcon {
    width: 19px;
    height: 19px;
  }
  .IconPadding {
    padding: 10px;
    cursor: pointer;
  }
  ${({ theme }) => theme.mediaQueries.MaxSm} {
    .ffIcon {
    width: 14px;
    height: 14px;
  }
  .ttIcon {
    width: 11.4px;
    height: 11.5px;
  }
  .isIcon {
    width: 11.4px;
    height: 11.4px;
  }
  .twIcon {
    width: 16px;
    height: 16.8px;
  }
  .yoIcon {
    width: 14px;
    height: 14px;
  }
  .spIcon {
    width: 12px;
    height: 13px;
  }
  
  }
`;

export default Footer;
