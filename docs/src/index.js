import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "bootstrap-design-system";
import theme from "./../config/theme";
import App from "./App.js";

const globaltheme = {
    ...theme,
    colors: {
        ...theme["light"].colors
    }
};

ReactDOM.render(
    <ThemeProvider theme={globaltheme}>
        <App />,
    </ThemeProvider>,
    document.getElementById("root")
);