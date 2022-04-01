import React from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

const Resume: React.FC<SvgIconProps> = ({ sx, ...props }) => (
  <SvgIcon sx={sx} viewBox="0 0 36 41" {...props}>
    <svg
      width="36"
      height="41"
      viewBox="0 0 36 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M34 17.0359C36.6667 18.5755 36.6667 22.4245 34 23.9641L6.25001 39.9856C3.58334 41.5252 0.250001 39.6007 0.250001 36.5215L0.25 4.47854C0.25 1.39934 3.58333 -0.525172 6.25 1.01443L34 17.0359Z"
        fill="#F9FAFF"
      />
    </svg>
  </SvgIcon>
);

export default Resume;
