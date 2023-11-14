import { styled, keyframes } from "..";

const AnimateUp = keyframes({
  from: {
    transform: "translate3d(0, -20px, 0)",
    opacity: 0,
  },
  to: {
    transform: "translate3d(0, 0px, 0)",
    opacity: 1,
  },
});

const AnimateLeft = keyframes({
  from: {
    transform: "translate3d(-30px, 0, 0)",
    opacity: 0,
  },
  to: {
    transform: "translate3d(0px, 0, 0)",
    opacity: 1,
  },
});

const AnimateDown = keyframes({
  from: {
    transform: "translate3d(0, 100px, 0)",
    opacity: 0,
  },
  to: {
    transform: "translate3d(0, 0px, 0)",
    opacity: 1,
  },
});

export const Container = styled("section", {
  display: "grid",
  gridTemplateColumns: "2fr 1fr",
  height: "100%",
});

export const Left = styled("aside", {
  padding: "16px 32px",

  height: "100%",
});

export const Right = styled("main", {
  padding: "16px 32px",
  background: "linear-gradient(to top, #EAEEF4 50%, #fff)",
  "&:hover .product-modal": {
    animation: `${AnimateDown} 0.4s forwards`,
  },

  ".current-poster": {
    display: "none",
  },

  ".active": {
    display: "block",
  },

  ".animate-up": {
    animation: `${AnimateUp} 0.84s forwards`,
  },

  ".animate-left": {
    animation: `${AnimateLeft} 0.84s forwards`,
  },
});

export const Intro = styled("div", {
  marginTop: 32,

  span: {
    display: "block",
    fontSize: "$sm",
    color: "#111",

    padding: "12px 0",
  },

  h1: {
    fontSize: "$lg",
    fontWeight: "900",

    textTransform: "capitalize",
    color: "#1c1c1c",

    lineHeight: 1.5,
    padding: "18px 0",
  },

  p: {
    maxWidth: "460px",
    paddingBottom: "18px",
    color: "#c9c9c9",

    fontSize: "$sm",
    lineHeight: 1.5,
  },

  ".explorer": {
    border: "2px solid transparent",
    width: "160px",
    padding: "12px 0",

    fontSize: "$md",
    fontWeight: "bold",
    background: "#111",
    color: "#fff",

    cursor: "pointer",
    marginRight: "20px",

    borderRadius: "4px",
    transition: "0.3s ease-in-out",

    "&:hover": {
      filter: "brightness(0.9)",
      background: "#222",
    },
  },

  ".learn-more": {
    border: "2px solid #111",
    width: "160px",
    padding: "12px 0",

    fontSize: "$md",
    fontWeight: "bold",
    color: "#111",

    cursor: "pointer",
    marginRight: "20px",

    borderRadius: "4px",
    transition: "0.3s ease-in-out",

    background: "transparent",

    "&:hover": {
      filter: "brightness(0.9)",
    },
  },
});

export const Header = styled("header", {
  display: "flex",
  alignItems: "center",
  gap: "1rem",
});

export const Title = styled("h1", {
  fontSize: "$lg",
  fontWeight: 700,
  color: "#222",
});

export const Navigation = styled("nav", {
  ul: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  li: {
    margin: "0 1rem",
  },

  a: {
    fontWeight: "400",
    fontSize: "$sm",
    padding: "16px 18px",
    color: "#c2c2c2",

    transition: ".3s ease-in-out",

    "&:hover": {
      color: "#222",
    },
  },
});

export const Menu = styled("nav", {
  ul: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  li: {
    marginRight: "1rem",
  },

  a: {
    fontWeight: "400",
    fontSize: "$sm",
    padding: "16px 18px",
    color: "#c2c2c2",

    transition: ".3s ease-in-out",

    "&:hover": {
      color: "#222",
    },
  },
});

export const Poster = styled("div", {
  margin: "25px 0",
  position: "relative",
  cursor: "pointer",

  img: {
    objectFit: "cover",
    borderRadius: "4px",
  },

  ".product-modal": {
    position: "absolute",
    width: "100%",
    marginTop: "1.25rem",
    opacity: 0,
  },

  ".buy-now": {
    border: "2px solid #111",
    width: "100%",
    padding: "12px 0",

    fontSize: "$md",
    fontWeight: "bold",
    color: "#111",

    cursor: "pointer",
    marginRight: "20px",

    borderRadius: "4px",
    transition: "0.3s ease-in-out",

    background: "transparent",

    "&:hover": {
      background: "#111",
      color: "#fff",
    },
  },
});

export const Products = styled("div", {
  margin: "50px 0",
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(160px, 220px))",
  gap: "1rem",
});

export const Product = styled("div", {
  cursor: "pointer",
  marginBottom: "1rem",

  img: {
    objectFit: "cover",
    borderRadius: 8,
  },

  ".info-title": {
    fontSize: "$md",
    fontWeight: "700",
    color: "#111",
    padding: "8px 0",
    letterSpacing: "2px",
  },

  a: {
    fontSize: "12px",
    fontWeight: "700",
    color: "#c2c2c2",
  },
});
