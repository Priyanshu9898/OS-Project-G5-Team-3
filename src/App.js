import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";

// Navbar
import Navbar from "./components/Navigation/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
