import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ContactContextProvider from "./context/ContactContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContactContextProvider>
        <App />
      </ContactContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
