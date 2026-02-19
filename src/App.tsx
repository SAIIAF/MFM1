import { useState } from 'react';
import Preloader from './components/Preloader';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Philosophy from './components/Philosophy';
import Gallery from './components/Gallery';
import Clients from './components/Clients';
import Footer from './components/Footer';

function App() {
  const [loaded, setLoaded] = useState(false);


  const images = [
    '/src/assets/صور/لوجو/لوجو.webp',
    '/src/assets/صور/لوجو/لوجو2.webp',
    '/src/assets/صور/about/abot1.jpg',
    '/src/assets/صور/about/about2.jpg',
    '/src/assets/صور/about/about3.jpg',
    '/public/video/Screen Recording 2025-05-07.mp4',
    
  ];

  return (
    <>
      
      {!loaded && (
        <Preloader
          images={images}
          onLoaded={() => setLoaded(true)}
        />
      )}

      {loaded && (
        <div className="app">
          <Navbar />
          <Hero />
          <About />
          <Philosophy />
          <Gallery />
          <Clients />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
