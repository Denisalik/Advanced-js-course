import React from "react";
import { Grid, Typography } from "@mui/material";
import AppTextField from "../../shared/AppTextField/AppTextField";

interface AccountSettingsProps {
  username: string;
  password: string;
  newUsername: string;
  setUsername: (username: string) => void;
  setPassword: (password: string) => void;
  setNewUsername: (newUsername: string) => void;
  errorUsername: boolean;
  errorPassword: boolean;
  errorNewUsername: boolean;
}

const AccountSettings: React.FC<AccountSettingsProps> = ({
  password,
  setPassword,
  setUsername,
  username,
  errorPassword,
  errorUsername,
  errorNewUsername,
  newUsername,
  setNewUsername,
}) => {
  const onChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };
  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const onChangeNewUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewUsername(event.target.value);
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
          label="New Username"
          error={errorNewUsername}
          helperText={
            errorNewUsername
              ? "Length of the password should be more than 2 and less than 20"
              : ""
          }
          value={newUsername}
          onChange={onChangeNewUsername}
          sx={{ height: "50px", width: "416px" }}
        />
      </Grid>
    </Grid>
  );
};

export default AccountSettings;
