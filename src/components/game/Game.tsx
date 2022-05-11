import React from "react";
import { Grid } from "@mui/material";
import { KeyboardKeys } from "../../lib/socket/types";
import { useAppActions, useAppSelector } from "../../lib/hooks";
import Canvas from "./canvas/Canvas";

const Game: React.FC = () => {
  const { player } = useAppSelector(state => state.game);
  const { changeDirection, movePlayer } = useAppActions();
  React.useEffect(() => {
    window.addEventListener("keydown", e => {
      if (player.direction) return;
      switch (e.key) {
        case KeyboardKeys.Up:
          changeDirection(1);
          break;
        case KeyboardKeys.Down:
          changeDirection(-1);
          break;
        default:
          break;
      }
    });
    window.addEventListener("keyup", e => {
      if (e.key === KeyboardKeys.Up || e.key === KeyboardKeys.Down) {
        changeDirection(0);
      }
    });
  }, []);
  return (
    <Grid container justifyContent="center" sx={{ width: "100%" }}>
      <Canvas move={movePlayer} />
    </Grid>
  );
};

export default Game;
