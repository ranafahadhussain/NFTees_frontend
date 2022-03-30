import { Heading } from "components/Heading";
import Container from "components/layout/Container";
import styled from "styled-components";
import Hcorpo from "assets/images/team/Hcorpo.png";
import Wissame from "assets/images/team/Wissame.png";
import Smoking from "assets/images/team/Smoking.png";
import Blockchain from "assets/images/team/Blockchain.png";
import useWindowDimensions from "hooks/useWindowDimensions";
import { useEffect, useState } from "react";
import { Button } from "components/Button";

const AboutUs: React.FC = () => {
  const { width } = useWindowDimensions();
  const [expand, setExpand] = useState(true);

  useEffect(() => {
    if (width <= 576) {
      setExpand(false);
    } else {
      setExpand(true);
    }
  }, [width]);
  return (
    <Container>
      <StyleMainAbout>
        <Heading className="pt3">About us</Heading>
        <div className="aboutText">
          It all started not long ago, out of our passion for the world of
          crypto. As NFT enthusiasts ourselves, we believe that decentralized
          finance (DeFi) has already proven its value and usefulness, and it can
          bring even more advantages to society in the future, as we’re only
          seeing the tip of the iceberg.
        </div>
        <div className="aboutText">
          It was with this spirit that we decided to create an innovative
          concept to introduce more people to crypto & NFT culture. Fashion
          seemed like a great conduct and gateway to achieve this. We believe
          style has always been inspired and influenced by culture and vice
          versa. T-shirts are one of the most genuine forms of expression in
          fashion, so we know they’re the perfect physical product to pair with
          digital assets.
        </div>
        {
          <div
            data-target="slide-content"
            className={expand ? "" : "displayNone"}
          >
            <div className="aboutText">
              Our brand was born with the powerful ambition of onboarding as
              many people as possible into NFT culture, which is a small and
              growing part of crypto, but has a set of characteristics that make
              it stand on its own. NFTs can be seen as many things and have a
              growing number of use cases. They are collectibles, they are art,
              and they are also DeFi, all at once.
            </div>
            <div className="aboutText">
              We aim to start conversations about new technologies and the way
              crypto is changing and influencing our world.
            </div>
            <div className="aboutText pt-4">
              Bringing the Supply Chain to the Blockchain.
            </div>
            <Heading className="pt3">Team</Heading>
            <StyleMainTeamSection>
              <div className="teamcard">
                <div>
                  <img src={Hcorpo} alt="" />
                </div>
                <div>
                  <div className="teamName">Hcorpo</div>
                  <div className="teamRole">Founder</div>
                </div>
              </div>
              <div className="teamcard">
                <div>
                  <img src={Wissame} alt="" />
                </div>
                <div>
                  <div className="teamName">Wissame</div>
                  <div className="teamRole">Creative Director</div>
                </div>
              </div>
              <div className="teamcard">
                <div>
                  <img src={Smoking} alt="" />
                </div>
                <div>
                  <div className="teamName">Smoking Camel</div>
                  <div className="teamRole">Marketing</div>
                </div>
              </div>
              <div className="teamcard">
                <div>
                  <img src={Blockchain} alt="" />
                </div>
                <div>
                  <div className="teamName">Blockchain Papi</div>
                  <div className="teamRole">Investor</div>
                </div>
              </div>
            </StyleMainTeamSection>
          </div>
        }
        <div className="my-4 text-center readMoreButton">
          <Button
            variant="primary"
            onClick={() => {
              setExpand(!expand);
            }}
          >
            {" "}
            {expand ? "Less" : "Read More"}{" "}
          </Button>
        </div>
      </StyleMainAbout>
    </Container>
  );
};

export default AboutUs;

const StyleMainAbout = styled.div`
.displayNone {
  display: none;
}
  .pt3 {
    padding: 15px 0px 15px;
    text-align: center;
  }
  .aboutText {
    max-width: 992px;
    margin: auto;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.1em;
    color: ${({ theme }) => theme.colors.blackWhite};
    ${({ theme }) => theme.mediaQueries.MaxSm} {
      font-size: 14px;
      line-height: 14px;
    }
  }
  .readMoreButton {
    display: none;
  }
  ${({ theme }) => theme.mediaQueries.MaxSm} {
    .readMoreButton {
      display: revert;
    }
  }
`;

const StyleMainTeamSection = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom : 40px;
  
  .teamcard {
    font-style: normal;
    letter-spacing: 0.1em;
    color: ${({ theme }) => theme.colors.blackWhite};
    text-align: center;
    padding: 20px 40px;
    .teamName {
      font-weight: 700;
      font-size: 18px;
      line-height: 18px;
      padding: 10px 0px 7px;
      }
    }
    .teamRole {
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
    }
  }

  @media (max-width: 670px) {
    flex-direction : column;
    .teamcard {
      width : 100%;
    }
  }
  
`;
