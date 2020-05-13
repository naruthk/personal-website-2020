import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { css } from "@emotion/core";
import styled from '@emotion/styled';
import { colors, mediaQuery} from "../../utils/styles";

const ModalWrapper = styled.div`
  color: ${colors.white};

  .active {
    opacity: 1;
    ${mediaQuery[2]} {
      top: 0;
      right: 0;
      width: 50%;
      padding: 46px 65px;
      height: 100%;
    }
    bottom: 0;
    height: 100%;
    pointer-events: all;
    -webkit-transition: all .7s;
    transition: all .7s;
  }
`;

const Portal = styled.div`
  ${({ isActive }) =>
    isActive && css`
      opacity: 0.5;
      pointer-events: all;
      -webkit-transition: all .7s;
      transition: all .7s;
      z-index: 2;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      position: fixed;
      background-color: ${colors.dark};
      overflow: hidden;
      color: ${colors.white};
    `
  }
`;

const ContentWrapper = styled.div`
  position: fixed;
  ${mediaQuery[2]} {
    top: 0;
    right: -50%;
    width: 50%;
    padding: 46px 65px;
    height: 100%;
  }
  bottom: -200%;
  width: 100%;
  padding: 20px;
  background-color: #000;
  z-index: 990;
  pointer-events: none;
  -webkit-transition: all .7s;
  transition: all .7s;
`;

const CloseButton = styled.span`
  text-align: right;
  cursor: pointer;
  display: block;
  margin: 0 20px 40px 0;
  text-transform: uppercase;

  a, a:visited {
    -webkit-transition: all .7s;
    transition: all .7s;
    font-weight: 300;
    opacity: 0.7;
    color: ${colors.lightGrey};
  }
  a:hover {
    color: ${colors.white};
    opacity: 1.0;
  }
`;

const Modal = ({ children, isActive, setActive }) => {
  useEffect(() => {
    const body = document.querySelector("body");
    body.addEventListener("keydown", event => {
      if (event.keyCode === 27) setActive(false);
    });

    return () => window.removeEventListener("keydown", null);
  }, []);

  return (
    <>
      <ModalWrapper>
        <ContentWrapper className={isActive && "active" || ""}>
          <CloseButton>
            <a onClick={() => setActive(!isActive)}>Close X</a>
          </CloseButton>
          {children}
        </ContentWrapper>
      </ModalWrapper>
      <Portal isActive={isActive} onClick={() => setActive(!isActive)} />
    </>
  );
};

export default Modal;

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool
};

Modal.defaultProps = {
  isActive: false,
  setActive: () => {}
};
