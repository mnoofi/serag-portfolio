import { useRef } from "react"

export default function MagneticButton({ children }) {
  const ref = useRef()

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    ref.current.style.transform = `
      translate(${x * 0.4}px, ${y * 0.4}px)
      scale(1.1)
    `
  }

  const reset = () => {
    ref.current.style.transform = "translate(0px,0px) scale(1)"
  }

  return (
    <button
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{
        padding: "16px 36px",
        border: "1px solid var(--accent)",
        background: "var(--accent-soft)",
        color: "var(--accent)",
        borderRadius: "14px",
        cursor: "pointer",
        fontSize: "16px",
        backdropFilter: "blur(10px)",
        transition: "all 0.2s ease",
        boxShadow: "0 0 20px rgba(0,255,179,0.2)"
      }}
    >
      {children}
    </button>
  )
}