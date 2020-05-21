/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { FiMenu } from "react-icons/fi";
import cx from "classnames";
import tw from "twin.macro";

import { ROUTES } from "../utils/routes";
import { LocationPropTypes } from "../utils/types";
import useIsScrollingHook from "../hooks/use-is-scrolling";

import Link from "./link";
import FloatingHeader from "./ui/floating-header";
import Logo from "./ui/logo";
import Share from "./share/share";
import Modal from "./ui/modal/modal";

const NavWrapper = styled.nav`
  ${tw`max-w-screen-lg mx-auto pt-4 pb-2 md:py-8 px-4`}
  ${tw`flex flex-row justify-between`}
`;

const SiteNavLinks = styled.div`
  button,
  a,
  a:visited {
    ${tw`py-4 text-gray-600`}
  }
  button {
    ${tw`pl-2 ml-2`}
  }
  a,
  a:visited {
    ${tw`px-2 mx-4`}
  }
  a[aria-current="page"],
  .active {
    ${tw`border-b-2 border-solid border-gray-600 text-gray-900`}
  }
  .desktop-only {
    ${tw`hidden md:inline-block cursor-pointer`}
  }
  .mobile-only {
    ${tw`md:hidden`}
  }
`;

const MenuOverlayContent = styled.div`
  ${tw`flex flex-col flex-none justify-around mx-4`}
  height: 90vh; /* this prevents overflow */

  a,
  a:visited {
    ${tw`text-white`}
  }
  .cta-message {
    ${tw`block text-gray-600 leading-normal md:text-left text-base xl:text-lg font-semibold mb-6`}
  }
  .email-link {
    ${tw`text-xl md:text-left md:text-lg lg:text-xl xl:text-2xl text-gray-800 leading-normal`}
  }
  .sharing-navigation {
    ${tw`pt-2 border-t-2 border-solid border-gray-900`}
  }
`;

const getActiveRouteEntity = location => {
  if (!location) return null;

  const splitPath = location.pathname.split("/");
  return ROUTES[splitPath[1].toUpperCase()] || null;
};

const Header = ({ location, pageTitle, showStickyHeader }) => {
  const activeRoute = getActiveRouteEntity(location);
  const navOrder = [ROUTES.BLOG, ROUTES.PROJECTS, ROUTES.ABOUT];

  const [showModalOverlay, setShowModalOverlay] = useState(false);
  const { isActive } = useIsScrollingHook();

  return (
    <>
      {showStickyHeader && isActive && (
        <FloatingHeader
          title={pageTitle}
          pathName={location && location.pathname}
        />
      )}

      <NavWrapper>
        <Logo />
        <SiteNavLinks>
          {navOrder.map(item => (
            <Link
              key={item.name}
              className={cx("desktop-only", {
                active: activeRoute && activeRoute.name === item.name,
              })}
              href={item.url}
              title={item.name}
            >
              {item.name}
            </Link>
          ))}
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
        </SiteNavLinks>
      </NavWrapper>

      <Modal isActive={showModalOverlay} setActive={setShowModalOverlay}>
        <MenuOverlayContent>
          <div>
            {navOrder.map(item => (
              <h1 key={item.name}>
                <Link href={item.url} title={item.name}>
                  {item.name}
                </Link>
              </h1>
            ))}
          </div>
          <div>
            <p className="cta-message">Send your message to</p>
            <p className="email-link">
              <Link
                isExternal
                href="mailto:nkongurai@gmail.com"
                title="Send a message"
              >
                nkongurai@gmail.com
              </Link>
            </p>
          </div>
          <div className="sharing-navigation">
            <Share />
          </div>
        </MenuOverlayContent>
      </Modal>
    </>
  );
};

Header.propTypes = {
  location: LocationPropTypes,
  pageTitle: PropTypes.string.isRequired,
  showStickyHeader: PropTypes.bool,
};

Header.defaultProps = {
  location: null,
  showStickyHeader: false,
};

export default Header;
