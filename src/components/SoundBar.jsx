import React, { useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

// Sound Imports
import backgroundMusic from "../assets/audio/u-said-it-v13-1167.mp3";

const Box = styled.div`
  display: flex;
  cursor: pointer;
  position: fixed;
  left: 7rem;
  top: 2.5rem;
  z-index: 10;

  & > *:nth-child(1) {
    animation-delay: 0.2s;
  }
  & > *:nth-child(2) {
    animation-delay: 0.3s;
  }
  & > *:nth-child(3) {
    animation-delay: 0.4s;
  }
  & > *:nth-child(4) {
    animation-delay: 0.5s;
  }
  & > *:nth-child(5) {
    animation-delay: 0.6s;
  }
`;

const play = keyframes`
0% {  transform: scaleY(1) }
50% {  transform: scaleY(2) }
100% {  transform: scaleY(1) }
`;

const Line = styled.span`
  background: ${(props) => props.theme.text};
  border: 1px solid ${(props) => props.theme.body};
  animation: ${play} 1s ease infinite;
  animation-play-state: ${(props) => (props.click ? "running" : "paused")};
  height: 1rem;
  width: 2px;
  margin: 0 0.1rem;
`;

const SoundBar = () => {
  const ref = useRef();
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick((previousClickValue) => !previousClickValue);

    if (!click) {
      ref.current.volume = 0.6;
      ref.current.play();
    } else {
      ref.current.pause();
    }
  };

  return (
    <Box onClick={handleClick}>
      <Line click={click} />
      <Line click={click} />
      <Line click={click} />
      <Line click={click} />
      <Line click={click} />

      <audio src={backgroundMusic} ref={ref} loop preload volume={0.2} />
    </Box>
  );
};

export default SoundBar;
