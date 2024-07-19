<<<<<<< HEAD
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Tvshow from './Tvshow';
import Movies from './Movies';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
=======
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Movies from "./Movies";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Tvshow from "./Tvshow";
>>>>>>> a7203e683f4c82c5d1010c3205a2ae62285d5596

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
