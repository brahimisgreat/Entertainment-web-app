import { useState } from "react";
import "./App.css";
import { Header } from "./Components/Header/Header";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/Pages/Home/Home";

function App() {

  return (
    <div className="w-full h-full bg-2">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
