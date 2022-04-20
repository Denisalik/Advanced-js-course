import React from "react";
import { Grid, Paper, Tab, Tabs, Typography } from "@mui/material";
import AccountSettings from "./AccountSettings";
import GameSettings from "./GameSettings";

const Modal: React.FC = () => {
  const [page, setPage] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newPage: number) => {
    setPage(newPage);
  };
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Grid item>
        <Paper
          elevation={1}
          sx={{
            width: "500px",
            height: "600px",
            padding: "0 30px 30px 30px",
          }}
        >
          <Grid container alignItems="center" flexDirection="column">
            <Grid item my={2}>
              <Tabs value={page} onChange={handleChange}>
                <Tab
                  label={<Typography variant="h6">Account Settings</Typography>}
                />
                <Tab
                  label={<Typography variant="h6">Game Settings</Typography>}
                />
              </Tabs>
            </Grid>
            <Grid item>
              {page === 0 ? <AccountSettings /> : <GameSettings />}
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Modal;
