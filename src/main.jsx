import React from "react";
import ReactDOM from "react-dom/client";
import "modern-normalize";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import App from "./App.jsx";
import "../src/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
