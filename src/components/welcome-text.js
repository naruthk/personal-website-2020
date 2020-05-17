import React from "react";

import { colors, transition } from "../utils/styles";
import styled from "@emotion/styled";

const WelcomeTextWrapper = styled.div`
  margin: auto;
  max-width: 650px;
  cursor: default;
  
  span {
    color: ${colors.yellowDark};
    transition: ${transition};
    padding: 0 5px;
    :hover {
      padding: 0;
    }
  }
`;

const WelcomeText = () => (
  <WelcomeTextWrapper>
    <h1>I'm Naruth, a Web Developer from Bangkok on an endless journey to <span>learn</span>, <span>create</span>, and <span>bridge the gap</span> between <span>people and technology</span>.</h1>
  </WelcomeTextWrapper>
);

export default WelcomeText;
