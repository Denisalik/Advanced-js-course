import React, { useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { Board } from "./GameStyled";
import Ball from "../shared/icons/Ball";

const Game: React.FC = () => {
  //connect to socket
  useEffect(() => {}, []);
  return (
    <>
      <Ball
        sx={{
          position: "absolute",
          left: "40%",
          top: "50%",
          width: "34px",
          height: "34px",
        }}
      />
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        sx={{ background: "white", height: "600px" }}
      >
        <Board />
        <Box
          sx={{
            border: "none",
            borderLeft: "4px dashed #60BEED", //todo theme
            height: "100%",
          }}
        />
        <Board />
      </Grid>
    </>
  );
};

export default Game;
