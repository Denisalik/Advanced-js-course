import { Palette } from "@mui/material";
import createTypography from "@mui/material/styles/createTypography";
import { palette } from "./palette";

// export const { pxToRem } = createTypography(palette as Palette, {});
// https://mui.com/customization/typography/
export const typography = createTypography(palette as Palette, {
  h1: {
    fontFamily: "'Josefin Sans', sans-serif",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 72, // in px
    color: palette.texts.primary,
    letterSpacing: 0,
  },
  h2: {
    fontFamily: "Josefin Sans",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 60,
    color: palette.texts.primary,
    letterSpacing: 0,
  },
  h3: {
    fontFamily: "'Josefin Sans', sans-serif",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 52,
    color: palette.texts.primary,
    letterSpacing: 0,
  },
  h4: {
    fontFamily: "Josefin Sans",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 40,
    color: palette.texts.primary,
    letterSpacing: 0,
  },
  h5: {
    fontFamily: "Josefin Sans",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 32, // in px
    color: palette.texts.primary,
    letterSpacing: "0.5px",
  },
  h6: {
    fontFamily: "Josefin Sans",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 20, // in px
    color: palette.texts.primary,
    letterSpacing: "0.5px",
  },
});
