import { styled, Typography } from "@mui/material";
import React from "react";

const App: React.FC = () => {
  const Hello = styled(Typography)(() => ({
    color: "red",
  }));
  return <Hello>Hello world!</Hello>;
};

export default App;
