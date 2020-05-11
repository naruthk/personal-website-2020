import PropTypes from "prop-types";
import React from "react";
import { Link } from "gatsby";

import Container from "./container";
import { ROUTES } from "../utils/routes";
import { colors, mediaQuery } from "../utils/styles";

import styled from '@emotion/styled';

const LENGTH_MOBILE = "40px";
const LENGTH_DESKTOP = "80px";

const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  line-height: ${LENGTH_MOBILE};
  ${mediaQuery[2]} {
    line-height: ${LENGTH_DESKTOP};
  }
  margin-bottom: 30px;
`;

const SiteLogo = styled.div`
  text-align: center;
  background-color: ${colors.dark};
  color: ${colors.white};
  font-weight: 700;
  transition: 1s all;

  width: ${LENGTH_MOBILE};
  height: ${LENGTH_MOBILE};
  line-height: ${LENGTH_MOBILE};
  
  ${mediaQuery[2]} {
    width: ${LENGTH_DESKTOP};
    height: ${LENGTH_DESKTOP};
    line-height: ${LENGTH_DESKTOP};
  }

  :hover {
    border-radius: 25px;
  }
`;

const Nav = styled.nav`
  a {
    margin-left: 30px;
    font-weight: 300 !important;
    padding: 5px 10px;
    margin: 5px;
  }
  a[aria-current="page"] {
    background-color: ${colors.grey};
    color: ${colors.white};
  }
`;

const WelcomeText = styled.div`
  margin-top: 30px;
  max-width: 650px;
`;

// 😉 Maybe move this to Contenful ?
const WELCOME_TEXT = "Hi, I'm Naruth. I love creating JavaScript web apps that bring people closer together through technology.";

const Header = ({ showWelcomeText }) => (
  <header>
    <Container isFlex={true} isCentered={true}>
      <NavWrapper>
        <Link to="/"><SiteLogo>NK</SiteLogo></Link>
        <Nav>
          <Link to={ROUTES.BLOG.url}>{ROUTES.BLOG.name}</Link>
          <Link to={ROUTES.PROJECT.url}>{ROUTES.PROJECT.name}</Link>
          <Link to={ROUTES.ABOUT.url}>{ROUTES.ABOUT.name}</Link>
        </Nav>
      </NavWrapper>
      {showWelcomeText && <WelcomeText><h1>{WELCOME_TEXT}</h1></WelcomeText>}
    </Container>
  </header>
)

Header.propTypes = {
  showWelcomeText: PropTypes.bool
}

Header.defaultProps = {
  showWelcomeText: false
}

export default Header;
