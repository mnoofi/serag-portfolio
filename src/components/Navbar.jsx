import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function Navbar() {
  const [active, setActive] = useState("")

  const sections = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "tools", label: "Tools & Technologies" },
    { id: "certificates", label: "Certificates" }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-40% 0px -40% 0px"
      }
    )

    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        position: "fixed",
        top: 20,
        left: 0,
        right: 0,
        margin: "0 auto",
        width: "min(1100px, 90%)",
        padding: "14px 35px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "rgba(10,15,25,0.9)",
        backdropFilter: "blur(20px)",
        borderRadius: "20px",
        border: "1px solid rgba(255,255,255,0.08)",
        zIndex: 1000
      }}
    >
      <div style={{ fontWeight: 700, color: "var(--accent)" }}>
        Mohamed Serag
      </div>

      <div style={{ display: "flex", gap: "30px" }}>
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            style={{
              color: active === section.id ? "var(--accent)" : "white",
              textDecoration: "none",
              fontSize: active === section.id ? "16px" : "14px",
              fontWeight: 500,
              position: "relative",
              transition: "0.3s"
            }}
          >
            {section.label}

            {active === section.id && (
              <span
                style={{
                  position: "absolute",
                  bottom: "-6px",
                  left: 0,
                  width: "100%",
                  height: "2px",
                  background: "var(--accent)"
                }}
              />
            )}
          </a>
        ))}
      </div>
    </motion.nav>
  )
}