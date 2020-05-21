/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import tw from "twin.macro";

import Link from "../../link";

import Portal from "./portal";
import lockBodyScroll from "./lock-body-scroll";

const ModalWrapper = styled.div`
  ${tw`text-white`}

  .active {
    ${tw`opacity-100 h-full pointer-events-auto`}
    ${tw`sm:top-0 sm:right-0 md:top-0 md:right-0 bottom-0 md:w-1/2`}
    ${tw`transition-all duration-700`}
  }
`;

const DimLayer = styled.div`
  ${({ isActive }) =>
    isActive &&
    css`
      ${tw`fixed w-full h-full top-0 left-0`}
      ${tw`z-10 bg-black text-white opacity-75 `}
      ${tw`overflow-hidden overflow-y-hidden pointer-events-auto`}
      ${tw`transition-all duration-700`}
    `}
`;

const ContentWrapper = styled.div`
  ${tw`fixed w-full md:w-1/2 p-4 md:p-12 overflow-y-auto`}
  ${tw`md:-right-1/2 md:top-0`}
  ${tw`transition-all duration-700`}
  ${tw`bg-black z-20 pointer-events-auto`}
  bottom: -200%;
`;

const CloseButton = styled.span`
  ${tw`text-right cursor-pointer block uppercase mr-6`}
  button {
    ${tw`transition-all duration-700 opacity-75 text-gray-600`}
  }
  button:hover {
    ${tw`opacity-100 text-white`}
  }
`;

const Modal = ({ children, isActive, setActive }) => {
  useEffect(() => {
    if (isActive) lockBodyScroll(true);

    const body = document.querySelector("body");
    body.addEventListener("keydown", event => {
      if (event.keyCode === 27) setActive(false);
    });

    return () => {
      lockBodyScroll(false);
      window.removeEventListener("keydown", null);
    };
  }, [isActive]);

  return (
    <Portal selector="#__modal">
      <DimLayer isActive={isActive} onClick={() => setActive(!isActive)} />
      <ModalWrapper>
        <ContentWrapper className={(isActive && "active") || ""}>
          <CloseButton>
            <Link title="Close" onClick={() => setActive(!isActive)}>
              Close X
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
