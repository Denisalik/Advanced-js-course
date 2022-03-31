import React from "react";
import { TextFieldProps } from "@mui/material";
import AppTextFieldStyled from "./AppTextFieldStyled";

interface AppTextFieldProps
  extends Pick<TextFieldProps, "label" | "disabled" | "error" | "color"> {}

const AppTextField: React.FC<AppTextFieldProps> = ({
  label,
  disabled,
  error,
  color,
}) => (
  <AppTextFieldStyled
    label={label}
    disabled={disabled}
    error={error}
    variant="outlined"
    color={color}
  />
);
export default AppTextField;
