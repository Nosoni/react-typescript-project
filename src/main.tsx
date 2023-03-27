import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = document.getElementById("root");
const createDOM = ReactDOM.createRoot(root as HTMLElement);
createDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
