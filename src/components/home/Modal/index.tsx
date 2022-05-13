import React from "react";
import { Grid, Paper, Tab, Tabs, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AccountSettings from "./AccountSettings";
import GameSettings from "./GameSettings";
import AppButton from "../../shared/AppButton/AppButton";
import { useAppActions, useAppSelector } from "../../../lib/hooks";
import { PathStrings } from "../../../lib/urls";

const Modal: React.FC = () => {
  //game
  const [page, setPage] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newPage: number) => {
    setPage(newPage);
  };
  const {
    background: backgroundInitial,
    avatar: avatarInitial,
    username: usernameInitial,
  } = useAppSelector(state => state.auth);
  const navigate = useNavigate();
  const { changeGameSettings, changeAccountSettings } = useAppActions();

  const [avatar, setAvatar] = React.useState(avatarInitial - 1);
  const [background, setBackground] = React.useState(backgroundInitial - 1);
  //account
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [newUsername, setNewUsername] = React.useState("");

  const [errorUsername, setErrorUsername] = React.useState(false);
  const [errorPassword, setErrorPassword] = React.useState(false);
  const [errorNewUsername, setNewErrorUsername] = React.useState(false);
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
    if (newUsername.length < 3 || newUsername.length > 20) {
      errorState = false;
      setNewErrorUsername(true);
    }
    //todo if password!=newPassword
    return errorState;
  };

  const cancel = () => {
    navigate(PathStrings.HOME);
  };
  const save = () => {
    //account
    if (page === 0) {
      if (validate()) {
        changeAccountSettings(username, password, newUsername);
        navigate(PathStrings.HOME);
      }
    } else {
      changeGameSettings(avatar + 1, background + 1, usernameInitial);
      navigate(PathStrings.HOME);
    }
    //game
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
              {page === 0 ? (
                <AccountSettings
                  username={username}
                  errorUsername={errorUsername}
                  errorPassword={errorPassword}
                  errorNewUsername={errorNewUsername}
                  setNewUsername={setNewUsername}
                  newUsername={newUsername}
                  password={password}
                  setPassword={setPassword}
                  setUsername={setUsername}
                />
              ) : (
                <GameSettings
                  avatar={avatar}
                  background={background}
                  setAvatar={setAvatar}
                  setBackground={setBackground}
                />
              )}
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item>
        <AppButton onClick={cancel}>Cancel</AppButton>
        <AppButton onClick={save}>Save</AppButton>
      </Grid>
    </Grid>
  );
};

export default Modal;
