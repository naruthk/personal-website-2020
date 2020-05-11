
import React from "react";
import PropTypes from "prop-types";

import { layout, mediaQuery } from "../utils/styles";

import styled from '@emotion/styled';
import { css } from "@emotion/core";

const ContainerWrapper = styled.section`
  ${layout};
  padding: 48px 30px;
  ${mediaQuery[2]} {
    padding: 100px 16.66%;
  }
  ${({ isFlex }) =>
    isFlex && css`
      display: flex;
      flex-direction: column;`
  }
  ${({ isCentered }) =>
    isCentered && css`margin-left: auto; margin-right: auto;`
  }
  ${({ bg }) => bg && css`background-color: ${bg}`}
  ${({ isFullWidth }) => isFullWidth && css`width: 100vw;`}
`;

const Container = ({
  children,
  width,
  isFlex,
  isCentered,
  bg,
  isFullWidth
}) => (
  <ContainerWrapper
    // maxWidth={width}
    isFullWidth={isFullWidth}
    isFlex={isFlex}
    isCentered={isCentered}
    bg={bg}
  >
    {children}
  </ContainerWrapper>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.number,
  isFlex: PropTypes.bool,
  isCentered: PropTypes.bool,
  bg: PropTypes.string,
  isFullWidth: PropTypes.bool
}

Container.defaultProps = {
  isFlex: true,
  isCentered: true,
  bg: null,
  isFullWidth: false
};

export default Container;
