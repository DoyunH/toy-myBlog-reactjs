import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from "./App";
import Article from "./routes/Article";
import Write from "./routes/Write";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='article' element={<Article />} />
      <Route path='write' element={<Write />} />
    </Routes>
  </BrowserRouter>
);
