import React from "react";
import { Grid, Paper, Tab, Tabs } from "@mui/material";
import SignIn from "./login/SignIn";
import SignUp from "./registration/SignUp";

const Auth: React.FC = () => {
  const [page, setPage] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newPage: number) => {
    setPage(newPage);
  };

  return (
    <Paper elevation={1}>
      <Grid container flexDirection="column">
        <Grid item>
          <Tabs value={page} onChange={handleChange}>
            <Tab label="Sign in" />
            <Tab label="Sign up" />
          </Tabs>
        </Grid>
        <Grid item>{page === 0 ? <SignUp /> : <SignIn />}</Grid>
      </Grid>
    </Paper>
  );
};

export default Auth;
