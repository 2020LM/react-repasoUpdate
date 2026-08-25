// Third-Party & Ecosystem Imports
import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

// Architecture & Global State Imports
import App from "./App.tsx";

// Component Styles
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
