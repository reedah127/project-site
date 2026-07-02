import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <About />
        <Projects />
        <Skills />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}

