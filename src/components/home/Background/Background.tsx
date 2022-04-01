import { styled, Box } from "@mui/material";

export default styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: theme.palette.backgrounds.primary,
  // backgroundImage: "./bk_image.jpg", //todo
  minHeight: "100vh",
}));
