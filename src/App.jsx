import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <main>
         <Navbar />
         <Hero/>
         <About />
         <Skills />
         <Projects />
         <Experience />
         <Education />
      </main>
      <Footer />
    </>
  )
}

export default App