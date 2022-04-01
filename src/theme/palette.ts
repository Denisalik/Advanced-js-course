import createPalette from "@mui/material/styles/createPalette";

const colors = {
  white: "#FFFFFF",
  black: "#000000",
  transparent: "transparent",

  blue1: "#18284F",
  blue2: "#60BEED",
  blue3: "#2E4677",
  yellow1: "#FFA726",
  red1: "#D32F2F",
  green1: "#66BB6A",
  gradient1: "linear-gradient(108.85deg, #1A2B52 -5.16%, #60BEEB 112.64%)",
  gray1: "#F9FAFF",
  gray2: "#6E7191",
  gray3: "#A0A3BD",

  gray4: "#263238",
};

export const palette = createPalette({
  common: {
    black: colors.black,
    white: colors.white,
  },
  texts: {
    primary: colors.gray4,
  },
  backgrounds: {
    primary: colors.blue1,
  },
  textField: {
    normal: { border: colors.gray2 },
    active: { border: colors.blue2 },
    hover: { border: colors.blue2 },
    // disabled: {
    //   border: colors.gray3,
    // },
  },
});
