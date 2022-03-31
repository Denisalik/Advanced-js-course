import React from "react";
import { Grid } from "@mui/material";
import AppButton from "../../shared/AppButton/AppButton";
import AppTextField from "../../shared/AppTextField/AppTextField";

const SignIn: React.FC = () => (
  <Grid container flexDirection="column">
    <Grid item>Sign in</Grid>
    <Grid item>
      If you already have an account, login to invite a friend to play with you.
    </Grid>
    <Grid item>
      <AppTextField />
    </Grid>
    <Grid item>
      <AppTextField error />
    </Grid>
    <Grid item>
      <AppButton>Log in</AppButton>
    </Grid>
  </Grid>
);

export default SignIn;
