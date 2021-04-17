import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { theme } from "../FontSizes/FontSizes";
import {
  DivUvodka,
  HlavniNadpis,
  StyledNadpisJmeno,
  TextUvodka,
  Tlacitko,
} from "./styles/Uvodka";

const useStyles = makeStyles((theme) => ({}));

export default function Uvodka() {
  return (
    <DivUvodka theme={theme}>
      <HlavniNadpis variant="h4">"WORK & WIN WITH ME"</HlavniNadpis>
      <StyledNadpisJmeno variant="h6">Name and Surname</StyledNadpisJmeno>
      <TextUvodka variant="subtitle2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
        mollitia incidunt voluptatum nobis dolores assumenda. Lorem ipsum, dolor
        sit amet consectetur adipisicing elit
      </TextUvodka>
      <Tlacitko>EXPLORE</Tlacitko>
    </DivUvodka>
  );
}
