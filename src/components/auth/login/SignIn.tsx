import React from "react";
import { Grid, Typography } from "@mui/material";
import AppButton from "../../shared/AppButton/AppButton";
import AppTextField from "../../shared/AppTextField/AppTextField";

const SignIn: React.FC = () => (
  <Grid container flexDirection="column">
    <Grid item>
      <Typography variant="h3">Sign In</Typography>
    </Grid>
    <Grid item>
      <Typography variant="h6">
        If you already have an account, login to invite a friend to play with
        you.
      </Typography>
    </Grid>
    <Grid item my={2}>
      <AppTextField label="Username" sx={{ height: "50px", width: "416px" }} />
    </Grid>
    <Grid item my={2}>
      <AppTextField label="Password" sx={{ height: "50px", width: "416px" }} />
    </Grid>
    <Grid item>
      <AppButton sx={{ width: "416px", height: "50px", margin: "30px 0" }}>
        Log in
      </AppButton>
    </Grid>
  </Grid>
);

export default SignIn;
