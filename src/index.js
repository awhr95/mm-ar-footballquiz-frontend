import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GamePlayerProvider } from "./context/GamePlayerContext"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GamePlayerProvider>
      <App />
    </GamePlayerProvider>
  </React.StrictMode>
);
