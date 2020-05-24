import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import tw from "twin.macro";

import Container from "../container";

const Wrapper = styled.div`
  ${tw`leading-normal`}
  a, a:visited {
    ${tw`no-underline font-medium`}
    ${tw`text-blue-700`}
  }
  img {
    ${tw`md:py-12 mx-auto block object-cover`}
  }
`;

const MarkdownRenderer = ({ html }) => (
  <Container>
    <Wrapper
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
  </Container>
);

export default MarkdownRenderer;

MarkdownRenderer.propTypes = {
  html: PropTypes.string.isRequired,
};
