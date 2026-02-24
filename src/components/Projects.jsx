import { motion, useMotionValue, useTransform } from "framer-motion"
import { useState } from "react"
import { FaGithub } from "react-icons/fa"

const projects = [
  {
    title: "Weather Analytics & ML Prediction Platform",
    description:
      "End-to-end ML pipeline for rain prediction with data preprocessing, feature engineering, model comparison, and interactive dashboard.",
    tech: ["Python", "Scikit-learn", "Random Forest", "Dash", "Plotly"],
    details:
      "Built a complete data science workflow including missing value handling, feature engineering (seasonal grouping & feature differences), model comparison (Logistic Regression vs Random Forest), feature importance analysis, and real-time prediction interface using Dash.",
    github: "https://github.com/mnoofi/weather-data-analysis-dashboard"
  },
  {
    title: "Autonomous Fire Fighting Robot",
    description:
      "Embedded robotics system for real-time fire detection and suppression.",
    tech: ["Arduino", "Ultrasonic Sensor", "Flame Sensors", "L298N", "Servo Motor"],
    details:
      "Designed and implemented an autonomous robot capable of detecting fire direction, avoiding obstacles, and activating a water pump system using servo-based targeting and relay-controlled suppression.",
    github: null
  }
]

function ProjectCard({ project }) {
  const [open, setOpen] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useTransform(mouseY, [-100, 100], [6, -6])
  const rotateY = useTransform(mouseX, [-100, 100], [-6, 6])

  function handleMove(e) {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    mouseX.set(x)
    mouseY.set(y)
  }

  function reset() {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <>
      <motion.div
        onMouseMove={handleMove}
        onMouseLeave={reset}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          padding: "40px",
          borderRadius: "24px",
          background: "var(--glass)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.08)"
        }}
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <h3
          style={{
            fontSize: "22px",
            marginBottom: "16px",
            color: "var(--accent)"
          }}
        >
          {project.title}
        </h3>

        <p
          style={{
            fontSize: "16px",
            lineHeight: 1.6,
            color: "var(--text-secondary)",
            marginBottom: "20px"
          }}
        >
          {project.description}
        </p>

        {/* Tech Stack */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            marginBottom: "25px"
          }}
        >
          {project.tech.map((tech) => (
            <span
              key={tech}
              style={{
                padding: "6px 12px",
                borderRadius: "12px",
                fontSize: "12px",
                background: "var(--accent-soft)",
                color: "var(--accent)",
                border: "1px solid var(--accent)"
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <button
            onClick={() => setOpen(true)}
            style={{
              padding: "10px 20px",
              borderRadius: "12px",
              border: "1px solid var(--accent)",
              background: "transparent",
              color: "var(--accent)",
              cursor: "pointer"
            }}
          >
            View Details
          </button>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: "42px",
                height: "42px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.05)",
                color: "white",
                textDecoration: "none",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = "1px solid var(--accent)"
                e.currentTarget.style.color = "var(--accent)"
                e.currentTarget.style.boxShadow =
                  "0 0 15px rgba(0,255,179,0.4)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border =
                  "1px solid rgba(255,255,255,0.15)"
                e.currentTarget.style.color = "white"
                e.currentTarget.style.boxShadow = "none"
              }}
            >
              <FaGithub size={18} />
            </a>
          )}
        </div>
      </motion.div>

      {/* Modal */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 999
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "600px",
              maxWidth: "90%",
              padding: "40px",
              borderRadius: "20px",
              background: "var(--bg-secondary)",
              border: "1px solid rgba(255,255,255,0.1)"
            }}
          >
            <h2 style={{ marginBottom: "20px", color: "var(--accent)" }}>
              {project.title}
            </h2>

            <p style={{ lineHeight: 1.6, color: "var(--text-secondary)" }}>
              {project.details}
            </p>

            <button
              onClick={() => setOpen(false)}
              style={{
                marginTop: "30px",
                padding: "10px 20px",
                borderRadius: "10px",
                border: "1px solid var(--accent)",
                background: "transparent",
                color: "var(--accent)",
                cursor: "pointer"
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        minHeight: "100vh",
        padding: "120px 8%",
        position: "relative",
        zIndex: 2
      }}
    >
      <h2
        style={{
          fontSize: "clamp(32px, 5vw, 48px)",
          marginBottom: "60px",
          letterSpacing: "-0.02em"
        }}
      >
        Featured Engineering Projects
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "40px"
        }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}