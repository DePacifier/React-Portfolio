import React from "react";
import styled from "styled-components";

const Text = styled.h1`
  position: fixed;
  text-transform: uppercase;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  color: ${(props) => `rgba(${props.theme.textRgba}, 0.1)`};

  font-size: calc(5rem + 5vw);
  z-index: 0;
`;

const PageTitle = (props) => {
  return (
    <Text
      top={props.top}
      left={props.left}
      right={props.right}
      bottom={props.bottom}
    >
      {props.text}
    </Text>
  );
};

export default PageTitle;
