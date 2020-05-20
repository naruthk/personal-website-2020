import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import tw from "twin.macro";

import useIsScrollingHook from "../../hooks/use-is-scrolling";
import Share from "../share/share";

import Logo from "./logo";

const FloatingHeaderWrapper = styled.div`
  ${tw`flex items-center fixed inset-y-0 inset-x-0 z-10 bg-black text-white`}
  height: 50px;

  /* Animation Effect */
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  transform: translate3d(0, -120%, 0);
  ${({ isActive }) =>
    isActive &&
    css`
      visibility: visible;
      transition: all 0.5s cubic-bezier(0.22, 1, 0.27, 1);
      transform: translateZ(0);
    `}/* End animation effect */
`;

const ProgressContainer = styled.div`
  ${tw`absolute bottom-0 bg-red-400`}
  height: 3px;

  ${({ width }) =>
    width &&
    css`
      width: ${width}%;
    `}
`;

const PostTitleWrapper = styled.div`
  ${tw`overflow-hidden truncate flex-1 ml-4 text-gray-300 text-sm sm:text-base`}
  ${tw`md:border-l-2 border-solid border-gray-900 md:pl-6`}
`;

const FloatingHeader = ({ title, pathName }) => {
  const { isActive, scrolledPosition } = useIsScrollingHook();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (!document) return;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const percentagedScrolled = (scrolledPosition / height) * 100;
    setScrollProgress(percentagedScrolled);
  }, [scrolledPosition]);

  return (
    <FloatingHeaderWrapper isActive={isActive}>
      <Logo />
      <PostTitleWrapper>{title}</PostTitleWrapper>
      <Share isFloatingHeader pathName={pathName} />
      <ProgressContainer width={scrollProgress} />
    </FloatingHeaderWrapper>
  );
};

export default FloatingHeader;

FloatingHeader.propTypes = {
  title: PropTypes.string,
  pathName: PropTypes.string.isRequired,
};

FloatingHeader.defaultProps = {
  title: "",
};
