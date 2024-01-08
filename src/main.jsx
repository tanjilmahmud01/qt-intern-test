import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "flowbite";
import { ProductDataProvider } from "./context/ProductContext.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductDataProvider>
        <App />
      </ProductDataProvider>
    </BrowserRouter>
  </React.StrictMode>
);
