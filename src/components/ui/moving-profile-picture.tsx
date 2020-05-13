import React, { useState, useEffect } from "react";

import WelcomeText from "../welcome-text";

import styled from '@emotion/styled';
import { css } from "@emotion/core";

const Wrapper = styled.div`
  margin: 20px;

  ${({ posX, posY }) => css`
    #movingElement {
      margin: auto;
      overflow-y: hidden;
      transform-style: preserve-3d;
      /* transform: perspective(100px) rotateY(${-posX}deg) rotateX(${posY}deg); */
    }
  `}
`;

const MovingProfilePicture = () => {
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);

  const APPLIED_FRICTION = 1/12;
  let lFollowX = 5;
  let lFollowY = 10;

  useEffect(() => {
    if (!document) return;

    window.addEventListener("mousemove", e => {
      const lMouseX = Math.max(-100, Math.min(100, window.innerWidth / 2 - e.clientX));
      const lMouseY = Math.max(-100, Math.min(100, window.innerHeight / 2 - e.clientY));
      lFollowX = (12 * lMouseX) / 100;
      lFollowY = (10 * lMouseY) / 100;

      setPosX(posX => posX += (lFollowX - posX) * APPLIED_FRICTION);
      setPosY(posY => posY += (lFollowY - posY) * APPLIED_FRICTION);
    });

    return () => {
      window.removeEventListener("mousemove", () => {
        setPosX(0);
        setPosY(0);
      });
    };
  }, []);

  return (
    <Wrapper posX={posX} posY={posY}>
      <div id="movingElement">{posX}</div>
    </Wrapper>
  )
};

export default MovingProfilePicture;
