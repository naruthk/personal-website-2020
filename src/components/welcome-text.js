import React from "react";

import { colors } from "../utils/styles";
import styled from "@emotion/styled";

const WelcomeTextWrapper = styled.div`
  margin-top: 20px;
  max-width: 650px;
  span {
    color: ${colors.yellowDark};
  }
`;

const WelcomeText = () => (
  <WelcomeTextWrapper>
    <h1>Hi, I'm <span>Naruth</span>. I design and create web projects that can <span>help bring technology closer to people.</span></h1>
  </WelcomeTextWrapper>
);

export default WelcomeText;
