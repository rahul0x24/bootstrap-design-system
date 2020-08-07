import React from "react";
import { GlobalStyle } from "./GlobalStyle"
import { ThemeProvider } from "styled-components";

export const Theme = ({ theme, children }) => {
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyle />
                {children}
            </>
        </ThemeProvider>
    );
};