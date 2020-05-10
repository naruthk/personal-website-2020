import PropTypes from "prop-types";
import React from "react";
import { Link } from "gatsby";

import { Container } from "./Container";
import { ROUTES } from "../utils/routes";
import { colors, breakpoints } from "../utils/styles";

import styled from '@emotion/styled';

const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  line-height: 80px;

  @media screen and (max-width: ${breakpoints.md}) {
    line-height: 40px;
  }
`;

const SiteLogo = styled.div`
  text-align: center;
  background-color: ${colors.dark};
  color: ${colors.white};
  font-weight: 700;
  transition: 1s all;

  width: 80px;
  height: 80px;

  @media screen and (max-width: ${breakpoints.md}) {
    width: 40px;
    height: 40px;
    line-height: 40px;
  }
  
  :hover {
    border-radius: 25px;
  }
`;

const Nav = styled.nav`
  a { margin-left: 30px; }
`;

const WelcomeText = styled.div`
  margin-top: 30px;
  max-width: 650px;
`;

// 😉 Maybe move this to Contenful ?
const WELCOME_TEXT = "Hi, I'm Naruth Kongurai. I love creating JavaScript web apps that bring people closer together through technology.";

const Header = ({ showWelcomeText }) => (
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
