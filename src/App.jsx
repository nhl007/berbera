// import { useState } from 'react'

import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';
import NewArrival from './components/NewArrival';

function App() {
  return (
    <div className=' w-full h-full'>
      <NavBar />
      <HeroSection />
      <NewArrival />
    </div>
  );
}

export default App;
