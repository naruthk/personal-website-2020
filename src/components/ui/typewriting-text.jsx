import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import tw from "twin.macro";

const AnimationWrapper = styled.section`
  ${tw`overflow-hidden whitespace-no-wrap ml-0 my-0 select-none`}

  /* Based on Geoff Graham's https://codepen.io/geoffgraham/pen/jrWwWM */
  @keyframes typing {
    from {
      width: 0;
      border-right: 5px solid orange;
    }
    50% {
      width: 50%;
      border: 0;
    }
    to {
      width: 100%;
      border: 0;
    }
  }

  animation: typing 7s steps(30, end) infinite;
`;

const TypeWritingText = ({ children }) => (
  <AnimationWrapper>{children}</AnimationWrapper>
);

TypeWritingText.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TypeWritingText;
