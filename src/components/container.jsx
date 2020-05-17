import React from "react";
import PropTypes from "prop-types";

import styled from '@emotion/styled';
import tw from "twin.macro";

const ContainerWrapper = styled.section`
  ${tw`max-w-screen-lg mx-auto pt-8 pb-8 px-4`}
`;

const Container = ({ children }) => (
  <ContainerWrapper>
    {children}
  </ContainerWrapper>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Container;
