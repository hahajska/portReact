import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { theme } from "../FontSizes/FontSizes";
import Grid from "@material-ui/core/Grid";
import { Sekce, NadpisFooter, UlList, LiList } from "./styles/FooterList";

const seznamList = [
  { id: 1, content: "HOME" },
  { id: 2, content: "PRICES" },
  { id: 3, content: "SUPPORT" },
];

export default function FooterList() {
  return (
    <Sekce theme={theme}>
      <NadpisFooter variant="h5">Fast Links</NadpisFooter>

      <UlList>
        {seznamList.map((item) => {
          return <LiList>{item.content}</LiList>;
        })}
      </UlList>
    </Sekce>
  );
}
