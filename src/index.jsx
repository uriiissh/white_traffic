import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { Router } from "./Routes/root";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Router />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
