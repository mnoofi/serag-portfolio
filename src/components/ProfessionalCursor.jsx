import { useEffect, useRef } from "react"

export default function ProfessionalCursor() {
  const cursorRef = useRef(null)

  useEffect(() => {
    let mouseX = 0
    let mouseY = 0
    let currentX = 0
    let currentY = 0

    const speed = 0.35 // سريع جدًا

    const move = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animate = () => {
      currentX += (mouseX - currentX) * speed
      currentY += (mouseY - currentY) * speed

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`
      }

      requestAnimationFrame(animate)
    }

    window.addEventListener("mousemove", move)
    animate()

    return () => window.removeEventListener("mousemove", move)
  }, [])

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "22px",
        height: "22px",
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 9999,
        transform: "translate(-50%, -50%)",
        //background: "rgba(20,20,25,0.85)",
        //border: "1px solid rgba(255,255,255,0.15)",
        background: "transparent",
        border: "1px solid rgba(255,255,255,0.4)",
        boxShadow: "none",
        backdropFilter: "blur(6px)"
}}
    />
  )
}