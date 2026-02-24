import Scene from "./components/Scene"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Tools from "./components/Tools"

function App() {
  return (
    <>
      <Scene />
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Tools />
      <div style={{ height: "200vh" }} />
    </>
  )
}

export default App