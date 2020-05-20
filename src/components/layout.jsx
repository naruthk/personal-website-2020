import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Global } from "@emotion/core";

import { globalStyles } from "../utils/styles";
import { LocationPropTypes } from "../utils/types";

import Header from "./header";
import Footer from "./footer";

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
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: LocationPropTypes,
  showWelcomeText: PropTypes.bool,
};

Layout.defaultProps = {
  showWelcomeText: false,
  location: null,
};

export default Layout;
