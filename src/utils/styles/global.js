import css from '@emotion/css';
import tw from "twin.macro";

import {fonts, colors } from "./constants";

export const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;700;900&display=swap');

  /* Overall Typography */
  body {
    font-family: ${fonts.primary};
  }
  h1, h2, h3, h4, h5, h6 {
    ${tw`mb-4`}
  }
  h1 {
    ${tw`text-3xl font-semibold`}
  }
  h2 {
    ${tw`text-2xl font-medium mt-12 mb-6`}
  }
  h3 {
    ${tw`text-xl font-medium mt-8`}
  }
  p {
    ${tw`leading-relaxed mb-6 break-words`}
  }
  p, ol, li, ul {
    ${tw`text-gray-700 text-base`}
  }
  li {
    ${tw`mb-2`}
  }
  ul, ol {
    ${tw`mt-4 mb-4`}
  }
  ol {
    ${tw`list-decimal`}
  }
  ul {
    ${tw`list-disc`}
  }
  li {
    ${tw`ml-8 pl-2`}
  }
  a, a:visited {
    ${tw`no-underline text-gray-800 font-medium`}
  }
  blockquote {
    ${tw`pl-8 mt-8 mb-8 border-l-4 border-solid border-yellow-400`}
  }
  hr {
    ${tw`mt-8 mb-8 md:mt-12 md:mb-12 border-t-2 border-solid border-gray-100`}
  }

  /*  LAYOUT */
  img {
    ${tw`mx-auto block max-w-full`}
  }
  
  
  /* MISCELLANEOUS ITEMS */
  ::-moz-selection, ::selection {
    ${tw`text-white bg-blue-400`}
    -webkit-background-clip: unset;
    -webkit-text-fill-color: ${colors.white};
  }

  .react-icons {
    ${tw`align-middle`}
  }

  /* Override Prism's styling */
  .gatsby-highlight {
    ${tw`mb-6 lg:-mx-4`}
  }
  pre {
    ${tw`border-b-8 border-solid border-yellow-400 rounded-lg`}
    code {
      font-size: 14px !important;
    }
  }
  p > code.language-text { /* for markdown content outside Prism */
    ${tw`mx-0 my-2 align-middle text-yellow-900 text-sm rounded-sm break-words`}
    ${tw`bg-yellow-100 border-b-2 border-yellow-400`}
    ${tw`px-2 py-1`}
  }
`;