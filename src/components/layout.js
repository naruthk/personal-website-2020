
import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import Footer from "./footer";

import { globalStyles } from "../utils/styles";
import { Global } from '@emotion/core';

const Layout = ({ children, showWelcomeText, activePage }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Global styles={globalStyles} />
      <Header
        siteTitle={data.site.siteMetadata.title}
        showWelcomeText={showWelcomeText}
      />
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  showWelcomeText: PropTypes.bool,
  activePage: PropTypes.string.isRequired
}

Layout.defaultProps = {
  showWelcomeText: false
};

export default Layout
