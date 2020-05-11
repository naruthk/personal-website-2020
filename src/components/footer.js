import PropTypes from "prop-types";
import React from "react";

import Social from "../components/share";
import Container from "../components/container";

import { colors } from "../utils/styles";
import styled from "@emotion/styled";

const FooterWrapper = styled.footer`
  background-color: ${colors.grey};
  width: 100%;
  min-height: 200px;
  color: ${colors.white};
  text-align: center;
  p { margin-top: 20px; }
`;

const Footer = () => (
  <FooterWrapper>
    <Container>
      <Social />
      <p>© {new Date().getFullYear()}</p>
    </Container>
  </FooterWrapper>
);

Footer.propTypes = {
  siteTitle: PropTypes.string,
};

Footer.defaultProps = {
  siteTitle: ``,
};

export default Footer;
