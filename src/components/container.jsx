
import React from "react";
import PropTypes from "prop-types";

import {
  layout,
  MAX_WIDTH,
  mediaQuery
} from "../utils/styles";

import styled from '@emotion/styled';
import { css } from "@emotion/core";

const ContainerWrapper = styled.section`
  ${layout};
  padding: 5px 20px;
  ${mediaQuery[2]} {
    padding: 40px 80px 0px;
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
`;

const Container = ({ children, width, isFlex, isCentered, bg }) => (
  <ContainerWrapper
    maxWidth={width}
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
  bg: PropTypes.string
}

Container.defaultProps = {
  width: MAX_WIDTH,
  isFlex: true,
  isCentered: true,
  bg: null
};

export default Container;
