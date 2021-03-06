import React, { useRef, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { motion } from "framer-motion";

// Component Imports
import LogoComponent from "../components/LogoComponent";
import PowerButton from "../components/PowerButton";
import SocialIcons from "../components/SocialIcons";
import WorkCard from "../components/WorkCard";

// Styling Imports
import { darkTheme } from "./Themes";

// Data Imports
import Work from "../data/WorkData";
import { YinYang } from "../components/AllSvgs";
import PageTitle from "../components/PageTitle";

// Framer Motion Variant Definition
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  height: calc((47vh * ${(props) => props.numItems}));
  position: relative;
  display: flex;
  align-items: center;
`;

const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;
  color: white;
`;

const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
`;

const WorkPage = () => {
  const ref = useRef();
  const yingyang = useRef();

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.scrollY}px)`;
      yingyang.current.style.transform = `rotate(${window.scrollY}deg)`;
    };

    window.addEventListener("scroll", rotate);

    return () => {
      window.removeEventListener("scroll", rotate);
    };
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <Box numItems={Work.length}>
        <PageTitle text="work" bottom="5%" left="10%" />
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />

        <Main ref={ref} variants={container} initial="hidden" animate="show">
          {Work.map((work) => (
            <WorkCard key={work.id} data={work} />
          ))}
        </Main>
        <Rotate ref={yingyang}>
          <YinYang width={80} height={80} fill={darkTheme.text} />
        </Rotate>
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;
