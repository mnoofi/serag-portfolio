import { motion } from "framer-motion"

const skills = [
  "Machine Learning",
  "Deep Learning",
  "Computer Vision",
  "NLP",
  "React",
  "Three.js",
  "Python",
  "TensorFlow"
]

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 8%",
        position: "relative",
        zIndex: 2
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{
          fontSize: "clamp(32px, 5vw, 48px)",
          marginBottom: "60px",
          letterSpacing: "-0.02em"
        }}
      >
        Core Expertise
      </motion.h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "30px"
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            style={{
              padding: "30px",
              borderRadius: "18px",
              background: "var(--glass)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.08)",
              fontSize: "18px",
              transition: "all 0.3s ease"
            }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  )
}