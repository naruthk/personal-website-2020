import css from '@emotion/css';
import { fonts, colors, responsiveFontSizes, mediaQuery } from "./constants";

export const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;700;900&display=swap');

  html, body {
    margin: 0px;
    padding: 0px;
    color: ${colors.grey};
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${colors.bgLight};
  }

  html {
    font-family: Inter,${fonts.primary};
    font-size: 100%;
  }

  code {
    font-family: ${fonts.code};
  }

  * {
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: auto !important;
  }

  #___gatsby > div {
    display: flex;
    flex-direction: column;
  }

  a, a:visited {
    color: ${colors.dark};
    font-weight: 700;
    text-decoration: none;
  }

  a:hover {
    color: ${colors.orange};
  }

  hr {
    margin: 10px 0;
    ${mediaQuery[2]} {
      margin: 50px 0;
    };
    border: none;
    border-top: 1px solid ${colors.lightGrey};
    background:none;
  }

  button {
    border-radius: 4px;
    background-color: ${colors.green};
    border: none;
    color: ${colors.white};
    padding: 10px 15px;
    border: 1px solid ${colors.green};
    :hover {
      background: ${colors.blue};
      border: 1px solid ${colors.blue};
    }
  }

  /**
    TYPOGRAPHY
   */
  h1, h2, h3, h4, h5, h6, p {
    margin-top: 0;
  }

  h1 {
    font-size: ${responsiveFontSizes.large};
  }
  h2 {
    font-size: ${responsiveFontSizes.medium};
  }
  h3 {
    font-size: ${responsiveFontSizes.normal};
    font-weight: 500;
  }

  p {
    font-size: ${responsiveFontSizes.normal};
    line-height: 1.7em;
  }

  ${mediaQuery[2]} {
    h1 {
      font-size: ${responsiveFontSizes.xlarge};
      letter-spacing: -0.033em;
    }
    h2 {
      font-size: ${responsiveFontSizes.large};
    }
    h3 {
      font-size: ${responsiveFontSizes.medium};
    }
  }

  .react-icons {
    vertical-align: middle;
  }

  img {
    width: 100%;
  }
  
  ::-moz-selection, ::selection {
    color: ${colors.white};
    background: ${colors.yellowDark};
    -webkit-background-clip: unset;
    -webkit-text-fill-color: ${colors.white};
  }

  /* Prism.js */
  pre {
    padding: 20px 24px;
    border-bottom: 10px solid ${colors.yellow};
    border-radius: 10px;
    code {
      font-size: 12px !important;
    }
  }
`;