import { useState } from "react"
import { motion } from "framer-motion"
import { FaTimes } from "react-icons/fa"

const certificates = [
  {
    title: "Kaggle Certificate",
    image: "/mohamed-serag-python.png"
  },
  {
    title: "HackerRank Problem Solving",
    image: "/hackerrankps.png"
  },
  {
    title: "HackerRank Python",
    image: "/hackerrankpy.png"
  }
]

export default function Certificates() {
  const [selected, setSelected] = useState(null)
  const [hovered, setHovered] = useState(null)

  return (
    <section
    id="certificates" 
    style={{ padding: "120px 8%" }}>
      <h2 style={{ fontSize: "40px", marginBottom: "60px" }}>
        Certificates
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "40px"
        }}
      >
        {certificates.map((cert, i) => (
          <motion.div
            key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            animate={{
              scale: hovered === i ? 1.04 : 1,
              opacity: hovered === null || hovered === i ? 1 : 0.6
            }}
            transition={{ duration: 0.3 }}
            style={{
              borderRadius: "20px",
              overflow: "hidden",
              background: "rgba(255,255,255,0.03)",
              border: hovered === i
                ? "1px solid var(--accent)"
                : "1px solid rgba(255,255,255,0.06)",
              backdropFilter: "blur(8px)",
              cursor: "pointer"
            }}
          >
            {/* الصورة */}
            <img
              src={cert.image}
              alt={cert.title}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                filter: hovered === i
                  ? "brightness(1)"
                  : "brightness(0.7)",
                transition: "0.3s"
              }}
            />

            <div style={{ padding: "20px", textAlign: "center" }}>
              <h3 style={{ marginBottom: "15px" }}>
                {cert.title}
              </h3>

              {/* زرار */}
              <button
                onClick={() => setSelected(cert)}
                style={{
                  padding: "10px 20px",
                  borderRadius: "12px",
                  border: "none",
                  background: "var(--accent)",
                  color: "#000",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "0.3s"
                }}
              >
                View Certificate
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.9)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 999
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              maxWidth: "90%",
              maxHeight: "90%"
            }}
          >
            {/* زرار الإغلاق */}
            <FaTimes
              onClick={() => setSelected(null)}
              style={{
                position: "absolute",
                top: "-40px",
                right: "0",
                color: "white",
                fontSize: "28px",
                cursor: "pointer"
              }}
            />

            <motion.img
              src={selected.image}
              alt="certificate"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              style={{
                width: "100%",
                maxHeight: "85vh",
                borderRadius: "12px"
              }}
            />
          </div>
        </div>
      )}
    </section>
  )
}