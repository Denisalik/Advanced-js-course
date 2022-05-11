import React from "react";
import { Grid, Typography } from "@mui/material";
import AppTextField from "../../shared/AppTextField/AppTextField";
import AppButton from "../../shared/AppButton/AppButton";
import { useAppActions } from "../../../lib/hooks";

const SignUp: React.FC = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const { registration } = useAppActions();
  const onChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };
  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const [errorUsername, setErrorUsername] = React.useState(false);
  const [errorPassword, setErrorPassword] = React.useState(false);
  const [errorEmail, setErrorEmail] = React.useState(false);
  const validate = () => {
    let errorState = true;
    if (username.length < 3 || username.length > 20) {
      errorState = false;
      setErrorUsername(true);
    }
    if (email.length < 3 || email.length > 30 || !email.includes("@")) {
      errorState = false;
      setErrorEmail(true);
    }
    if (password.length < 3 || password.length > 20) {
      errorState = false;
      setErrorPassword(true);
    }
    return errorState;
  };

  const handleClick = () => {
    if (validate()) registration({ username, password, email });
  };
  return (
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
      <Grid item my={2}>
        <AppTextField
          error={errorEmail}
          helperText={
            errorEmail
              ? "Length of the email should be more than 2 and less than 20 and contain '@'"
              : ""
          }
          value={email}
          onChange={onChangeEmail}
          label="Email"
          sx={{ height: "50px", width: "416px" }}
        />
      </Grid>
      <Grid item my={2}>
        <AppTextField
          type="password"
          error={errorPassword}
          helperText={
            errorPassword
              ? "Length of the password should be more than 2 and less than 30"
              : ""
          }
          value={password}
          onChange={onChangePassword}
          label="Password"
          sx={{ height: "50px", width: "416px" }}
        />
      </Grid>
      <Grid item>
        <AppButton
          onClick={handleClick}
          sx={{ width: "416px", height: "50px", margin: "30px 0" }}
        >
          Log in
        </AppButton>
      </Grid>
    </Grid>
  );
};

export default SignUp;
