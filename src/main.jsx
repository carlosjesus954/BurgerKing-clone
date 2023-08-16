import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../app/css/base/index.css";
import "../app/css/layout/index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "./context/Provider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
