import { generateMedia } from "styled-media-query";

export const typography = {
  rootSize: 16,
};

export const fonts = {
  default: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif`,
};

const breakpoints = {
  xs: 320,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1280,
};

export const media = generateMedia({
  xs: `${breakpoints.xs}px`,
  sm: `${breakpoints.sm}px`,
  md: `${breakpoints.md}px`,
  lg: `${breakpoints.lg}px`,
  xl: `${breakpoints.xl}px`,
});

export const colours = {
  grey: "#ddd",
  danger: "red",
  success: "green",
};
