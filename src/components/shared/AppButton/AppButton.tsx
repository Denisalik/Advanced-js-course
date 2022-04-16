import React from "react";
import { Button, ButtonProps } from "@mui/material";

type AppButtonProps = Pick<ButtonProps, "disabled" | "sx" | "onClick">;

const AppButton: React.FC<AppButtonProps> = ({
  disabled,
  onClick,
  children,
  sx,
}) => (
  <Button
    sx={{
      background: "linear-gradient(108.85deg, #1A2B52 -5.16%, #60BEEB 112.64%)",
      color: "white",
      ...sx,
    }}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </Button>
  //todo change colors to theme
);

export default AppButton;
