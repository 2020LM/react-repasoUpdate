import React from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { DataProvider } from "./context/context";
import { store } from "./store";
import { Provider } from "react-redux";
import Main from "./Features";

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
