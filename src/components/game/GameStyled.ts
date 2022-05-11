import { styled, Box } from "@mui/material";

interface BoardProps {
  $width?: number;
  $height?: number;
  $y: number;
}

export const Board = styled(Box)<BoardProps>(
  ({ theme, $y, $width = 20, $height = 150 }) => ({
    width: $width,
    height: $height,
    top: $y / $height,
    position: "absolute",

    // todo use theme
    background: "#60BEED",
  })
);
