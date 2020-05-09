
import React from "react";
import PropTypes from "prop-types";

import styled from '@emotion/styled';
import { css } from "@emotion/core";
import { layout, MAX_WIDTH, breakpoints } from "../../utils/styles";

const ContainerWrapper = styled.section`
  ${layout};
  margin-bottom: 30px;
  @media screen and (max-width: ${breakpoints.lg}) {
    padding: 10px;
  }
  @media screen and (min-width: ${breakpoints.lg}) {
    padding: 40px 80px 60px;
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
