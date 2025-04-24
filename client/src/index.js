import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0d6797",
      light: "#ffffff",
    },
    custom: {
      navbar: "#333333",
      bglayer: "#e8e8e8",
      darkHover: "linear-gradient(to right, #444444, #555555)",
    },
    text: {
      primary: "#ffffff",
      secondary: "#686868",
    },
  },
  typography: {
    fontFamily: "Montserrat",
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
