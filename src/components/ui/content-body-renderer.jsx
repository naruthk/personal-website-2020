import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import tw from "twin.macro";

const ContentBodyRendererWrapper = styled.div`
  ${tw`max-w-screen-md mx-auto px-4 pt-4 leading-normal`}
  a, a:visited {
    ${tw`no-underline text-blue-700 font-medium`}
  }
  img {
    ${tw`md:py-12 mx-auto block object-cover`}
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
  html: PropTypes.string.isRequired,
};