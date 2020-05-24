/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import tw from "twin.macro";

import Link from "../link";

import useIsScrollLock from "./lock-body-scroll";
import Portal from "./portal";

const ModalWrapper = styled.div`
  ${tw`fixed inset-0 overflow-x-hidden overflow-y-auto scrolling-touch z-10`}
`;

const ContentWrapper = styled.div`
  ${tw`w-full h-screen overflow-y-auto mx-auto relative z-30`}
  ${tw`bg-white`}
`;

const CloseButton = styled.span`
  ${tw`pt-6 text-right block uppercase`}
  ${tw`mr-6 md:mr-12`}
  button {
    ${tw`text-gray-500 font-thin`}
    ${tw`transition-all duration-700 opacity-75 cursor-pointer`}
    ${tw`text-2xl md:text-5xl`}
  }
  button:hover {
    ${tw`text-gray-700`}
    ${tw`opacity-100`}
  }
`;

const Modal = ({ children, isActive, setActive }) => {
  useEffect(() => {
    const body = document.querySelector("body");
    body.addEventListener("keydown", event => {
      if (event.keyCode === 27) {
        setActive(false);
        useIsScrollLock(false);
      }
    });

    // TO-DO: Fix scorll-lock causing page to scroll to top.
    // if (isActive) useIsScrollLock(true);

    return () => {
      window.removeEventListener("keydown", null);
      // useIsScrollLock(false);
    };
  }, []);

  return (
    <Portal selector="#__modal">
      <ModalWrapper>
        <ContentWrapper>
          <CloseButton>
            <Link title="Close" onClick={() => setActive(!isActive)}>
              X
            </Link>
          </CloseButton>
          {children}
        </ContentWrapper>
      </ModalWrapper>
    </Portal>
  );
};

export default Modal;

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool,
  setActive: PropTypes.func,
};

Modal.defaultProps = {
  isActive: false,
  setActive: () => {},
};
