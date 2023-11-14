import { globalCss } from ".";

export const GlobalStyles = globalCss({
  "*": {
    padding: 0,
    margin: 0,
    boxSizing: "border-box",
    outline: 0,
  },

  "body, input, button": {
    fontFamily: "Roboto, sans-serif",
    fontSize: "$md",
  },

  "h1,h2,h3,ul,li,a,p,img": {
    maxWidth: "100%",
    display: "block",
  },

  "li, a": {
    listStyle: "none",
    textDecoration: "none",
  },
});
