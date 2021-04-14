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
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import { theme } from "../FontSizes/FontSizes";

const useStyles = makeStyles((theme) => ({}));

export default function Uvodka() {
  return (
    <ThemeProvider theme={theme}>
      <HlavniNadpis variant="h4">"WORK & WIN WITH ME"</HlavniNadpis>
      <StyledNadpisJmeno variant="h6">Tomáš Schögl</StyledNadpisJmeno>
      <TextUvodka variant="subtitle2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
        mollitia incidunt voluptatum nobis dolores assumenda. Lorem ipsum, dolor
        sit amet consectetur adipisicing elit
      </TextUvodka>
    </ThemeProvider>
  );
}

const HlavniNadpis = styled(Typography)`
  color: #dadada;
  margin-left: -1rem;
`;

const StyledNadpisJmeno = styled(Typography)`
  margin-top: -1.9rem !important;
  color: #525252;
`;
const TextUvodka = styled(Typography)`
  color: #acacac;
`;
