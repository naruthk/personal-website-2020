import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Share from "../share/share";
import Logo from "../ui/logo";

import { colors } from "../../utils/styles";

import styled from '@emotion/styled';
import { css } from "@emotion/core";
import tw from "twin.macro";

const FloatingHeaderWrapper = styled.div`
  ${tw`flex items-center fixed inset-y-0 inset-x-0 z-10 bg-black text-white`}
  ${tw`border-b-2 border-solid`}
  border-color: ${colors.yellow};
  height: 50px;

  /* Animation Effect */
  transition: all .5s cubic-bezier(.19,1,.22,1);
  transform: translate3d(0,-120%,0);
  ${({ isActive }) =>
    isActive && css`
      visibility: visible;
      transition: all .5s cubic-bezier(.22,1,.27,1);
      transform: translateZ(0);
    `
  }
  /* End animation effect */

  progress[value]::-moz-progress-bar,
  progress[value]::-webkit-progress-bar {
    background-color: ${colors.yellow};
  }
`;

const ProgressContainer = styled.progress`
  ${tw`absolute inset-x-0 w-full border-none bg-transparent appearance-none`}
  bottom: -1px;
  height: 3px;
`;

const PostTitleWrapper = styled.div`
  ${tw`overflow-hidden truncate flex-1 ml-4`}
`;

const FloatingHeader = ({ title, pathName }) => {
  const [isActive, setIsActive] = useState(false);
  const [currentScrollingPositionY, setCurrentScrollingPositionY] = useState(0);

  const updateScrollActivity = () => {
    const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const currentlyScrolledPercentage = (scrollTop / height) * 100;

    setIsActive(currentlyScrolledPercentage > 0);
    setCurrentScrollingPositionY(currentlyScrolledPercentage);
  };

  useEffect(() => {
    if (!document) return;
  
    window.addEventListener("scroll", updateScrollActivity);

    return () => {
      window.removeEventListener("scroll", updateScrollActivity);
      setIsActive(false);
      setCurrentScrollingPositionY(0);
    };
  }, []);

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
  pathName: PropTypes.string.isRequired
}

FloatingHeader.defaultProps = {
 title: ""
};