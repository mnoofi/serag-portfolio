import Scene from "./components/Scene"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Tools from "./components/Tools"
import Certificates from "./components/Certificates"
import CustomCursor from "./components/CustomCursor"

function App() {
  return (
    <>
    <CustomCursor />
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