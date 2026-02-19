import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Philosophy from './components/Philosophy';
import Gallery from './components/Gallery';
import Clients from './components/Clients';
import Footer from './components/Footer';
function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Philosophy />
      <Gallery />
      <Clients />
      <Footer />
    </div>
  );
}

export default App;
