import { createGlobalStyle } from "styled-components";
import { darken } from "polished";

export const GlobalStyle = createGlobalStyle`
  @media print {
    body {
      color: black !important;
      background: white !important;
    }
    
    a {
      color: black !important;
      text-decoration: none !important;
    }
  }

  @media screen {
    body {
      background: ${props => props.theme.colors.background} !important;
      color: ${props => props.theme.colors.textColor} !important;
      font-family: ${props => props.theme.fonts.sansSerif} !important;
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: ${props => props.theme.fonts.serif} !important;
      font-weight: bold !important;
    }

    a {
      color: ${props => props.theme.colors.primary} !important;
      text-decoration: none !important;
    }

    a:hover {
      color: ${props => darken(0.1, props.theme.colors.primary)} !important;
    }

    .linear-bg {
      color: ${props => props.theme.colors.textAccent} !important;
      background: linear-gradient(
        45deg,
        ${props => darken(0.3, props.theme.colors.primaryAccent)},
        ${props => props.theme.colors.primaryAccent}
      );

      a {
        color: white !important;
      }

      a:hover {
        color: ${props => props.theme.colors.primary} !important;
      }
    }
  }
`;
