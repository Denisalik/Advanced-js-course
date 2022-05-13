import React from "react";
import {
  Box,
  Grid,
  Typography,
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Logo from "../shared/icons/Logo";
import AppButton from "../shared/AppButton/AppButton";
import UserIcon from "../shared/icons/UserIcon";
import AppTextField from "../shared/AppTextField/AppTextField";
import Pause from "../shared/icons/Pause";
import Settings from "../shared/icons/Settings";
import Game from "../game/Game";
import { useAppActions, useAppSelector } from "../../lib/hooks";
import Modal from "./Modal";
import { PathStrings } from "../../lib/urls";

const Home: React.FC = () => {
  const {
    joinRoom,
    pauseGame,
    startGame,
    gameData,
    interrupt,
    locationUpdate,
    winnerUpdate,
    scoreUpdate,
  } = useAppActions();
  const { game, player } = useAppSelector(state => state.game);
  const auth = useAppSelector(state => state.auth);
  const navigate = useNavigate();
  React.useEffect(() => {
    // const loaded = auth.expirationDate < new Date();
    //todo add checking for exp date(redux token="")
    if (auth.token === "") navigate(PathStrings.AUTH);
  }, [auth.token]);

  const handleSettings = () => {
    navigate(PathStrings.SETTINGS as unknown as string);
  };
  const [room, setRoom] = React.useState("");
  const [connected, setConnected] = React.useState(false);
  const connect = () => {
    if (room !== "") {
      joinRoom(auth.username, room);
      setConnected(true);
    }
  };
  React.useEffect(() => {
    startGame();
    gameData();
    locationUpdate();
    scoreUpdate();
    interrupt();
  }, []);
  React.useEffect(() => {
    if (connected) {
      winnerUpdate(room);
      setConnected(false);
    }
  }, [connected]);
  return (
    <Grid container flexDirection="column">
      <Grid item pt="17px" pl="50px">
        <Logo
          sx={{
            height: "50px",
            width: "255px",
          }}
        />
      </Grid>
      <Grid item container flexDirection="row">
        <Grid
          xs={1}
          container
          item
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item my={3}>
            <AppButton
              sx={{
                width: "82px",
                height: "82px",
                borderRadius: "50%",
              }}
            >
              <Pause
                sx={{ width: "50px", height: "50px" }}
                onClick={pauseGame}
              />
            </AppButton>
          </Grid>
          <Grid item my={3}>
            <AppButton
              sx={{
                width: "82px",
                height: "82px",
                borderRadius: "50%",
              }}
              onClick={handleSettings}
            >
              <Settings sx={{ width: "50px", height: "50px" }} />
            </AppButton>
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={11}
          px={8}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item container justifyContent="center" xs={12}>
            <Typography variant="h4" color="#60BEED">
              SCORE
              {/*todo color to theme typography*/}
            </Typography>
          </Grid>
          <Grid
            xs={12}
            item
            container
            justifyContent="space-between"
            flexDirection="row"
            my={2}
          >
            <Grid
              item
              xs={1}
              container
              flexDirection="column"
              alignItems="center"
            >
              <UserIcon
                sx={{ height: "60px", width: "60px" }}
                iconVariant={auth.username === player.name ? auth.avatar : 1}
              />
              <Typography variant="h6" sx={{ color: "white" }}>
                {game.state.p1.name}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography align="center" variant="h5" color="#FFA726">
                {game.state.p1.paused ? "Paused" : "Ready"}
              </Typography>
            </Grid>
            <Grid item xs={4} container justifyContent="center">
              <Grid item>
                <Box
                  sx={{
                    height: "100px",
                    width: "100px",
                    borderRadius: "5%",
                    background: "#60BEED",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h2" color="white">
                    {game.state.p1.score}
                  </Typography>
                </Box>
              </Grid>
              {/*todo boxes with colors, as styled components*/}
              <Grid item>
                <Box
                  sx={{
                    height: "100px",
                    width: "100px",
                    borderRadius: "5%",
                    background: "#3D7B99",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h2" color="white">
                    {game.state.p2.score}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Typography align="center" variant="h5" color="#66BB6A">
                {game.state.p2.paused ? "Paused" : "Ready"}
              </Typography>
            </Grid>
            <Grid
              item
              xs={1}
              container
              flexDirection="column"
              alignItems="center"
            >
              <UserIcon
                sx={{ height: "60px", width: "60px" }}
                iconVariant={auth.username === player.name ? auth.avatar : 1}
              />
              <Typography sx={{ color: "white" }} variant="h6">
                {game.state.p2.name}
              </Typography>
              {/*todo color to the theme*/}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Game />
          </Grid>
          <Grid
            item
            container
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            mt={2}
          >
            <Grid item mr={2}>
              <Typography color="#60BEED" variant="h6">
                Game link
              </Typography>
            </Grid>
            <Grid item>
              <AppTextField
                sx={{ height: 50, background: "white" }}
                onChange={e => setRoom(e.target.value)}
                label="Room Name"
              />
            </Grid>
            <Grid item>
              <AppButton sx={{ height: "50px" }}>
                <Grid container alignItems="center">
                  <Grid item>
                    <Typography variant="h6" color="white" onClick={connect}>
                      Connect
                    </Typography>
                  </Grid>
                </Grid>
              </AppButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
