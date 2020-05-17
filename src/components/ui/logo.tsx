import PropTypes from "prop-types";
import React from "react";

import Link from "../link";
import { FLOATING_HEADER_HEIGHT } from "./floating-header";

import { colors, mediaQuery } from "../../utils/styles";

import styled from '@emotion/styled';

const SiteLogo = styled.div`
  text-align: center;
  background-color: ${colors.dark};
  color: ${colors.white};
  font-weight: 700;
  transition: 1s all;

  width: ${FLOATING_HEADER_HEIGHT.mobile};
  height: ${FLOATING_HEADER_HEIGHT.mobile};
  line-height: ${FLOATING_HEADER_HEIGHT.mobile};
  
  ${mediaQuery[2]} {
    width: ${FLOATING_HEADER_HEIGHT.desktop};
    height: ${FLOATING_HEADER_HEIGHT.desktop};
    line-height: ${FLOATING_HEADER_HEIGHT.desktop};
  }

  :hover {
    opacity: 0.7;
  }
`;

const Logo = ({ showWelcomeText }) => (
  <Link href="/" title="Home">
    <SiteLogo>NK</SiteLogo>
  </Link>
);

Logo.propTypes = {
  showWelcomeText: PropTypes.bool
};

Logo.defaultProps = {
  showWelcomeText: false
};

export default Logo;
