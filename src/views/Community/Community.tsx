import { ButtonWithIcon } from "components/Button";
import { Heading } from "components/Heading";
import Container from "components/layout/Container";
import styled from "styled-components";
import DiscordIcon from "assets/images/icons/discord.png";
import InstagramIcon from "assets/images/icons/instagram.png";
import FacebookIcon from "assets/images/icons/facebook.png";
import TwitterIcon from "assets/images/icons/twitter.png";

const Community: React.FC = () => {
  return (
    <Container>
      <StyleMainCommunity>
        <Heading className = "pt3">Community</Heading>
        <div className = "marginBottm">
          <ButtonWithIcon title="Discord" rightIcon={DiscordIcon} />
        </div>
        <div className = "marginBottm">
          <ButtonWithIcon title="Instagram" rightIcon={InstagramIcon} />
        </div>
        <div className = "marginBottm">
          <ButtonWithIcon title="Facebook" rightIcon={FacebookIcon} />
        </div>
        <div className = "marginBottm">
          <ButtonWithIcon title="Twitter" rightIcon={TwitterIcon} />
        </div>
      </StyleMainCommunity>
    </Container>
  );
};

export default Community;

const StyleMainCommunity = styled.div`
    text-align : center;
    .pt3 {
        padding :  15px 0px 25px;
    }
    .marginBottm {
        margin-bottom : 30px;
    }
`;
