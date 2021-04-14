import React from "react";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
  withStyles,
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

let theme = createMuiTheme();

theme.typography.h1 = {
  fontSize: "5rem",
  letterSpacing: "-2px",
  fontWeight: "300",
  [theme.breakpoints.down("md")]: {
    fontSize: "2.4rem",
    letterSpacing: "-0.5px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
    letterSpacing: "-0.25px",
  },
};

theme.typography.subtitle1 = {
  fontSize: "1.5rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.25rem",
  },
};
theme.typography.subtitle2 = {
  fontSize: "1.25rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
  },
};

export { theme };
