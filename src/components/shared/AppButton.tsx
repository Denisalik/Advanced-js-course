import React from "react";
import { Button, ButtonProps } from "@mui/material";

interface AppButtonProps extends Pick<ButtonProps, "disabled"> {}

const AppButton: React.FC<AppButtonProps> = ({ disabled, children }) => (
  <Button disabled={disabled}>{children}</Button>
);

export default AppButton;
