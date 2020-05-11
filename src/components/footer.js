import PropTypes from "prop-types";
import React from "react";

import Container from "./container";

const Footer = () => (
  <Container>
    <p>© {new Date().getFullYear()}. 😎 Built with {` `} <a href="https://www.gatsbyjs.org">Gatsby</a> 🔥</p>
  </Container>
);

Footer.propTypes = {
  siteTitle: PropTypes.string,
};

Footer.defaultProps = {
  siteTitle: ``,
};

export default Footer;
