import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import Footer from "./footer";

import { globalStyles } from "../utils/styles";
import { Global } from '@emotion/core';

const Layout = ({ children, showWelcomeText, location }) => {
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
        location={location}
        showWelcomeText={showWelcomeText}
      />
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object,
  showWelcomeText: PropTypes.bool
}

Layout.defaultProps = {
  showWelcomeText: false,
  location: null
};

export default Layout
