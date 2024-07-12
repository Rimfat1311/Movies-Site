import React from 'react'
import Nav from './components/Nav';

import Footer from './components/Footer';
import Hero from './components/home/Hero';
import MovieCard from './components/home/MovieCard';
import MovieSection from './components/home/MovieSection';
import Navbar from './components/home/Navbar';

const Home = () => {
  return (
    <div>
       <Navbar />
       <Hero />
       <MovieCard />
       <MovieSection />
      <Footer />
    </div>
  )
}

export default Home