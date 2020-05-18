import React from "react";

import TypeWritingText from "./typewriting-text";

import styled from "@emotion/styled";
import tw from "twin.macro";

const WelcomeTextWrapper = styled.section`
  .greeting {
    ${tw`lg:block tracking-wide uppercase font-bold text-lg xl:text-xl mb-4 opacity-75`}
  }
  .headline {
    ${tw`lg:block font-semibold text-left md:text-left text-3xl md:text-2xl lg:text-3xl xl:text-5xl leading-none mb-6 xl:mb-8`}
  }
  .tagline {
    ${tw`text-xl md:text-left md:text-lg lg:text-xl xl:text-2xl text-gray-800 leading-normal relative`}
  }
  .current-status {
    ${tw`block text-gray-900 leading-normal md:text-left text-base xl:text-lg font-semibold mb-6`}
  }
  .highlighted {
    ${tw`text-gray-900 font-semibold pl-1 pr-1 uppercase`}
  }
`;

const WelcomeText = () => (
  <WelcomeTextWrapper>
    <div className="greeting">Hello</div>
    <div className="headline">I'm Naruth.</div>
    <p className="tagline">
      I'm a Web Developer from Bangkok <span role="img" aria-label="thailand flag">🇹🇭</span> on an endless journey to <span className="highlighted">learn</span>, <span className="highlighted">create</span>, and <span className="highlighted">bridge the gap</span> between <span className="highlighted">people and technology</span>.</p>
    <div>Currently coding using: <span className="current-status">
      <TypeWritingText>JavaScript, React.js, Next.js <span role="img" aria-label="fire emoji">🔥</span> <span role="img" aria-label="guitar emoji">🎸</span></TypeWritingText></span>
    </div>
  </WelcomeTextWrapper>
);

export default WelcomeText;
