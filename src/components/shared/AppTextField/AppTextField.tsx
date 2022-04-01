import React from "react";
import { TextFieldProps } from "@mui/material";
import AppTextFieldStyled from "./AppTextFieldStyled";

// interface AppTextFieldProps
//   extends Pick<TextFieldProps, "label" | "disabled" | "error" | "color"> {}
type AppTextFieldProps = Pick<
  TextFieldProps,
  "label" | "disabled" | "error" | "color" | "sx"
>;

const AppTextField: React.FC<AppTextFieldProps> = ({
  label,
  disabled,
  error,
  color,
  sx,
}) => (
  <AppTextFieldStyled
    label={label}
    disabled={disabled}
    error={error}
    variant="outlined"
    color={color}
    sx={sx}
  />
);
export default AppTextField;
