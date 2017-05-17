import "react-hot-loader/patch";
import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { AppContainer } from "react-hot-loader";

import "./index.pug";
import "./index.scss";

import App from "./components/App.jsx";
import { get } from "./helpers/ajaxRequest";
import * as reducers from "./reducers";

const store = createStore(
  combineReducers(reducers),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const render = () => {
  // const App = require("./components/App.jsx").default;
  ReactDOM.render((
    <AppContainer>
      <Provider store={store}>
        <App />
      </Provider>
    </AppContainer>
  ), document.getElementById("app"));
};

render();

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept("./components/App.jsx", () => {
    render();
  });
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
