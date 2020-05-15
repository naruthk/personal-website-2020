import React, { useState } from "react";

import Link from "./link";
import Container from "./container";
import Logo from "./ui/logo";
import Share from "./share";
import Modal from "./ui/modal";

import { ROUTES } from "../utils/routes";
import { colors, mediaQuery } from "../utils/styles";

import styled from '@emotion/styled';
import { FiMenu } from 'react-icons/fi';

const LENGTH_MOBILE = "40px";
const LENGTH_DESKTOP = "80px";

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
    ${mediaQuery[2]} {
      cursor: pointer;
      display: inline;
    }
  }
  .mobile-only {
    ${mediaQuery[2]} {
      display: none;
    }
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

const Header = () => {
  const [showModalOverlay, setShowModalOverlay] = useState(false);
  const navOrder = [ROUTES.BLOG, ROUTES.PROJECT, ROUTES.ABOUT];

  return (
    <>
      <Container isFlex={true} isCentered={true}>
        <NavWrapper>
          <Logo />
          <Nav>
            {navOrder.map(item => 
              <Link
                key={item.name}
                className="desktop-only"
                href={item.url}
                title={item.name}
              >
                {item.name}
              </Link>
            )}
            <Link
              className="desktop-only"
              title="Contact"
              onClick={() => setShowModalOverlay(true)}
            >
              {ROUTES.CONTACT.name}
            </Link>
            <Link
              className="mobile-only"
              title="Hamburger Menu"
              onClick={() => setShowModalOverlay(true)}
            >
              <FiMenu />
            </Link>
          </Nav>
        </NavWrapper>
      </Container>

      {/* Modal expands full screen on mobile screen size */}
      <Modal isActive={showModalOverlay} setActive={setShowModalOverlay}>
        <MenuOverlayContent>
          <div>
            {navOrder.map(item => 
              <MenuOverlayLink key={item.name}>
                <h1>
                  <Link href={item.url} title={item.name}>
                    {item.name}
                  </Link>
                </h1>
              </MenuOverlayLink>
            )}
          </div>
          <div>
            <p>Send your message to</p>
            <h2>
              <Link isExternal href="mailto:nkongurai@gmail.com" title="Send a message">
                nkongurai@gmail.com
              </Link>
            </h2>
          </div>
          <Share />
        </MenuOverlayContent>
      </Modal>
    </>
  );
};

export default Header;
