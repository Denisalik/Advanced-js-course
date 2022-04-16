import React from "react";
import { Grid, Paper, Tab, Tabs, Typography } from "@mui/material";
import SignIn from "./login/SignIn";
import SignUp from "./registration/SignUp";
import Logo from "../shared/icons/Logo";
import { PathStrings } from "../../lib/urls";

const Auth: React.FC = () => {
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
        <Logo
          sx={{
            height: "57px",
            width: "263px",
            marginBottom: "39px",
          }}
        />
      </Grid>
      <Grid item>
        <Paper
          elevation={1}
          sx={{
            width: "476px",
            height: page === 0 ? "497px" : "577px",
            padding: "0 30px 30px 30px",
          }}
        >
          <Grid container alignItems="center" flexDirection="column">
            <Grid item my={2}>
              <Tabs value={page} onChange={handleChange}>
                <Tab label={<Typography variant="h5">Sign in</Typography>} />
                <Tab label={<Typography variant="h5">Sign up</Typography>} />
              </Tabs>
            </Grid>
            <Grid item>{page === 0 ? <SignIn /> : <SignUp />}</Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Auth;
