import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Logo from "../shared/icons/Logo";
import AppButton from "../shared/AppButton/AppButton";
import UserIcon from "../shared/icons/UserIcon";
import AppTextField from "../shared/AppTextField/AppTextField";
import Pause from "../shared/icons/Pause";
import Settings from "../shared/icons/Settings";
import Copy from "../shared/icons/Copy";
import Game from "../game/Game";

const Home: React.FC = () => (
  <Grid
    container
    flexDirection="column"
    sx={{ height: "100vh", width: "100vw" }}
  >
    <Grid item pt="17px" pl="50px">
      <Logo
        sx={{
          height: "55px",
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
            <Pause sx={{ width: "50px", height: "50px" }} />
          </AppButton>
        </Grid>
        <Grid item my={3}>
          <AppButton
            sx={{
              width: "82px",
              height: "82px",
              borderRadius: "50%",
            }}
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
            <UserIcon sx={{ height: "60px", width: "60px" }} iconVariant={1} />
            <Typography variant="h6" sx={{ color: "white" }}>
              Jame_Haden
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography align="center" variant="h5" color="#FFA726">
              Paused
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
                  10
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
                  10
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Typography align="center" variant="h5" color="#66BB6A">
              Ready
            </Typography>
          </Grid>
          <Grid
            item
            xs={1}
            container
            flexDirection="column"
            alignItems="center"
          >
            <UserIcon sx={{ height: "60px", width: "60px" }} iconVariant={2} />
            <Typography sx={{ color: "white" }} variant="h6">
              Nikita_Ivanov
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
          my={3.5}
        >
          <Grid item mr={2}>
            <Typography color="#60BEED" variant="h6">
              Game link
            </Typography>
          </Grid>
          <Grid item>
            <AppTextField
              sx={{ height: "50px", background: "white" }}
              disabled
              label="http://..."
            />
          </Grid>
          <Grid item>
            <AppButton sx={{ height: "50px" }}>
              <Grid container alignItems="center">
                <Grid item>
                  <Copy
                    sx={{ height: "19px", width: "19px", marginRight: "6px" }}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="h6" color="white">
                    Copy
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

export default Home;
