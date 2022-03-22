import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// Component Imports
import LogoComponent from "../components/LogoComponent";
import PowerButton from "../components/PowerButton";
import SocialIcons from "../components/SocialIcons";
import BlogComponent from "../components/BlogComponent";
import AnchorComponent from "../components/AnchorComponent";
import PageTitle from "../components/PageTitle";

// Image Imports
import backgroundImg from "../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg";

// Blog Data Import
import Blogs from "../data/BlogData";

// Framer Motion Variants
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

const MainContainer = styled(motion.div)`
  background-image: url(${backgroundImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`;

const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.8)`};
  width: 100%;
  height: auto;
  position: relative;
  padding-bottom: 5rem;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw);
`;

const BlogPage = () => {
  const [numbers, setNumbers] = useState(0);

  useEffect(() => {
    let num = (window.innerHeight - 70) / 30;
    setNumbers(parseInt(num));
  }, []);

  return (
    <MainContainer
      variants={container}
      initial="hidden"
      animate="show"
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <Container>
        <PageTitle text="blog" top="5rem" left="5rem" />
        <LogoComponent />
        <PowerButton />
        <SocialIcons />
        <AnchorComponent numbers={numbers} />

        <Center>
          <Grid>
            {Blogs.map((blog) => (
              <BlogComponent key={blog.id} blog={blog} />
            ))}
          </Grid>
        </Center>
      </Container>
    </MainContainer>
  );
};

export default BlogPage;
