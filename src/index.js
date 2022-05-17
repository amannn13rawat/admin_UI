import React from "react";
import { StrictMode } from "react";
// import ReactDOM from 'react-dom';
// import * as ReactDOMClient from 'react-dom/client';
import { createRoot } from "react-dom/client";
import App from "./App";

// const root = ReactDOMClient.createRoot(document.getElementById('root'));
// // This App content will be displayed in the div root

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
