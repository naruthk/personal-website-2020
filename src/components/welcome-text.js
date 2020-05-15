import React from "react";

import { colors, transition, mediaQuery } from "../utils/styles";
import styled from "@emotion/styled";

const WelcomeTextWrapper = styled.div`
  margin: 20px auto 0 auto;
  ${mediaQuery[2]} {
    margin-top: 40px;
  }
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
    <h1>Hi, I'm <span>Naruth</span>. I design and create web apps not just for fun but to try and <span>bridge the gap</span> between <span>people</span> and <span>technology</span>.</h1>
  </WelcomeTextWrapper>
);

export default WelcomeText;
