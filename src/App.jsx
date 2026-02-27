import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
// 1. Naya import yahan add karen
import Certificates from './components/Certificates/Certificates'; 

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Home />
        <About />
        <Projects />
        <Skills />
        {/* 2. Skills aur Contact ke darmiyan yahan add karen */}
        <Certificates /> 
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;