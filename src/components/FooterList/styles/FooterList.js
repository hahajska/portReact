import styled from "styled-components";
import { ThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

export const Sekce = styled(ThemeProvider)`
  background: red;
`;

export const NadpisFooter = styled(Typography)`
  color: #6d6d62;
`;
export const TextWrapper = styled(Typography)`
  background-color: #96a196;
`;

export const UlList = styled.ul`
  text-align: center;
  padding-top: 1rem;
`;
export const LiList = styled.li`
  font-size: 1.4rem;
  line-height: 3.5rem;
  cursor: pointer;
  color: #c3c3c3;

  &:hover {
    color: white;
  }
`;
