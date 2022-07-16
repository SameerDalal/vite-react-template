import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
      <App />
  </StrictMode>
);
reportWebVitals(); 
