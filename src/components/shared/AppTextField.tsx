import React from "react";
import { TextField, TextFieldProps } from "@mui/material";

interface AppTextFieldProps
  extends Pick<TextFieldProps, "label" | "disabled" | "error"> {}

const AppTextField: React.FC<AppTextFieldProps> = ({
  label,
  disabled,
  error,
}) => (
  <TextField
    label={label}
    disabled={disabled}
    error={error}
    variant="outlined"
  />
);
export default AppTextField;
