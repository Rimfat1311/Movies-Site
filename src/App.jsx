import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Tvshow from "./Tvshow";
import Movies from "./Movies";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tvshows" element={<Tvshow />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
