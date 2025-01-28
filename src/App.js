import logo from './logo.svg';
import './App.css';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Department from './components/Department';
import Skills from './components/Skill';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <Services />
      <Department />
      <Skills />
      <About />
      <Contact />
    </div>
  );
}

export default App;
