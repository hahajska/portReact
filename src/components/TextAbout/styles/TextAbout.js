import styled from "styled-components";
import { ThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

export const Container = styled(ThemeProvider)`
  position: relative;
`;

export const ObrazekProfile = styled.img`
  height: 30rem;
  width: max-content;
  object-fit: cover;
  padding: 0.5rem 1rem;
  @media (max-width: 720px) {
    height: 15rem;
    width: max-content;
    object-fit: cover;
    padding: 0.5rem 1rem;
  }
`;
export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const TextWrapper = styled.div`
  padding: 7rem 0rem 3rem 0rem;
`;

export const NadpisProfil = styled(Typography)`
  color: #313131;
`;

export const TextProfil = styled(Typography)`
  color: #272727;
  padding-right: 20rem;
  @media (max-width: 1200px) {
    padding-right: 0rem;
  }
`;
