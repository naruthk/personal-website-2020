export const colors = {
  white: "#fff",
  bgLight: "rgb(250, 250, 250)",
  grey: "rgb(34, 36, 38)",
  lightGrey: "#f9f9f9",
  mediumGrey: "#CCC",
  dark: "#1D2029",
  orange: "#fe520e",
  green: "#3aa95a",
  yellowDark: "#feae00",
  yellow: "#f6c004",
  darkBlue: "#0067cf",
  blue: "#2c71d7",
  lightBlue: "#46C9E5",
  border: "#C865B9",
};

/* TYPOGRAPHY */
export const fonts = {
  primary: `Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif`,
  code: "source-code-pro,Menlo,Monaco,Consolas,Courier New,monospace",
};

const breakpoints = [576, 768, 992, 1200];

export const mediaQuery = breakpoints.map(bp => `@media (min-width: ${bp}px)`);

/* TRANSITIONS */
export const transition = "0.7s all";
