import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { SingleUser } from "./pages/SingleUser";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/single-user/:id" element={<SingleUser />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
