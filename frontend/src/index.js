import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import "mapbox-gl/dist/mapbox-gl.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
