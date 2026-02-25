import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hover, setHover] = useState(false)

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const addHover = () => setHover(true)
    const removeHover = () => setHover(false)

    window.addEventListener("mousemove", move)

    const hoverElements = document.querySelectorAll(
      "a, button, .hover-target"
    )

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", addHover)
      el.addEventListener("mouseleave", removeHover)
    })

    return () => {
      window.removeEventListener("mousemove", move)
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", addHover)
        el.removeEventListener("mouseleave", removeHover)
      })
    }
  }, [])

  return (
    <>
      {/* Outer Glow */}
      <motion.div
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          scale: hover ? 1.8 : 1
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{
          position: "fixed",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          border: "2px solid var(--accent)",
          pointerEvents: "none",
          zIndex: 9999,
          mixBlendMode: "difference"
        }}
      />

      {/* Inner Dot */}
      <motion.div
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          scale: hover ? 0.5 : 1
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        style={{
          position: "fixed",
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: "var(--accent)",
          pointerEvents: "none",
          zIndex: 9999
        }}
      />
    </>
  )
}