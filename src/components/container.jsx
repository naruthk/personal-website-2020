import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import tw from "twin.macro";

const ContainerWrapper = styled.section`
  ${tw`max-w-screen-md mx-auto pt-8 pb-8 px-4`}
  ${({ screenSize }) =>
    screenSize === "lg"
      ? css`
          ${tw`max-w-screen-lg`}
        `
      : css`
          ${tw`max-w-screen-md`}
        `}
`;

const Container = ({ children, screenSize }) => (
  <ContainerWrapper screenSize={screenSize}>{children}</ContainerWrapper>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  screenSize: PropTypes.string,
};

Container.defaultProps = {
  screenSize: "md",
};

export default Container;
