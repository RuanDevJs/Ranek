import { createStitches } from "@stitches/react";

export const { config, styled, css, getCssText, globalCss, keyframes } =
  createStitches({
    theme: {
      fontSizes: {
        sm: "0.875",
        md: "1rem",
        lg: "2rem",
      },
    },
  });
