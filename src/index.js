import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // Ana uygulama bileşeni
import { AppProvider } from "./Context/MealContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/js/bootstrap";

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <App />
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
