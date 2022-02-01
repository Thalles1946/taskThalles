import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import { Provider } from "react-redux";
//Store -> Globalized State

//Action increment
const increment = () => {
  return {
    type: "INCREMENT",
    value: 1,
  };
};

const decrement = () => {
  return {
    type: "DECREMENT",
  };
};
//Reducer
const counter = (state = [], action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.value;
    case "DECREMENT":
      return state + action.value;

    default:
      break;
  }
};
let store = createStore(counter);
//Dispatch

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
