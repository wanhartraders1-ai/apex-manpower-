import Header from './sections/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Pillars from './sections/Pillars';
import Services from './sections/Services';
import Sectors from './sections/Sectors';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Pillars />
        <Services />
        <Sectors />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
