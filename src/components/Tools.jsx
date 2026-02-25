import { motion } from "framer-motion"
import {
  FaPython,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaGitAlt,
  FaDocker,
  FaLinux
} from "react-icons/fa"

import {
  SiTensorflow,
  SiScikitlearn,
  SiArduino,
  SiTailwindcss,
  SiVite,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiPandas,
  SiNumpy,
  SiOpencv,
  SiThreedotjs,
  SiJupyter,
  SiFirebase

} from "react-icons/si"

const tools = [
  // Programming
  {
    category: "Programming",
    name: "JavaScript",
    icon: <SiJavascript size={42} />,
    description: "Core Language",
    color: "#F7DF1E"
  },
  {
    category: "Programming",
    name: "Python",
    icon: <FaPython size={42} />,
    description: "Core Language",
    color: "#3776AB"
  },

  // Frontend
  {
    category: "Frontend",
    name: "React",
    icon: <FaReact size={42} />,
    description: "Frontend Library",
    color: "#61DAFB"
  },
  {
    category: "Frontend",
    name: "Three.js",
    icon: <SiThreedotjs size={42} />,
    description: "3D Web Graphics",
    color: "#ffffff"
  },
  {
    category: "Frontend",
    name: "HTML",
    icon: <FaHtml5 size={42} />,
    description: "Web Structure",
    color: "#E34F26"
  },
  {
    category: "Frontend",
    name: "CSS",
    icon: <FaCss3Alt size={42} />,
    description: "Web Styling",
    color: "#1572B6"
  },
  {
    category: "Frontend",
    name: "Tailwind",
    icon: <SiTailwindcss size={42} />,
    description: "Utility CSS",
    color: "#38BDF8"
  },
  {
    category: "Frontend",
    name: "Vite",
    icon: <SiVite size={42} />,
    description: "Build Tool",
    color: "#646CFF"
  },

  // Backend
  {
   category: "Backend",
  name: "Firebase",
  icon: <SiFirebase size={42} />,
  description: "Cloud Backend",
  color: "#FFCA28"
},
  {
    category: "Backend",
    name: "Node.js",
    icon: <FaNodeJs size={42} />,
    description: "Runtime Environment",
    color: "#339933"
  },

  // AI & Data
  {
    category: "AI & Data",
    name: "Scikit-learn",
    icon: <SiScikitlearn size={42} />,
    description: "Machine Learning",
    color: "#F7931E"
  },
  {
    category: "AI & Data",
    name: "TensorFlow",
    icon: <SiTensorflow size={42} />,
    description: "Deep Learning",
    color: "#FF6F00"
  },
  {
    category: "AI & Data",
    name: "Pandas",
    icon: <SiPandas size={42} />,
    description: "Data Analysis",
    color: "#150458"
  },
  {
    category: "AI & Data",
    name: "NumPy",
    icon: <SiNumpy size={42} />,
    description: "Scientific Computing",
    color: "#013243"
  },
  {
    category: "AI & Data",
    name: "OpenCV",
    icon: <SiOpencv size={42} />,
    description: "Computer Vision",
    color: "#5C3EE8"
  },
  {
    category: "AI & Data",
    name: "Jupyter",
    icon: <SiJupyter size={42} />,
    description: "Notebook Environment",
    color: "#F37626"
  },

  // Database
  {
    category: "Database",
    name: "MySQL",
    icon: <SiMysql size={42} />,
    description: "Relational Database",
    color: "#00758F"
  },
  {
    category: "Database",
    name: "MongoDB",
    icon: <SiMongodb size={42} />,
    description: "NoSQL Database",
    color: "#47A248"
  },

  // Dev Tools
  {
    category: "Dev Tools",
    name: "Git",
    icon: <FaGitAlt size={42} />,
    description: "Version Control",
    color: "#F05032"
  },
  {
    category: "Dev Tools",
    name: "GitHub",
    icon: <FaGithub size={42} />,
    description: "Code Hosting",
    color: "#ffffff"
  },
  {
    category: "Dev Tools",
    name: "Docker",
    icon: <FaDocker size={42} />,
    description: "Containerization",
    color: "#2496ED"
  },
  {
    category: "Dev Tools",
    name: "Linux",
    icon: <FaLinux size={42} />,
    description: "Operating System",
    color: "#FCC624"
  },

  // Hardware
  {
    category: "Hardware",
    name: "Arduino",
    icon: <SiArduino size={42} />,
    description: "Embedded Systems",
    color: "#00979D"
  }
]

export default function Tools() {
  return (
    <section
    id="tools"
      style={{
        padding: "120px 8%",
        minHeight: "100vh",
        position: "relative",
        zIndex: 2
      }}
    >
      <h2
        style={{
          fontSize: "clamp(32px, 5vw, 48px)",
          marginBottom: "60px"
        }}
      >
        Tools & Technologies
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "30px"
        }}
      >
        {tools.map((tool, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.2 }}
            style={{
              background: "#0f172a",
              borderRadius: "18px",
              padding: "30px 20px",
              border: "1px solid rgba(255,255,255,0.06)",
              textAlign: "center",
              cursor: "pointer",
              transition: "0.3s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.border = `1px solid ${tool.color}`
              e.currentTarget.style.boxShadow = `0 0 25px ${tool.color}33`
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.border =
                "1px solid rgba(255,255,255,0.06)"
              e.currentTarget.style.boxShadow = "none"
            }}
          >
            <div
              style={{
                fontSize: "12px",
                color: "#888",
                marginBottom: "14px",
                textTransform: "uppercase",
                letterSpacing: "1px"
              }}
            >
              {tool.category}
            </div>

            <div
              style={{
                color: tool.color,
                marginBottom: "16px"
              }}
            >
              {tool.icon}
            </div>

            <div
              style={{
                fontSize: "18px",
                fontWeight: 600,
                marginBottom: "6px"
              }}
            >
              {tool.name}
            </div>

            <div
              style={{
                fontSize: "13px",
                color: "#aaa"
              }}
            >
              {tool.description}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}