import "./index.css";
import App from "./App.jsx";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import AuthProvider from "./providers/AuthProvider.jsx";
import AuthorProvider from "./providers/AuthorProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <AuthorProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthorProvider>
    </AuthProvider>
  </React.StrictMode>
);
