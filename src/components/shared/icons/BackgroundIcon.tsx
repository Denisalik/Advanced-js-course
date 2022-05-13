import React from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";
import { backgroundVariants } from "../../../lib/constants";

interface BackgroundIconProps extends SvgIconProps {
  iconVariant: number;
}

/**
 * Icon for user
 * @param sx
 * @param   {number} iconVariant variant from 1 to 5
 * @param props
 */
const BackgroundIcon: React.FC<BackgroundIconProps> = ({
  sx,
  iconVariant,
  ...props
}) => (
  <SvgIcon sx={sx} viewBox="0 0 60 60" {...props}>
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill={backgroundVariants[iconVariant - 1]}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="30" cy="30" r="30" />
    </svg>
  </SvgIcon>
);

export default BackgroundIcon;
