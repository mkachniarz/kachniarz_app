import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import MenuBar from "./components/MenuBar";
import "./index.css";
import { StyledEngineProvider } from "@mui/material/styles";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <MenuBar />
      <App />
    </StyledEngineProvider>
  </React.StrictMode>
);
