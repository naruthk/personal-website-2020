/**
 * Credit to Daniel Österman for the SVG waves animation
 * https://codepen.io/goodkatz/pen/LYPGxQz
 */

import React from "react";
import PropTypes from "prop-types";

import styled from '@emotion/styled';

const WavesWrapper = styled.div`
  .waves {
    position:relative;
    width: 100%;
    height: 15vh;
    margin-bottom: -7px; /*F ix for safari gap */
    min-height: 100px;
    max-height: 150px;
  }
  .parallax > use {
    animation: move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite;
  }
  .parallax > use:nth-of-type(1) {
    animation-delay: -2s;
    animation-duration: 7s;
  }
  .parallax > use:nth-of-type(2) {
    animation-delay: -3s;
    animation-duration: 10s;
  }
  .parallax > use:nth-of-type(3) {
    animation-delay: -4s;
    animation-duration: 13s;
  }
  .parallax > use:nth-of-type(4) {
    animation-delay: -5s;
    animation-duration: 20s;
  }
  @keyframes move-forever {
    0% {
    transform: translate3d(-90px,0,0);
    }
    100% { 
      transform: translate3d(85px,0,0);
    }
  }
  @media (max-width: 768px) {
    .waves {
      height:40px;
      min-height:40px;
    }
  }
`;

const Waves = ({ colorsShading }) => (
  <WavesWrapper>
    <svg
      className="waves"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28"
      preserveAspectRatio="none"
      shapeRendering="auto">
      <defs>
        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
      </defs>
      <g className="parallax">
        <use xlinkHref="#gentle-wave" x="48" y="0" fill={colorsShading[3]} />
        <use xlinkHref="#gentle-wave" x="48" y="3" fill={colorsShading[2]}/>
        <use xlinkHref="#gentle-wave" x="48" y="5" fill={colorsShading[1]} />
        <use xlinkHref="#gentle-wave" x="48" y="7" fill={colorsShading[0]} />
      </g>
    </svg>
  </WavesWrapper>
);

export default Waves;

Waves.propTypes = {
  colorsShading: PropTypes.array,
}

Waves.defaultProps = {
  colorsShading: [
    "#fff",
    "rgb(245,245,245)",
    "rgb(216,216,216)",
    "rgb(167,167,167)"
  ]
};