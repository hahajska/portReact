import styled from "styled-components";
import { ThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

export const HlavniNadpis = styled(Typography)`
  color: #dadada;
  margin-left: -1rem;
  @media (max-width: 900px) {
    margin-left: -0.2rem;
  }
`;

export const StyledNadpisJmeno = styled(Typography)`
  margin-top: -1.9rem;
  color: #525252;
  @media (max-width: 900px) {
    margin-top: -0.8rem;
  }
`;
export const TextUvodka = styled(Typography)`
  color: #acacac;
`;
export const DivUvodka = styled(ThemeProvider)`
  background: transparent;
`;
export const Tlacitko = styled.button`
  width: 150px;
  background: #525252;
  color: #dadada;
  outline: none;
  margin: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  padding: 0.5rem 1.4rem;
  font-weight: 500;
`;
