import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import customFetch from "./utils/customfetch";

const data =await customFetch.get('/test')
console.log(data)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
