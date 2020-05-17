import React from "react";
import PropTypes from "prop-types";

import { colors, mediaQuery, MAX_WIDTH } from "../../utils/styles";

import styled from '@emotion/styled';

const ContentBodyRendererWrapper = styled.div`
  padding: 50px 7%;
  ${mediaQuery[2]} {
    padding: 50px 16.66%;
  }
  background-color: ${colors.white};

  ${mediaQuery[2]} {
    width: 70%;
    max-width: ${MAX_WIDTH};
    padding: 40px;
    margin: -100px auto 0 auto;
  }

  h1, h2, h3, h4 {
    margin-top: 1.6em;
    font-weight: 600;
  }

  img {
    width: auto;
    max-width: 100%;
    text-align: center;
  }

  a, a:visited {
    color: ${colors.blue};
    :hover {
      color: ${colors.lightBlue};
    }
  }

  p {
    word-wrap: break-word;
  }

  blockquote {
    border-left: 5px solid ${colors.yellowDark};
    padding-left: 20px;
    margin: 40px 0;
  }
`;

const ContentBodyRenderer = ({ html }) => (
  <ContentBodyRendererWrapper
    dangerouslySetInnerHTML={{
      __html: html,
    }}
  />
);

export default ContentBodyRenderer;

ContentBodyRenderer.propTypes = {
  html: PropTypes.object.isRequired
}