import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import App from "./App.jsx";
import TestMonaco from "./components/test/TestMonaco.jsx";
import React from "react";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App/> */}
      <TestMonaco/>
    </Provider>
    </React.StrictMode>
);
