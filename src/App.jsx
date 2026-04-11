import Scene from "./components/Scene"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Tools from "./components/Tools"
import Certificates from "./components/Certificates"
import ProfessionalCursor from "./components/ProfessionalCursor"



function App() {
  return (
    <>
    <ProfessionalCursor />
    
      <Scene />
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Tools />
      <Certificates />
      <div style={{ height: "200vh" }} />
    </>
  )
}

export default App