import PropTypes from "prop-types";
import React, { useState } from "react";
import { Link } from "gatsby";

import Container from "./container";
import Share from "./share";
import Modal from "./ui/modal";

import { ROUTES } from "../utils/routes";
import { colors, mediaQuery } from "../utils/styles";
import styled from '@emotion/styled';
import { FiMenu } from 'react-icons/fi';

const LENGTH_MOBILE = "40px";
const LENGTH_DESKTOP = "80px";

// 😉 Maybe move this to Contenful ?
const WELCOME_TEXT = <h1>Hi, I'm <span>Naruth</span>. I enjoy designing and creating web projects that can <span>help bring technology closer to people.</span></h1>;

const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  line-height: ${LENGTH_MOBILE};

  ${mediaQuery[2]} {
    margin: -15px 0;
    line-height: ${LENGTH_DESKTOP};
  }
  
  margin-bottom: 30px;

  button {
    background: none;
    border: none;
    outline: 0;
    color: ${colors.dark};
    font-size: inherit;
  }

  .desktop-only {
    display: none;
    ${mediaQuery[1]} {
      cursor: pointer;
      display: inline;
    }
  }
  .mobile-only {
    ${mediaQuery[1]} {
      display: none;
    }
  }
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
    background-color: ${colors.orange};
  }
`;

const Nav = styled.nav`
  button, a {
    font-weight: 300 !important;
  }
  a {
    margin-left: 30px;
    padding: 5px 10px;
    margin: 5px;
  }
  a[aria-current="page"] {
    background-color: ${colors.yellowDark};
    color: ${colors.white};
    font-weight: 700;
  }
`;

const WelcomeText = styled.div`
  margin-top: 60px;
  max-width: 650px;
  span {
    color: ${colors.yellowDark};
  }
`;

const MenuOverlayContent = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  height: 90%;

  h3 {
    font-weight: 400;
    color: ${colors.lightGrey};
  }
  a, a:visited {
    color: ${colors.white};
  }
`;

const MenuOverlayLink = styled.span`
  text-align: center;
  transition: 0.7s all;
  a {
    font-weight: 400;
    :hover {
      color: ${colors.yellowDark};
    }
  }
`;

const Header = ({ showWelcomeText }) => {
  const [showModalOverlay, setShowModalOverlay] = useState(false);

  const navOrder = [ROUTES.BLOG, ROUTES.PROJECT, ROUTES.ABOUT];

  return (
    <header>
      <Container isFlex={true} isCentered={true}>
        <NavWrapper>
          <Link to="/"><SiteLogo>NK</SiteLogo></Link>
          <Nav>
            {navOrder.map(item => 
              <Link
                key={item.name}
                className="desktop-only"
                to={item.url}>
                {item.name}
              </Link>
            )}
            <button
              className="desktop-only"
              onClick={() => setShowModalOverlay(true)}
            >
              {ROUTES.CONTACT.name}
            </button>
            <button
              className="mobile-only"
              onClick={() => setShowModalOverlay(true)}
            >
              <FiMenu />
            </button>
          </Nav>
        </NavWrapper>
        {showWelcomeText && <WelcomeText>{WELCOME_TEXT}</WelcomeText>}
      </Container>

      {/* Modal expands full screen on mobile screen size */}
      <Modal isActive={showModalOverlay} setActive={setShowModalOverlay}>
        <MenuOverlayContent>
          <div>
            {navOrder.map(item => 
              <MenuOverlayLink key={item.name}>
                <h1>
                  <Link to={item.url}>
                    {item.name}
                  </Link>
                </h1>
              </MenuOverlayLink>
            )}
          </div>
          <div>
            <p>Send your message to</p>
            <h2>
              <a href="mailto:nkongurai@gmail.com" title="Send a message">nkongurai@gmail.com</a>
            </h2>
          </div>
          <Share />
        </MenuOverlayContent>
      </Modal>
    </header>
  );
};

Header.propTypes = {
  showWelcomeText: PropTypes.bool
}

Header.defaultProps = {
  showWelcomeText: false
}

export default Header;
