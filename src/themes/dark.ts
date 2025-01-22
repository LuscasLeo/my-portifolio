import { createTheme } from "@mui/material";

const colors = {
  "primary-100": "#673ab7",
  "primary-200": "#7a4fbf",
  "primary-300": "#8c64c8",
  "primary-400": "#9d79d0",
  "primary-500": "#ae8fd8",
  "primary-600": "#bfa5e0",
  "surface-100": "#121212",
  "surface-200": "#282828",
  "surface-300": "#3f3f3f",
  "surface-400": "#575757",
  "surface-500": "#717171",
  "surface-600": "#8b8b8b",
  "surface-mixed-100": "#231b2f",
  "surface-mixed-200": "#383043",
  "surface-mixed-300": "#4e4658",
  "surface-mixed-400": "#655e6e",
  "surface-mixed-500": "#7d7784",
  "surface-mixed-600": "#95909c",
};

export default createTheme({
  typography: {
    fontFamily: "Inter, serif",
  },
  palette: {
    mode: "dark",
    primary: {
      main: colors["surface-mixed-600"],
      "100": colors["surface-mixed-100"],
      "200": colors["surface-mixed-200"],
      "300": colors["surface-mixed-300"],
      "400": colors["surface-mixed-400"],
      "500": colors["surface-mixed-500"],
      "600": colors["surface-mixed-600"],
    },
    secondary: {
      main: colors["surface-mixed-500"],

      "100": colors["surface-mixed-100"],
      "200": colors["surface-mixed-200"],
      "300": colors["surface-mixed-300"],
      "400": colors["surface-mixed-400"],
      "500": colors["surface-mixed-500"],
      "600": colors["surface-mixed-600"],
    },
    background: {
      default: colors["surface-mixed-100"],
      paper: colors["surface-mixed-200"],
    },
    text: {
      primary: "#fff",
      secondary: "#fff",
    },
  },
});
