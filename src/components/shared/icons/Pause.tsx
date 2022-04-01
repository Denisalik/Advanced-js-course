import React from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

const Pause: React.FC<SvgIconProps> = ({ sx, ...props }) => (
  <SvgIcon sx={sx} viewBox="0 0 26 34" {...props}>
    <svg
      width="26"
      height="34"
      viewBox="0 0 26 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="8" height="34" rx="4" fill="#F9FAFF" />
      <rect x="18" width="8" height="34" rx="4" fill="#F9FAFF" />
    </svg>
  </SvgIcon>
);

export default Pause;
