import React from 'react'

import Hero from './components/home/Hero';
import MovieCard from './components/home/MovieCard';
import MovieSection from './components/home/MovieSection';


const Home = () => {
  return (
    <div>
       <Hero />
       <MovieCard />
       <MovieSection />
    </div>
  )
}

export default Home