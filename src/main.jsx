import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";
import {BrowserRouter , Routes ,Route} from "react-router-dom";
import "@fontsource/outfit";
import "@fontsource/roboto";

ReactDOM.createRoot(document.getElementById("root")).render(
 <BrowserRouter>
    <App />
 </BrowserRouter>
    
  
);