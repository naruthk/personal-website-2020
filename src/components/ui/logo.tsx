import PropTypes from "prop-types";
import React from "react";
import { Link } from "gatsby";

import Container from "../container";

import { colors, mediaQuery } from "../../utils/styles";
import styled from '@emotion/styled';

const LENGTH_MOBILE = "40px";
const LENGTH_DESKTOP = "60px"; /* to align with Floating Header */

const SiteLogo = styled.div`
  text-align: center;
  background-color: ${colors.dark};
  color: ${colors.white};
  font-weight: 700;
  transition: 1s all;

  width: ${LENGTH_MOBILE};
  height: ${LENGTH_MOBILE};
  line-height: ${LENGTH_MOBILE};
  
  ${mediaQuery[2]} {
    width: ${LENGTH_DESKTOP};
    height: ${LENGTH_DESKTOP};
    line-height: ${LENGTH_DESKTOP};
  }

  :hover {
    /* border-radius: 25px; */
    background-color: ${colors.orange};
  }
`;

const Logo = ({ showWelcomeText }) => (
  <Link to="/">
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
