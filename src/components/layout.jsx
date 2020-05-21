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

const Layout = ({
  children,
  pageTitle,
  showWelcomeText,
  showStickyHeader,
  showNavigationBar,
  location,
}) => {
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
      {showNavigationBar && (
        <Header
          siteTitle={data.site.siteMetadata.title}
          location={location}
          pageTitle={pageTitle}
          showStickyHeader={showStickyHeader}
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
  showStickyHeader: PropTypes.bool,
  showNavigationBar: PropTypes.bool,
  pageTitle: PropTypes.string.isRequired,
};

Layout.defaultProps = {
  showWelcomeText: false,
  showStickyHeader: false,
  showNavigationBar: true,
  location: null,
};

export default Layout;
