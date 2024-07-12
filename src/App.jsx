import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Tvshow from "./Tvshow";
import Movies from "./Movies";

const App = () => {
  return (
  <>  
  <Routes>
    <Route path="/" element = {<Home />}/>
    <Route path="/tvshows" element = {<Tvshow />}/>
    <Route path="/movies" element = {<Movies />}/>

  </Routes>

  </>
  );
};

export default App;
