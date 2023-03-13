import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./index.css";
import { CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "./Context/ProyectContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <CssBaseline />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
