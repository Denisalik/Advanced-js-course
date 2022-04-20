import React from "react";
import { Grid, Typography } from "@mui/material";
import AppTextField from "../../shared/AppTextField/AppTextField";
import { useAppActions, useAppSelector } from "../../../lib/hooks";

const AccountSettings: React.FC = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const onChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };
  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const onChangeNewPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(event.target.value);
  };

  const [errorUsername, setErrorUsername] = React.useState(false);
  const [errorPassword, setErrorPassword] = React.useState(false);
  const [errorNewPassword, setNewErrorPassword] = React.useState(false);
  const validate = () => {
    let errorState = true;
    if (username.length < 3 || username.length > 20) {
      errorState = false;
      setErrorUsername(true);
    }
    if (password.length < 3 || password.length > 20) {
      errorState = false;
      setErrorPassword(true);
    }
    if (newPassword.length < 3 || newPassword.length > 20) {
      errorState = false;
      setNewErrorPassword(true);
    }
    //todo if password!=newPassword
    return errorState;
  };
  return (
    <Grid container flexDirection="column">
      <Grid item>
        <Typography variant="h5">Username</Typography>
      </Grid>
      <Grid item my={2}>
        <AppTextField
          error={errorUsername}
          helperText={
            errorUsername
              ? "Length of the username should be more than 2 and less than 20"
              : ""
          }
          value={username}
          onChange={onChangeUsername}
          label="Username"
          sx={{ height: "50px", width: "416px" }}
        />
      </Grid>
      <Grid item>
        <Typography variant="h5">Password</Typography>
      </Grid>
      <Grid item my={2}>
        <AppTextField
          type="password"
          error={errorPassword}
          helperText={
            errorPassword
              ? "Length of the password should be more than 2 and less than 20"
              : ""
          }
          value={password}
          onChange={onChangePassword}
          label="Current Password"
          sx={{ height: "50px", width: "416px" }}
        />
      </Grid>
      <Grid item my={2}>
        <AppTextField
          type="password"
          error={errorNewPassword}
          helperText={
            errorNewPassword
              ? "Length of the password should be more than 2 and less than 20"
              : ""
          }
          value={newPassword}
          onChange={onChangeNewPassword}
          label="New Password"
          sx={{ height: "50px", width: "416px" }}
        />
      </Grid>
    </Grid>
  );
};

export default AccountSettings;
