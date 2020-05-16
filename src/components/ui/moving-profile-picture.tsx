/* Inspired by this CodePen: https://codepen.io/lisilinhart/pen/jGzqLG */

import React, { useEffect } from "react";

import { colors, mediaQuery } from "../../utils/styles";

import styled from '@emotion/styled';

import ProfilePhoto from "../../images/profile_photo_naruth.svg";

const Wrapper = styled.div`
  margin: 50px auto 10px auto;
  position: relative;
  width: 100%;
  height: 60vmin;
  ${mediaQuery[2]} {
	  width: 70vmin;
    height: 355px;
  }
  max-height: 600px;
	perspective: 1900px;

  @keyframes float {
    0%   { transform: rotateY(0); }
    25%  { transform: rotateY(15deg); }
    50%  { transform: rotateY(20deg); }
    75%  { transform: rotateY(15deg); }
    100% { transform: rotateY(0); }
  }

  #movable_object {
    width: 60%;
    ${mediaQuery[2]} {
      width: 60%;
    }
    height: 90%;
    margin: auto;
    
    border: 10px solid ${colors.dark};
    box-shadow: 0px 0px 0px 80px ${colors.bgLight};
    box-sizing: border-box;
    
    ${mediaQuery[2]} {
      transform-origin: 50% 50%;
      transform-style: preserve-3d;
    }
    z-index: 2;
  }

  #svg_object {
    position: absolute;
    left: 25%;
    width: 58%;
    height: 90%;
    ${mediaQuery[2]} {
      height: auto;
      bottom: 20px;
      animation: float 7s infinite;
      -moz-animation: float 7s infinite;
      -webkit-animation: float 7s infinite;
      -o-animation: float 7s infinite;
      transform-style: preserve-3d;
      transform: translateZ(-50px);
    }
  }
`;

const MovingProfilePicture = () => {
  const calculateCoordinates = e => {
    const posX = ((e.clientX / window.innerWidth) - 0.5) * 2.1;
    const posY = ((e.clientY / window.innerHeight) - 0.5) * 2.1;

    const moveableObject = document.getElementById('movable_object');

    if (!moveableObject) return;

    moveableObject.style.transform = `translateZ(10px) rotateY(calc(${posY} * 16deg)) rotateX(calc(${posX} * -16deg))`;
  };

  useEffect(() => {
    if (!document) return;
    document.addEventListener('mousemove', calculateCoordinates);

    return () => {
      window.removeEventListener("mousemove", calculateCoordinates);
    };
  }, []);

  return (
    <Wrapper>
      <img id="svg_object" src={ProfilePhoto} alt="Profile Photo" />
      <div id="movable_object"></div>
    </Wrapper>
  )
};

export default MovingProfilePicture;
