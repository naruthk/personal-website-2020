import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Global } from "@emotion/core";
import styled from "@emotion/styled";
import tw from "twin.macro";

import { globalStyles } from "../utils/styles";
import { LocationPropTypes } from "../utils/types";

import Header from "./header";
import Footer from "./footer";

const ModalRootWrapper = styled.div`
  ${tw`relative z-50`}
`;

const Layout = ({ children, showWelcomeText, displayNavigation, location }) => {
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
      {displayNavigation && (
        <Header
          siteTitle={data.site.siteMetadata.title}
          location={location}
          showWelcomeText={showWelcomeText}
        />
      )}
      {children}
      <Footer />
      <ModalRootWrapper id="__modal" />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: LocationPropTypes,
  showWelcomeText: PropTypes.bool,
  displayNavigation: PropTypes.bool,
};

Layout.defaultProps = {
  showWelcomeText: false,
  displayNavigation: true,
  location: null,
};

export default Layout;
