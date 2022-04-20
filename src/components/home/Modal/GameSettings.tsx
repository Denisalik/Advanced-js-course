import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import AppTextField from "../../shared/AppTextField/AppTextField";
import UserIcon from "../../shared/icons/UserIcon";

const GameSettings = () => {
  const [avatar, setAvatar] = React.useState(0);
  const [background, setBackground] = React.useState(0);
  return (
    <Grid container flexDirection="column">
      <Grid item>
        <Typography variant="h5">Avatars</Typography>
      </Grid>
      <Grid item my={2}>
        {[...Array(6).keys()].map(i =>
          i === avatar ? (
            <Box
              sx={{
                borderRadius: "50%",
                border: "1px solid",
                borderColor: "red",
                width: "90px",
                height: "90px",
                padding: "5px",
                marginRight: "50px",
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
          ) : (
            <UserIcon
              sx={{
                width: "80px",
                height: "80px",
                marginRight: "50px",
                cursor: "pointer",
              }}
              iconVariant={i + 1}
              onClick={() => setAvatar(i)}
            />
          )
        )}
      </Grid>
      <Grid item>
        <Typography variant="h5">Playground Colors</Typography>
      </Grid>
      <Grid item my={2}>
        {background}
      </Grid>
    </Grid>
  );
};

export default GameSettings;
