import "./App.css";
import React from "react";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
  withStyles,
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import { theme } from "./components/FontSizes/FontSizes";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <StyledTypography variant="h1">Responsive h1</StyledTypography>
        <Typography variant="h2">Responsive h2</Typography>
        <Typography variant="subtitle1">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
          mollitia incidunt voluptatum nobis dolores assumenda.
        </Typography>
      </ThemeProvider>
    </div>
  );
}

export default App;

const StyledTypography = styled(Typography)`
  color: red;
`;
