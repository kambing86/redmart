if (DEVELOPMENT) {
  require("react-hot-loader/patch");
}
import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
if (DEVELOPMENT) {
  var AppContainer = require("react-hot-loader").AppContainer;
}

import "./index.pug";
import "./index.scss";

import App from "./components/App.jsx";
import { get } from "./helpers/ajaxRequest";
import * as reducers from "./reducers";

var enhancer;
if (DEVELOPMENT) {
  enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
}

const store = createStore(
  combineReducers(reducers),
  enhancer
);

const appRoot = document.getElementById("app");

const render = () => {
  if (DEVELOPMENT) {
    ReactDOM.render((
      <AppContainer>
        <Provider store={store}>
          <App />
        </Provider>
      </AppContainer>
    ), appRoot);
  }
  else {
    ReactDOM.render((
      <Provider store={store}>
        <App />
      </Provider>
    ), appRoot);
  }
};

render();

if (DEVELOPMENT) {
  // Hot Module Replacement API
  if (module.hot) {
    module.hot.accept("./components/App.jsx", () => {
      render();
    });
  }
}

(async () => {
  try {
    const data = JSON.parse(await get("/data/products.json"));
    store.dispatch({
      type: "INIT_DATA",
      data
    });
  } catch (e) {
    console.error(e);
  }
})();
