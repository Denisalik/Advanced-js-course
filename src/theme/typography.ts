import { Palette } from "@mui/material";
import createTypography from "@mui/material/styles/createTypography";
import { palette } from "./palette";

// export const { pxToRem } = createTypography(palette as Palette, {});
// https://mui.com/customization/typography/
export const typography = createTypography(palette as Palette, {
  h1: {
    fontFamily: "Josefin Sans",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 72, // in px
    lineHeight: 72, // todo do we need this or we need to convert it to rem?
    color: palette.texts.primary,
    // letterSpacing: 0 //todo do we need this or this is default?
  },
  h2: {
    fontFamily: "Josefin Sans",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 60, // in px
    lineHeight: 60,
    color: palette.texts.primary,
  },
  h3: {
    fontFamily: "Josefin Sans",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 52, // in px
    lineHeight: 52,
    color: palette.texts.primary,
  },
  h4: {
    fontFamily: "Josefin Sans",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 40, // in px
    lineHeight: 40,
    color: palette.texts.primary,
  },
  h5: {
    fontFamily: "Josefin Sans",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 32, // in px
    lineHeight: 32,
    color: palette.texts.primary,
    // letterSpacing: 0.5 //in px todo do we need this?(check figma)
  },
  h6: {
    fontFamily: "Josefin Sans",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 20, // in px
    lineHeight: 20,
    color: palette.texts.primary,
    // letterSpacing: 0.5 //in px todo do we need this?(check figma)
  },
});
