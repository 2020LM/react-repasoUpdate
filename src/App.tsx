// Third-Party & Ecosystem Imports
import React from "react";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Architecture & Global State Imports
import { DataProvider } from "./context/context.jsx";
import { store } from "./store/store.js";
import Main from "./Features/index.jsx";

// Component Styles
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <DataProvider>
        <Main />
      </DataProvider>
    </Provider>
  );
}

export default App;
