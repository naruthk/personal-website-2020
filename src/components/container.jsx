
import React from "react";
import PropTypes from "prop-types";

import { layout, mediaQuery } from "../utils/styles";

import styled from '@emotion/styled';
import { css } from "@emotion/core";

const ContainerWrapper = styled.section`
  ${layout};
  padding: 15px 30px;
  ${mediaQuery[2]} {
    padding: 50px 16.66%;
  }
  ${({ isFlex }) =>
    isFlex && css`
      display: flex;
      flex-direction: column;`
  }
  ${({ bg }) => bg && css`background-color: ${bg}`}
  ${({ isFullWidth }) => isFullWidth && css`width: 100vw;`}
`;

const Container = ({
  children,
  isFlex,
  bg,
  isFullWidth
}) => (
  <ContainerWrapper
    isFullWidth={isFullWidth}
    isFlex={isFlex}
    bg={bg}
  >
    {children}
  </ContainerWrapper>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  isFlex: PropTypes.bool,
  isCentered: PropTypes.bool,
  bg: PropTypes.string,
  isFullWidth: PropTypes.bool
}

Container.defaultProps = {
  isFlex: false,
  bg: null,
  isFullWidth: false
};

export default Container;
