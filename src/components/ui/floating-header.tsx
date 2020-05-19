import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Share from "../share/share";
import Logo from "../ui/logo";

import styled from '@emotion/styled';
import { css } from "@emotion/core";
import tw from "twin.macro";

const FloatingHeaderWrapper = styled.div`
  ${tw`flex items-center fixed inset-y-0 inset-x-0 z-10 bg-black text-white`}
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
`;

const ProgressContainer = styled.div`
  ${tw`absolute bottom-0 bg-red-400`}
  height: 3px;

  ${({ width }) =>
  width && css`
    width: ${width}%;
  `}
`;

const PostTitleWrapper = styled.div`
  ${tw`overflow-hidden truncate flex-1 ml-4 text-gray-300 text-sm sm:text-base`}
  ${tw`md:border-l-2 border-solid border-gray-900 md:pl-6`}
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
      <ProgressContainer width={currentScrollingPositionY} />
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