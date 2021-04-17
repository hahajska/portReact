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
import TextAbout from "./components/TextAbout";
import FooterInfo from "./components/FooterInfo";
import FooterList from "./components/FooterList";

const useStyles = makeStyles((theme) => ({
  bg: {
    backgroundColor: "#313131",
    height: "88vh",
    padding: "0rem 1.75rem 7rem 1.75rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  zmiz: {
    backgroundColor: "#313131",
    height: "88vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  bg2: {
    backgroundColor: "#acacac",
    height: "100vh",
    padding: "2rem 1.75rem 10rem 1.75rem",
  },

  zmiz2: {
    backgroundColor: "#313131",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  space: {
    backgroundColor: "#313131",
    height: "15rem",
  },
  footerBg: {
    padding: "2rem 1.75rem 3Rem 1.75rem",
    backgroundColor: "#222222",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "50vh",
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
          xl={1}
          className={classes.zmiz}
        ></Grid>
        <Grid item xs={12} md={8} xl={5} className={classes.bg}>
          <Uvodka />
        </Grid>
        <Grid item md={3} xl={6} className={classes.zmiz}>
          <Hidden smDown>
            <Obrazek src={Mobil} alt="" />
          </Hidden>
        </Grid>
      </Grid>

      <Grid container>
        <Grid
          item
          style={{ xs: "none" }}
          md={1}
          xl={1}
          className={classes.zmiz2}
        ></Grid>
        <Grid item xs={12} md={10} xl={9} className={classes.bg2}>
          <TextAbout />
        </Grid>
        <Grid item md={1} xl={2} className={classes.zmiz2}></Grid>
        <Grid item xs={12} className={classes.space}></Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12} md={6} className={classes.footerBg}>
          <FooterInfo />
        </Grid>
        <Grid item xs={12} md={6} className={classes.footerBg}>
          <FooterList />
        </Grid>
      </Grid>
    </>
  );
}

export default App;

/* const StyledTypography = styled(Typography)`
  text-decoration: none;
`; */

const Obrazek = styled.img`
  filter: drop-shadow(20px 30px 20px #c2c2c2);
  @media (max-width: 1700px) {
    height: 15rem;
    padding-right: 1rem;
  }
  @media (max-width: 1100px) {
    display: none;
  }
`;
