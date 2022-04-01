import React from "react";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";

// Component Imports
import { Robot, Develope } from "../components/AllSvgs";
import LogoComponent from "../components/LogoComponent";
import PowerButton from "../components/PowerButton";
import SocialIcons from "../components/SocialIcons";
import ParticleComponent from "../components/ParticleComponent";
import PageTitle from "../components/PageTitle";

// Styling Imports
import { lightTheme } from "./Themes";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;

  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1rem + 1vw);

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  ul,
  p {
    margin-left: 2rem;
  }
`;

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <PageTitle text="skills" top="80%" right="36%" />
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <PowerButton />
        <ParticleComponent theme="light" />
        <Main>
          <Title>
            <Develope width={40} height={40} /> Front-End Developer
          </Title>
          <Description>
            I love to build and create websites with eye capturing design which
            speaks, keep it clean, minimal and simple.
          </Description>
          <Description>
            <strong>Skills</strong>
            <p>
              Html, Css, Js, TypeScript, React, Redux, Sass, Material-UI,
              Framer-Motion etc.
            </p>
          </Description>
          <Description>
            <strong>Tools</strong>
            <ul>
              <li>VScode, Github, Figma etc.</li>
            </ul>
          </Description>
        </Main>
        <Main>
          <Title>
            <Robot width={40} height={40} /> Data Analyst and ML Engineer
          </Title>
          <Description>
            I appreciate the subtlety and informativeness of data. I enjoy
            working on data and experimenting on reinforcement learning using
            games.
          </Description>
          <Description>
            <strong>Skills</strong>
            <p>
              Python, EDA, DVC, SQL, Tensorflow, Scikit-learn, MLflow, Airflow,
              CI/CD, FastAPI, C# etc.
            </p>
          </Description>
          <Description>
            <strong>Tools</strong>
            <ul>
              <p>
                VScode, Github, Streamlit, Jupyter Notebook and Lab, Unity etc.
              </p>
            </ul>
          </Description>
        </Main>
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
