import React from "react";
import { TextFieldProps } from "@mui/material";
import AppTextFieldStyled from "./AppTextFieldStyled";

type AppTextFieldProps = Pick<
  TextFieldProps,
  | "label"
  | "disabled"
  | "color"
  | "sx"
  | "onChange"
  | "value"
  | "error"
  | "helperText"
  | "type"
>;

const AppTextField: React.FC<AppTextFieldProps> = ({
  label,
  disabled,
  error,
  color,
  sx,
  value,
  onChange,
  helperText,
  type,
}) => (
  <AppTextFieldStyled
    type={type}
    label={label}
    disabled={disabled}
    error={error}
    variant="outlined"
    color={color}
    sx={sx}
    value={value}
    onChange={onChange}
    helperText={helperText}
  />
);
export default AppTextField;
