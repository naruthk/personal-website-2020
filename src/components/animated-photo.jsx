import React from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";

const ContainerWrapper = styled.section`
  ${tw`mt-20`}

  .spacer {
    height: 30vh;
  }
`;

// const images = [
//   "http://scrollmagic.io/assets/img/example_imagesequence_01.png",
//   "http://scrollmagic.io/assets/img/example_imagesequence_02.png",
//   "http://scrollmagic.io/assets/img/example_imagesequence_03.png",
//   "http://scrollmagic.io/assets/img/example_imagesequence_04.png",
//   "http://scrollmagic.io/assets/img/example_imagesequence_05.png",
//   "http://scrollmagic.io/assets/img/example_imagesequence_06.png",
//   "http://scrollmagic.io/assets/img/example_imagesequence_07.png"
// ];

const AnimatedPhoto = () => {
  return (
    <ContainerWrapper>
      <h1>Animated Photo</h1>
      <div className="spacer" />
    </ContainerWrapper>
  );
};

export default AnimatedPhoto;
