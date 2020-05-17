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
    ${tw`text-base leading-relaxed mb-6 break-words`}
  }
  p, ol, li, ul {
    ${tw`text-gray-800 font-light`}
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
    ${tw`pl-8 mt-8 mb-8`}
    border-left: 5px solid ${colors.yellowDark};
  }
  hr {
    ${tw`mt-8 mb-8 md:mt-12 md:mb-12 border-none`}
    border: none;
    border-top: 1px solid ${colors.lightGrey};
  }
  ::-moz-selection, ::selection {
    ${tw`text-white`}
    background: ${colors.yellowDark};
    -webkit-background-clip: unset;
    -webkit-text-fill-color: ${colors.white};
  }

  /*  LAYOUT */
  img {
    ${tw`mx-auto block max-w-full`}
  }
  
  
  /* MISCELLANEOUS ITEMS */
  .react-icons {
    vertical-align: middle;
  }
  .gatsby-highlight {
    ${tw`mb-6`}
  }
  pre { /* Pair with Prism.js */
    border-bottom: 10px solid ${colors.yellow};
    border-radius: 10px;
    code {
      font-size: 12px !important;
    }
  }
  code.language-text { /* Override prism's default */
    background-color: ${colors.mediumGrey} !important;
    padding: 1px 5px !important;
    margin: 0 2px;
    vertical-align: middle;
    color: ${colors.dark};
    overflow-wrap: break-word;
    word-wrap: break-word;
    border-radius: .2rem;
  }
`;