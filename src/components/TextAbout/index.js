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
import ProfileImg from "../../images/profil.jpg";
import {
  Container,
  TextWrapper,
  NadpisProfil,
  ImgWrapper,
  TextProfil,
  ObrazekProfile,
} from "./styles/TextAbout";

export default function TextAbout() {
  return (
    <Container theme={theme}>
      <TextWrapper>
        <NadpisProfil variant="h2">HELLO AGAIN_</NadpisProfil>
        <TextProfil variant="subtitle2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
          mollitia incidunt voluptatum nobis dolores assumenda. Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit
          amet consectetur adipisicing elit. Quaerat mollitia incidunt
          voluptatum nobis dolores assumenda. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit
        </TextProfil>
      </TextWrapper>
      <ImgWrapper>
        <ObrazekProfile src={ProfileImg} alt="" />
      </ImgWrapper>
    </Container>
  );
}
