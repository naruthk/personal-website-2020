import React from "react";
import PropTypes from "prop-types";

import { colors, mediaQuery, MAX_WIDTH } from "../../utils/styles";
import styled from '@emotion/styled';

const ContentBodyRendererWrapper = styled.div`
  padding: 20px;
  background-color: ${colors.white};

  ${mediaQuery[2]} {
    width: 70%;
    max-width: ${MAX_WIDTH};
    padding: 40px;
    margin: -100px auto 0 auto;
  }

  h1, h2, h3, h4 {
    margin-top: 1.6em;
    font-weight: 500;
  }


  img {
    width: auto;
    max-width: 100%;
    text-align: center;
  }
`;

const ContentBodyRenderer = ({ html }) => (
  <ContentBodyRendererWrapper
    dangerouslySetInnerHTML={{
      __html: html,
    }}
  >
  </ContentBodyRendererWrapper>
);

export default ContentBodyRenderer;

ContentBodyRenderer.propTypes = {
  html: PropTypes.object.isRequired
}