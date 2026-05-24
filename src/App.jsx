import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import './App.css'

function App() {
  return (
    <>
      <CustomCursor />
      <main>
         <Navbar />
         <Hero/>
         <Skills />
         <Projects />
         <Experience />
         <Education />
         <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App