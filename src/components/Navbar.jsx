import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function Navbar() {
  const [light, setLight] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMode = () => {
    document.body.classList.toggle("light")
    setLight(!light)
  }

  return (
    <motion.nav
  initial={{ y: -100, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8 }}
  style={{
    position: "fixed",
    top: 20,
    left: 0,
    right: 0,
    margin: "0 auto",
    //width: "min(1100px, 90%)",
    padding: scrolled ? "10px 30px" : "15px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(20px)",
    borderRadius: "20px",
    border: "1px solid rgba(255,255,255,0.1)",
    zIndex: 1000,
    transition: "all 0.3s ease",
  }}
>
      <div style={{ fontWeight: "bold", color: "#00ffb3" }}>
        Mohamed Serag
      </div>

      <div style={{ display: "flex", gap: "20px" }}>
        <a href="#skills" style={{ color: "white", textDecoration: "none" }}>
          Skills
        </a>
        <a href="#projects" style={{ color: "white", textDecoration: "none" }}>
          Projects
        </a>
        <button
          onClick={toggleMode}
          style={{
            background: "transparent",
            border: "1px solid #00ffb3",
            color: "#00ffb3",
            borderRadius: "8px",
            padding: "5px 12px",
            cursor: "pointer",
          }}
        >
          Mode
        </button>
      </div>
    </motion.nav>
  )
}