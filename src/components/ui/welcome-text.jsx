import React from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";

import TypeWritingText from "./typewriting-text";

const WelcomeTextWrapper = styled.section`
  .greeting {
    ${tw`lg:block tracking-wide uppercase font-bold text-lg xl:text-xl mb-4 opacity-75`}
  }
  .headline {
    ${tw`lg:block font-semibold text-left md:text-left text-3xl md:text-2xl lg:text-3xl xl:text-5xl leading-none mb-6`}
  }
  .tagline {
    ${tw`text-xl text-blue-200 md:text-left md:text-lg lg:text-xl xl:text-2xl leading-normal relative`}
    ${tw`-mx-4 sm:-ml-4 sm:mr-2 md:ml-0 md:px-6 md:py-4`}
    ${tw`lg:-ml-6`}
    ${tw`px-4 py-4`}
    ${tw`bg-blue-600 border-blue-200 border-b-8 md:rounded-md`}
  }
  .highlighted {
    ${tw`text-white font-semibold pl-1 pr-1 uppercase`}
  }
  .current-status {
    ${tw`block text-gray-900 leading-normal md:text-left text-base xl:text-lg font-semibold mb-6`}
  }
`;

const WelcomeText = () => (
  <WelcomeTextWrapper>
    <div className="greeting">Hello</div>
    <div className="headline">I&apos;m Naruth.</div>
    <p className="tagline">
      A Web Developer from Bangkok{" "}
      <span role="img" aria-label="thailand flag">
        🇹🇭
      </span>{" "}
      on an endless journey to <span className="highlighted">create</span>,{" "}
      <span className="highlighted">inspire</span>, and{" "}
      <span className="highlighted">bridge the gap</span> between{" "}
      <span className="highlighted">people and technology</span>.
    </p>
    <div>
      Currently deep diving into:{" "}
      <span className="current-status">
        <TypeWritingText>
          JavaScript, React.js, Next.js{" "}
          <span role="img" aria-label="fire emoji">
            🔥
          </span>{" "}
          <span role="img" aria-label="guitar emoji">
            🎸
          </span>
        </TypeWritingText>
      </span>
    </div>
  </WelcomeTextWrapper>
);

export default WelcomeText;
