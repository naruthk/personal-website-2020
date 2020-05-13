import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Share from "../share";
import Logo from "../ui/logo";

import { colors, mediaQuery } from "../../utils/styles";
import styled from '@emotion/styled';
import { css } from "@emotion/core";

const FloatingHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  ${mediaQuery[2]} {
    height: 60px;
  }

  > div {
    margin-left: 20px;
  }

  position: fixed;
  top: 0;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10; /* Must not overpower Modal */

  background-color: ${colors.white};
  border-bottom: 1px solid ${colors.yellow};
  transition: all .5s cubic-bezier(.19,1,.22,1);
  transform: translate3d(0,-120%,0);

  ${({ isActive }) =>
    isActive && css`
      visibility: visible;
      transition: all .5s cubic-bezier(.22,1,.27,1);
      transform: translateZ(0);
    `
  }

  progress[value]::-moz-progress-bar {
    background-color: ${colors.yellow};
  }
`;

const ProgressContainer = styled.progress`
  position: absolute;
  right: 0;
  bottom: 0px;
  left: 0;
  width: 100%;
  height: 2px;
  border: none;
  background: none;
  -webkit-appearance: none;
  -moz-appearance: none;
`;

const PostTitleWrapper = styled.div`
  flex: 1;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const FloatingHeader = ({ title, sharingStructData, pathName }) => {
  const [isActive, setIsActive] = useState(false);
  const [currentScrollingPositionY, setCurrentScrollingPositionY] = useState(0);

  useEffect(() => {
    if (!document) return;

    window.addEventListener("scroll", () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentlyScrolledPercentage = (winScroll / height) * 100;
  
      setIsActive(currentlyScrolledPercentage > 0);
      setCurrentScrollingPositionY(currentlyScrolledPercentage);
    });

    return () => {
      window.removeEventListener("scroll", () => setIsActive(false));
    };
  }, [setIsActive]);

  return (
    <FloatingHeaderWrapper isActive={isActive}>
      <Logo />
      <PostTitleWrapper>{title}</PostTitleWrapper>
      <Share isFloatingHeader={true} pathName={pathName} />
      <ProgressContainer value={currentScrollingPositionY} max="100" />
    </FloatingHeaderWrapper>
  )
};

export default FloatingHeader;

FloatingHeader.propTypes = {
  title: PropTypes.string,
  sharingStructData: PropTypes.object,
  pathName: PropTypes.string.isRequired
}

FloatingHeader.defaultProps = {
 title: "",
 sharingStructData: null
};