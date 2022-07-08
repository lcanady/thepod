import styled from "styled-components";
import background from "./assets/background.png";
import WeAreThePod from "./assets/wearethepod.png";
import logo from "./assets/logo.png";
import thepod from "./assets/thepod.png";
import hero from "./assets/hero.png";
import instagram from "./assets/instagram.png";
import discord from "./assets/discord.png";
import twitter from "./assets/twitter.png";
import random from "./assets/random.gif";
import squad from "./assets/squad.png";
import glyf from "./assets/glyf.png";
import quecia from "./assets/quecia.png";
import sazon from "./assets/sazon.png";
import born from "./assets/born.png";
import ghost from "./assets/ghost.png";
import vortex from "./assets/vortex.png";
import kumakun from "./assets/kumakun.png";
import kite from "./assets/kite.png";
const Background = styled.div`
  background: linear-gradient(180deg, rgba(119, 179, 188, 0) 50%, #76b8bf 100%),
    url(${background});
  width: 100%;
  min-height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  max-width: 1435px;
  margin-top: 30px;
  width: 100%;
  height: 100%;
  position: relative;
`;

const Hero = styled.div`
  width: 100%;
  height: 580px;
  border-radius: 10px;
  background: url(${hero});
  background-size: cover;
  background-position: center;
  margin-top: 30px;

  @media only screen and (max-width: 768px) {
    border-radius: 0;
  }
`;

const Links = styled.div`
  display: flex;
  margin-left: auto;

  img {
    margin-left: 20px;
  }

  @media only screen and (max-width: 768px) {
    margin-top: 5px;
    margin-left: 0;
  }
`;

const Content = styled.div`
  max-width: 100%;
  display: flex;
  margin: 30px;
  align-items: center;

  p {
    text-align: justify;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;

    img {
      margin: 30px auto;
    }
  }
`;

const About = styled.div`
  max-width: 800px;
  margin-right: 30px;

  @media only screen and (max-width: 768px) {
    margin-right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Divider = styled.div`
  height: 1px;
  max-width: 100%;
  border-bottom: 1px solid #000;
  margin: 0 30px;
`;

const BabyWhale = styled.img`
  border-radius: 100%;
  margin-left: auto;

  @media only screen and (max-width: 768px) {
    margin: 30px 0;
  }
`;

const MintBox = styled.div`
  display: flex;
  height: 130px;
  max-width: 100%;
  border-radius: 10px;
  margin: 30px;
  background: #fff;
  align-items: center;

  p {
    margin: 0 20px;
  }

  @media only screen and (max-width: 768px) {
    height: auto;
    margin: 30px 0;
    border-radius: 0;
    p {
      margin: 20px;
    }
  }
`;

const MintButton = styled.button`
  background: #f595fa;
  width: 360px;
  height: 85px;
  border: none;
  outline: none;
  border-radius: 5px;
  font-family: "Montserrat", sans-serif;
  font-weight: bolder;
  font-size: 30px;
  margin-left: auto;
  margin-right: 20px;
  cursor: pointer;
`;

const MintHero = styled.div`
  width: 300px;
  margin: 0 20px;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
`;

const Team = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 10px 0;
  justify-content: space-between;
  &:last-child {
    margin-right: auto;
  }

  @media only screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;

    p {
      text-align: center;
    }
  }
`;

const TeamMember = styled.div`
  margin: 30px 0;
  margin-right: 30px;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    align-items: center;
  }
`;

const TeamImg = styled.img`
  width: 300px;
  border-radius: 100%;
`;

const TeamTitle = styled.p`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 20px;
  margin: 0;
  padding: 0;
  @media only screen and (max-width: 768px) {
    margin-top: 20px;
    text-align: center;
  } ;
`;
const TeamSub = styled.p`
  font-size: 14px;
  font-weight: bolder;
  margin-top: -3px;
`;

const TeamSocial = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: -8px;
  width: 40px;
`;

function App() {
  return (
    <div className="App">
      <Background>
        <Wrapper>
          <Content>
            <img src={logo} alt="logo" height="150px" />
            <img src={WeAreThePod} alt="We are the pod" height="58px" />
            <Links>
              <a href="https://discord.gg/Rfxvryvxuf" target="_blank">
                <img src={discord} alt="discord" height="32px" />
              </a>
              <a href="https://twitter.com/xthepod" target="_blank">
                <img src={twitter} alt="twitter" height="32px" />
              </a>
              <a href="https://instagram.com/xthepodx" target="_blank">
                <img src={instagram} alt="Instagram" height="32px" />
              </a>
            </Links>
          </Content>
          <Hero />
          <Content>
            <About>
              <img src={thepod} alt="the pod" height="55px" />
              <b>
                <p>
                  The POD is a INCUBATOR established in January of 2022,
                  consisting of like-minded creators and innovators all working
                  together to achieve a common mission: the progression and
                  advancement of Web3. It all started with a Twitter Space where
                  250 consecutive hours were spent educating and onboarding
                  newcomers with learn-to-earn incentives and community building
                  activities.
                </p>
                <p>
                  The community has grown to become a make-up of Artists,
                  Musicians, Developers, and much more. We have built a
                  community for individuals to gather online to learn about the
                  web3 space, create/collaborate with others, and receive
                  support for any of their undertakings.
                </p>
                <p>
                  With a sturdy foundation set in place, we are also developing
                  a launchpad for our community and NFT Holders! Some of the
                  services offered currently (but not limited to): custom
                  artwork, custom media (songs, videos, etc.), web3 development,
                  social media management, etc. It is a necessity to ensure that
                  newcomers to the web3 and crypto space are on-boarded properly
                  and educated on the various tools available. Everyone in
                  between has a seat at the table to define the future of the
                  web3 space! -<span style={{ color: "red" }}>❤</span>
                </p>
              </b>
            </About>
            <BabyWhale src={random} alt="random" height="300px" />
          </Content>
          <MintBox>
            <MintHero>
              Mint a<br />
              Baby Whale!
            </MintHero>
            <p>
              <b>
                We focus on ensuring that the web3 space isn't too
                Over-Whale-ming for our community. Mint is live now!!!!!
              </b>
            </p>
            <MintButton
              onClick={() =>
                (window.location.href = "https://pod.infinitymint.app")
              }
              target="_blanik"
            >
              MINT
            </MintButton>
          </MintBox>
          <Divider />
          <Content style={{ flexDirection: "column" }}>
            <img
              src={squad}
              alt="squad"
              height="58"
              style={{ marginRight: "auto" }}
            />
            <Team>
              <TeamMember>
                <TeamImg src={glyf} alt="glyf" height="300px" />
                <TeamTitle>Glyf</TeamTitle>
                <TeamSub>Artist/Marketing</TeamSub>
                <TeamSocial>
                  <a href="https://instagram.com/glyf82" target="_blank">
                    <img src={instagram} alt="Instagram" height="16px" />
                  </a>
                  <a href="https://twitter.com/Glyf01" target="_blank">
                    <img src={twitter} alt="twitter" height="16px" />
                  </a>
                </TeamSocial>
              </TeamMember>
              <TeamMember>
                <TeamImg src={quecia} alt="Quecia" height="300px" />
                <TeamTitle>Quecia</TeamTitle>
                <TeamSub>Administration/Marketing</TeamSub>
                <TeamSocial>
                  <img src={instagram} alt="instagram" height="16px" />
                  <img src={twitter} alt="twitter" height="16px" />
                </TeamSocial>
              </TeamMember>
              <TeamMember>
                <TeamImg src={sazon} alt="Mr. Sazon" height="300px" />
                <TeamTitle>Mr. Sazon</TeamTitle>
                <TeamSub>Marketing/Artist/Music</TeamSub>
                <TeamSocial>
                  <a href="https://instagram.com/themrsazon" target="_blank">
                    <img src={instagram} alt="Instagram" height="16px" />
                  </a>
                  <a href="https://twitter.com/themrsazon" target="_blank">
                    <img src={twitter} alt="twitter" height="16px" />
                  </a>
                </TeamSocial>
              </TeamMember>
              <TeamMember>
                <TeamImg src={born} alt="Borne" height="300px" />
                <TeamTitle>Borne</TeamTitle>
                <TeamSub>Research/Music</TeamSub>
                <TeamSocial>
                  <a href="https://instagram.com/holy_swank" target="_blank">
                    <img src={instagram} alt="Instagram" height="16px" />
                  </a>
                  <a href="https://twitter.com/holy_swank" target="_blank">
                    <img src={twitter} alt="twitter" height="16px" />
                  </a>
                </TeamSocial>
              </TeamMember>
              <TeamMember>
                <TeamImg src={ghost} alt="Ghost Skater" height="300px" />
                <TeamTitle>Ghost Skater</TeamTitle>
                <TeamSub>Artist</TeamSub>
                <TeamSocial>
                  <a href="https://instagram.com/ghostskater" target="_blank">
                    <img src={instagram} alt="Instagram" height="16px" />
                  </a>
                  <a href="https://twitter.com/bomberheadnft" target="_blank">
                    <img src={twitter} alt="twitter" height="16px" />
                  </a>
                </TeamSocial>
              </TeamMember>
              <TeamMember>
                <TeamImg src={vortex} alt="Vortex" height="300px" />
                <TeamTitle>Vortex</TeamTitle>
                <TeamSub>Social Media/Art</TeamSub>
                <TeamSocial>
                  <img src={instagram} alt="instagram" height="16px" />
                  <a href="https://twitter.com/ivortextit" target="_blank">
                    <img src={twitter} alt="twitter" height="16px" />
                  </a>
                </TeamSocial>
              </TeamMember>
              <TeamMember>
                <TeamImg src={kumakun} alt="Kumakun" height="300px" />
                <TeamTitle>Kumakun</TeamTitle>
                <TeamSub>Artist/Developer</TeamSub>
                <TeamSocial>
                  <a href="https://instagram.com/lemcanady" target="_blank">
                    <img src={instagram} alt="Instagram" height="16px" />
                  </a>
                  <a href="https://twitter.com/lcanady" target="_blank">
                    <img src={twitter} alt="twitter" height="16px" />
                  </a>
                </TeamSocial>
              </TeamMember>
              <TeamMember>
                <TeamImg src={kite} alt="Kite" height="300px" />
                <TeamTitle>Kite</TeamTitle>
                <TeamSub>Administration/Artist</TeamSub>
                <TeamSocial>
                  <img src={instagram} alt="instagram" height="16px" />
                  <img src={twitter} alt="twitter" height="16px" />
                </TeamSocial>
              </TeamMember>
            </Team>
          </Content>
          <Divider />
          <Team style={{ margin: "30px" }}>
            <Links>
              <a href="https://discord.gg/Rfxvryvxuf" target="_blank">
                <img src={discord} alt="discord" height="32px" />
              </a>
              <a href="https://twitter.com/xthepod" target="_blank">
                <img src={twitter} alt="twitter" height="32px" />
              </a>
              <a href="https://instagram.com/xthepodx" target="_blank">
                <img src={instagram} alt="Instagram" height="32px" />
              </a>
            </Links>
          </Team>
        </Wrapper>
      </Background>
    </div>
  );
}

export default App;
