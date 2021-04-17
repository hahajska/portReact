import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { theme } from "../FontSizes/FontSizes";
import {
  FooterWrapper,
  TextWrapper,
  NadpisFooterInfo,
} from "./styles/FooterInfo";
import Grid from "@material-ui/core/Grid";

/* import { FooterList } from "../../App";
 */

const ContentFooter = [
  {
    id: 1,
    title: "Fast About Us",
    content:
      "Stuff at avoid of sense small fully it whose an. Ten scarcely distance moreover handsome age although. As when have find fine or said no mile. He in dispatched in imprudence dissimilar be possession unreserved insensible. She evil face fine calm have now.",
  },
];

export default function FooterInfo() {
  return (
    <FooterWrapper theme={theme}>
      {ContentFooter.map((item) => {
        return (
          <>
            <NadpisFooterInfo variant="h4">{item.title}</NadpisFooterInfo>
            <TextWrapper variant="subtitle2">{item.content}</TextWrapper>
          </>
        );
      })}
    </FooterWrapper>
  );
}
