
import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import Footer from "./footer";

import { globalStyles } from "../utils/styles";
import { Global } from '@emotion/core';
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
`;

const Layout = ({ children, showWelcomeText }) => {
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
    <Wrapper>
      <Global styles={globalStyles} />
      <Header
        siteTitle={data.site.siteMetadata.title}
        showWelcomeText={showWelcomeText}
      />
      {children}
      <Footer />
    </Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  showWelcomeText: PropTypes.bool
}

Layout.defaultProps = {
  showWelcomeText: false
};

export default Layout
