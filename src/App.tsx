// Third-Party & Ecosystem Imports
import React from "react";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Architecture & Global State Imports
import { store } from "./store/store.js";
import Main from "./Features/index.js";

// Component Styles
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
