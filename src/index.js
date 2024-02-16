import { store } from "./app/store";
import { Provider } from "react-redux";

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.js";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
