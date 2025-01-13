import React from 'react';
import Navbar from './components/Navbar';
import VideoSection from './components/VideoSection';
import Slider from './components/Slider';
import BoxCategories from './components/BoxCategories';
import Cards from './components/Cards';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <VideoSection />
      <Slider />
      <BoxCategories />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;

