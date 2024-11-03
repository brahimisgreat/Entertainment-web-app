import "./App.css";
import { Header } from "./Components/Header/Header";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/Pages/Home/Home";

function App() {

  return (
    <div className="w-full h-full bg-2">
      <Header />
      <div className="w-11/12 border border-white ml-3 ">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
