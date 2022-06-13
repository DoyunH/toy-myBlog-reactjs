import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from "./App";
import Article from "./routes/Article";
import P5 from "./routes/P5";
import Write from "./routes/Write";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='article' element={<Article />} />
      <Route path='write' element={<Write />} />
      <Route path='p5' element={<P5 />} />
    </Routes>
  </BrowserRouter>
);
