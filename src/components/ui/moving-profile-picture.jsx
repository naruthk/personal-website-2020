/* Inspired by this CodePen: https://codepen.io/lisilinhart/pen/jGzqLG */
import React, { useEffect } from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";

import { colors } from "../../utils/styles";
import ProfilePhoto from "../../images/profile_photo_naruth.svg";

const Wrapper = styled.div`
  ${tw`mt-12 md:mt-6 mr-auto ml-auto`}
  ${tw`relative w-full h-64`}

  #moving-frame {
    ${tw`hidden md:hidden lg:block w-full md:w-1/2`}
    ${tw`m-auto border-4 border-solid border-black`}
    ${tw`transition-all duration-500`}
    height: 90%; /* 100% will overflow */
    z-index: 2;
    box-shadow: 0px 0px 0px 40px ${colors.white};
    transform-style: preserve-3d;
    transform-origin: 50% 50%;
  }

  .profile-photo {
    ${tw`absolute`}
    left: 25%;
    width: 60%;
    height: 90%;
  }
`;

const MovingProfilePicture = () => {
  const calculateCoordinates = e => {
    const posX = (e.clientX / window.innerWidth - 0.5) * 2.1;
    const posY = (e.clientY / window.innerHeight - 0.5) * 2.1;

    if (window.innerWidth < 640) return; // disables animation for small screen

    const moveableObject = document.getElementById("moving-frame");

    if (!moveableObject) return;

    moveableObject.style.transform = `translateZ(10px) rotateY(calc(${posY} * 16deg)) rotateX(calc(${posX} * -16deg))`;
  };

  useEffect(() => {
    if (!document) return {};
    document.addEventListener("mousemove", calculateCoordinates);

    return () => window.removeEventListener("mousemove", calculateCoordinates);
  }, []);

  return (
    <Wrapper>
      <img className="profile-photo" src={ProfilePhoto} alt="Profile" />
      <div id="moving-frame" />
    </Wrapper>
  );
};

export default MovingProfilePicture;
