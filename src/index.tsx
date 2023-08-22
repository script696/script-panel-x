import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./app/config/i18n";

ReactDOM.render(
  <React.StrictMode>
    {/*<BrowserRouter>*/}
    <App />
    {/*</BrowserRouter>*/}
  </React.StrictMode>,
  document.getElementById("root")
);
