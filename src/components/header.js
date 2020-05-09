import PropTypes from "prop-types";
import React from "react";

import { colors } from "../utils/styles";

import styled from '@emotion/styled';
import { Link } from "gatsby";

const HeaderWrapper = styled.header`
  background-color: ${colors.blue};
  padding: 30px 0 0 0;
`;

const Header = ({ siteTitle, isLarge }) => (
  <HeaderWrapper>
    <div>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          eee
        </Link>
      </h1>
    </div>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;
