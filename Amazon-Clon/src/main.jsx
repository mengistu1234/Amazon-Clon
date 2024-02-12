import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { DataProvider } from "./components/dataProvider/DataProvider";
import { initialState,reducer } from "./Utility/reducer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataProvider reducer={reducer} initialState={initialState}>
      <App />
    </DataProvider>
  </React.StrictMode>
);
