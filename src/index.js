import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import logger from "redux-logger";
import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import { rootReducer } from "./redux/reducer/reducer";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
