import PropTypes from "prop-types";
import React from "react";

const Footer = () => (
  <footer>
    <div>
    <p>© {new Date().getFullYear()}, Built with {` `} <a href="https://www.gatsbyjs.org">Gatsby</a></p>
    </div>
  </footer>
);

Footer.propTypes = {
  siteTitle: PropTypes.string,
};

Footer.defaultProps = {
  siteTitle: ``,
};

export default Footer;
