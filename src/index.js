import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {
  MuiThemeProvider,
  createMuiTheme,
  CssBaseline,
  responsiveFontSizes,
} from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#340068",
    },
    background: {
      default: "#ffff",
    },
  },
  typography: {
    fontFamily: "'Cairo', sans-serif;",
    h1: {
      fontWeight: "bold",
    },
    h2: {
      fontWeight: "bold",
    },
    h3: {
      fontWeight: "bold",
    },
    h4: {
      fontWeight: "bold",
    },
  },
});

theme = responsiveFontSizes(theme);

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <App />
      </BrowserRouter>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
