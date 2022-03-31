import { TypeBackground } from "@mui/material/styles/createPalette";

// palette interfaces
interface ItemColors {
  background?: string;
  border?: string;
  color?: string;
}

interface ItemCondition {
  normal: ItemColors;
  hover: ItemColors;
  active: ItemColors;
  error?: ItemColors;
  disabled?: ItemColors;
}

interface TextType {
  primary: string;
}

interface ButtonType {
  primary: ItemCondition;
  primaryLight: ItemCondition;
  secondary: ItemCondition;
  tertiary: ItemCondition;
  dropdown: ItemCondition;
  expand: ItemCondition;
  expandText: ItemCondition;
  unfilled: ItemCondition;
  collapse: ItemCondition;
  valueCount: ItemCondition;
}

interface BackgroundType extends TypeBackground {
  primary: string;
  secondary: string;
  darken: string;
}

declare module "@mui/material/styles" {
  interface Palette {
    button: ButtonType;
    backgrounds: Partial<BackgroundType>;
    texts: TextType;
    textField: ItemCondition;
  }
  interface PaletteOptions {
    button?: ButtonType;
    backgrounds?: Partial<BackgroundType>;
    texts?: TextType;
    textField?: ItemCondition;
  }
}

// // typography interfaces
// declare module "@mui/material/styles/createTypography" {
//   interface Typography {
//     errorCode: TypographyStyle;
//   }
//   interface TypographyOptions {
//     errorCode?: TypographyStyleOptions;
//   }
// }
// declare module "@mui/material/Typography/Typography" {
//   interface TypographyPropsVariantOverrides {
//     errorCode: true;
//   }
// }
