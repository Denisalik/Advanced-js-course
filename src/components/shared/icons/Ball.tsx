import React from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

const Ball: React.FC<SvgIconProps> = ({ sx, ...props }) => (
  <SvgIcon sx={sx} viewBox="0 0 34 34" {...props}>
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 34C26.3888 34 34 26.3888 34 17C34 7.61116 26.3888 0 17 0C7.61116 0 0 7.61116 0 17C0 26.3888 7.61116 34 17 34Z"
        fill="#60BEED"
      />
      <path
        d="M33.9988 16.999C33.9988 26.3876 26.3887 34.0005 17.0001 34.0005C12.2291 34.0005 7.91753 32.0354 4.8335 28.8705C7.24954 30.19 10.0191 30.9385 12.9641 30.9385C22.3527 30.9385 29.9628 23.3258 29.9628 13.937C29.9628 9.31642 28.1202 5.12449 25.1251 2.06277C30.4108 4.94654 33.9988 10.5524 33.9988 16.999Z"
        fill="#3D7B99"
      />
    </svg>
  </SvgIcon>
);

export default Ball;
