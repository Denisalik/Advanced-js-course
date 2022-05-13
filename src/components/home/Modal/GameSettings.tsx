import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import UserIcon from "../../shared/icons/UserIcon";
import BackgroundIcon from "../../shared/icons/BackgroundIcon";

interface GameSettingsProps {
  background: number;
  avatar: number;
  setAvatar: (avatar: number) => void;
  setBackground: (background: number) => void;
}

const GameSettings: React.FC<GameSettingsProps> = ({
  background,
  avatar,
  setBackground,
  setAvatar,
}) => (
  <Grid container flexDirection="column">
    <Grid item>
      <Typography variant="h5">Avatars</Typography>
    </Grid>
    <Grid item my={2}>
      <Grid container>
        {[...Array(6).keys()].map(i => (
          <Box
            key={i}
            sx={{
              ...(i === avatar
                ? {
                    borderRadius: "50%",
                    border: "1px solid",
                    borderColor: "red",
                  }
                : {}),
              width: "90px",
              height: "90px",
              padding: "5px",
            }}
          >
            <UserIcon
              sx={{
                width: "80px",
                height: "80px",
                cursor: "pointer",
              }}
              iconVariant={i + 1}
              onClick={() => setAvatar(i)}
            />
          </Box>
        ))}
      </Grid>
    </Grid>
    <Grid item>
      <Typography variant="h5">Playground Colors</Typography>
    </Grid>
    <Grid item my={2}>
      <Grid container>
        {[...Array(5).keys()].map(i => (
          <Box
            key={i}
            sx={{
              ...(i === background
                ? {
                    borderRadius: "50%",
                    border: "1px solid",
                    borderColor: "red",
                  }
                : {}),
              width: "90px",
              height: "90px",
              padding: "5px",
            }}
          >
            <BackgroundIcon
              sx={{
                width: "80px",
                height: "80px",
                cursor: "pointer",
              }}
              iconVariant={i + 1}
              onClick={() => setBackground(i)}
            />
          </Box>
        ))}
      </Grid>
    </Grid>
  </Grid>
);

export default GameSettings;
