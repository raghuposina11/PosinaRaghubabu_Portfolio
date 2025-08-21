import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from './components/Education';
import Internships from './components/Internships';
import Certifications from './components/Certification';


export default function App() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Internships />
      <Skills />
      <Projects />
      <Certifications/>
      <Contact />
      <Footer />
    </div>
  );
}
