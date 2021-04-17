import styled from "styled-components";
import { ThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

export const FooterWrapper = styled(ThemeProvider)`
  position: relative;
`;

export const TextWrapper = styled(Typography)`
  color: #c3c3c3;
  text-align: center;
  padding: 2rem 2.5rem;
`;

export const NadpisFooterInfo = styled(Typography)`
  color: #6d6d62;
`;
