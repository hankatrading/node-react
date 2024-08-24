import ReactDOM from "react-dom/client";
import App from "./component/App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer";
import "materialize-css/dist/css/materialize.min.css";
import { thunk } from "redux-thunk";
import axios from "axios";

window.axios = axios;

let store = createStore(reducer, {}, applyMiddleware(thunk));
let el = document.getElementById("root");
let root = ReactDOM.createRoot(el);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
