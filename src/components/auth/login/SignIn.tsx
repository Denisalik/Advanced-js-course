import React from "react";
import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AppButton from "../../shared/AppButton/AppButton";
import AppTextField from "../../shared/AppTextField/AppTextField";
import { useAppActions, useAppSelector } from "../../../lib/hooks";
import { PathStrings } from "../../../lib/urls";

const SignIn: React.FC = () => {
  const { token } = useAppSelector(state => state.auth);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { login } = useAppActions();
  const navigate = useNavigate();
  React.useEffect(() => {
    if (token) {
      navigate(PathStrings.HOME);
    }
  }, [token]);
  const onChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };
  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const [errorUsername, setErrorUsername] = React.useState(false);
  const [errorPassword, setErrorPassword] = React.useState(false);
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
    return errorState;
  };

  const handleClick = () => {
    if (validate()) login({ username, password });
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
          type="password"
          error={errorPassword}
          helperText={
            errorPassword
              ? "Length of the password should be more than 2 and less than 20"
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

export default SignIn;
