import PropTypes from "prop-types";
import React from "react";
import { Link } from "gatsby";

import { Container } from "./Container";
import { ROUTES } from "../utils/routes";
import { colors, responsiveFontSizes } from "../utils/styles";

import styled from '@emotion/styled';

const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SiteLogo = styled.div`
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  background-color: ${colors.dark};
  color: ${colors.white};
  font-weight: 700;
  transition: 1s all;
  border-bottom-right-radius: 30px;
  :hover {
    border-radius: 25px;
  }
`;

const Nav = styled.nav`
  line-height: 100px;
  a {
    margin-left: 30px;
  }
`;

const Intro = styled.div`
  margin-top: 30px;
  max-width: 500px;
`;

const Header = ({ isLarge }) => (
  <header>
    <Container isFlex={true} isCentered={true}>
      <NavWrapper>
        <Link to="/"><SiteLogo>NK</SiteLogo></Link>
        <Nav>
          <Link to={ROUTES.BLOG}>Blog</Link>
          <Link to={ROUTES.BLOG}>Experiments</Link>
          <Link to={ROUTES.BLOG}>About</Link>
        </Nav>
      </NavWrapper>
      {isLarge && (
        <Intro>
          <h1>Hi, I'm Naruth Kongurai. I build web apps that people love using and design interfaces with focus on user interaction.</h1>
        </Intro>
      )}
    </Container>
  </header>
)

Header.propTypes = {
  isLarge: PropTypes.bool
}

Header.defaultProps = {
  isLarge: false
}

export default Header;
