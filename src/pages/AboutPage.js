import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";

// Component Imports
import LogoComponent from "../components/LogoComponent";
import PowerButton from "../components/PowerButton";
import SocialIcons from "../components/SocialIcons";
import ParticleComponent from "../components/ParticleComponent";
import PageTitle from "../components/PageTitle";

// Styling Imports
import { darkTheme } from "./Themes";

// Image Imports
import astronaunt from "../assets/Images/spaceman.png";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const float = keyframes`
0% { transform: translateY(-10px)}
50% { transform: translateY(15px) translateX(15px)}
100% { transform: translateY(-10px)}
`;

const Spaceman = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;

  img {
    width: 100%;
    height: auto;
  }
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: "Ubuntu Mono", monospace;
  font-style: italic;
`;

const AboutPage = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <PageTitle text="about" top="10%" left="5%" />
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <ParticleComponent theme="dark" />

        <Spaceman>
          <img src={astronaunt} alt="spaceman" />
        </Spaceman>

        <Main>
          <p>
            I'm a Software Engineer Graduate currently working as a front-end
            developer located in Ethiopia. I love building amazing websites with
            great user experience.
          </p>
          <p>
            I'm interested in the whole frontend stack, Machine Learning and
            Data Science. I like trying new things and building great projects.
            I want to develop my skills and pursue a future in reinforcement
            learning. I'm currently an independent freelancer and a co-founder
            at Limon Analytics. I love to play games and read books.
          </p>
          <p>
            I really enthusiastic about technology and I would love to develop
            my skills and contribute to its growth. You can connect with me via
            social links and Mail.
          </p>
        </Main>
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
