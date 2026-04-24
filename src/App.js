import CustomCursor from './components/layout/CustomCursor';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import TechStrip from './components/sections/TechStrip';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import FAQ from './components/sections/FAQ';
import Contact from './components/sections/Contact';

function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <TechStrip />
        <Projects />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
