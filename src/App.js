import "./App.css";
import React from "react";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
  withStyles,
  makeStyles,
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import { theme } from "./components/FontSizes/FontSizes";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Uvodka from "./components/Uvodka";
import Mobil from "./images/mobil.png";

const useStyles = makeStyles((theme) => ({
  bg: {
    backgroundColor: "#313131",
    height: "300vh",
    padding: "10rem 1.75rem",
  },

  zmiz: {
    backgroundColor: "#313131",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <>
      <Grid container>
        <Grid
          item
          style={{ xs: "none" }}
          md={1}
          className={classes.zmiz}
        ></Grid>
        <Grid item xs={12} md={8} xl={5} className={classes.bg}>
          {/* <ThemeProvider theme={theme}>
                         <StyledTypography variant="h1">Responsive h1</StyledTypography>
            <Typography variant="h2">Responsive h2</Typography>
            <Typography variant="h3">Responsive h3</Typography>
            <Typography variant="h4">Responsive h4</Typography>
            <Typography variant="h5">Responsive h5</Typography>
            <Typography variant="h6">Responsive h6</Typography> 
            <Typography variant="subtitle1">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
              mollitia incidunt voluptatum nobis dolores assumenda.
            </Typography>
          </ThemeProvider>
          */}
          <Uvodka />
        </Grid>

        <Grid item md={3} xl={6} className={classes.zmiz}>
          <Hidden smDown>
            <img src={Mobil} alt="" />
          </Hidden>
        </Grid>
      </Grid>
    </>
  );
}

export default App;

/* const StyledTypography = styled(Typography)`
  text-decoration: none;
`; */
