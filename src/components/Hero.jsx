import { motion, useMotionValue, useTransform } from "framer-motion"
import { useEffect, useState } from "react"
import {
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaDiscord
} from "react-icons/fa"
import { MdEmail } from "react-icons/md"

export default function Hero() {

  // ===== Mouse 3D =====
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useTransform(mouseY, [-300, 300], [3, -3])
  const rotateY = useTransform(mouseX, [-300, 300], [-3, 3])

  function handleMouseMove(e) {
    const { innerWidth, innerHeight } = window
    mouseX.set(e.clientX - innerWidth / 2)
    mouseY.set(e.clientY - innerHeight / 2)
  }

  function handleMouseLeave() {
    mouseX.set(0)
    mouseY.set(0)
  }

  // ===== Typewriter =====
  const fullText = "Hi, I'm Mohamed Serag"
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const speed = isDeleting ? 40 : 80

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < fullText.length) {
        setDisplayText(fullText.substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      } 
      else if (isDeleting && charIndex > 0) {
        setDisplayText(fullText.substring(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      } 
      else if (charIndex === fullText.length && !isDeleting) {
        setTimeout(() => setIsDeleting(true), 1000)
      } 
      else if (charIndex === 0 && isDeleting) {
        setIsDeleting(false)
      }
    }, speed)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting])

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 8%",
        position: "relative",
        zIndex: 2,
        perspective: "1000px"
      }}
    >

      {/* LEFT */}
      <motion.div
        style={{
          maxWidth: "600px",
          zIndex: 2,
          rotateX,
          rotateY
        }}
      >
        {/* Typewriter */}
        <h3 style={{
          fontSize: "22px",
          color: "var(--accent)",
          marginBottom: "20px",
          minHeight: "30px"
        }}>
          {displayText}
          <span style={{ borderRight: "2px solid var(--accent)", marginLeft: "4px" }} />
        </h3>

        <h1 style={{
          fontSize: "clamp(42px,6vw,64px)",
          fontWeight: 800,
          marginBottom: "20px"
        }}>
          AI Engineer & Web Developer
        </h1>

        <p style={{
          fontSize: "18px",
          color: "rgba(255,255,255,0.75)",
          marginBottom: "30px",
          lineHeight: 1.6
        }}>
          I build intelligent AI systems, robotics solutions,
          and immersive web experiences with real-world impact.
        </p>

        {/* Buttons */}
        <div style={{ display: "flex", gap: "20px", alignItems: "center", flexWrap: "wrap" }}>

          {/* Download CV */}
          <a
            href="/seragcv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "12px 24px",
              borderRadius: "14px",
              background: "var(--accent)",
              color: "#000",
              fontWeight: 600,
              textDecoration: "none",
              boxShadow: "0 0 20px rgba(0,255,179,0.4)"
            }}
          >
            Download CV
          </a>

          {/* Social Icons */}
          <div style={{ display: "flex", gap: "22px", fontSize: "22px" }}>

  {[
    {
      icon: <FaPhoneAlt />,
      link: "https://wa.me/+201098306412",
      color: "#25D366"
    },
    {
      icon: <MdEmail />,
      link: "mailto:mohamed.serag5671@gmail.com",
      color: "#EA4335"
    },
    {
      icon: <FaGithub />,
      link: "https://github.com/mnoofi",
      color: "#ffffff"
    },
    {
      icon: <FaLinkedin />,
      link: "https://linkedin.com/in/mohamed-serag1",
      color: "#0A66C2"
    },
    {
      icon: <FaDiscord />,
      link: "https://discord.com/users/mnf_1",
      color: "#5865F2"
    }
  ].map((item, index) => (
    <motion.a
      key={index}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{
        scale: 1.25,
        y: -4
      }}
      transition={{ type: "spring", stiffness: 300 }}
      style={{
        position: "relative",
        color: "#aaa",
        width: "42px",
        height: "42px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        cursor: "pointer",
        transition: "0.3s"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = item.color
        e.currentTarget.style.boxShadow = `0 0 18px ${item.color}88`
        e.currentTarget.style.background = `${item.color}22`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "#aaa"
        e.currentTarget.style.boxShadow = "none"
        e.currentTarget.style.background = "transparent"
      }}
    >
      {item.icon}
    </motion.a>
  ))}

</div>
        </div>
      </motion.div>

 {/* RIGHT IMAGE */}
<motion.div
  style={{
    position: "relative",
    width: "420px",
    height: "520px",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    zIndex: 2,
    perspective: "1000px"
  }}
>
  {/* Soft green aura behind you */}
  <div
    style={{
      position: "absolute",
      width: "480px",
      height: "480px",
      borderRadius: "50%",
      background:
        "radial-gradient(circle, rgba(0,255,179,0.35) 0%, rgba(0,255,179,0.15) 40%, transparent 70%)",
      filter: "blur(70px)",
      bottom: "40px",
      zIndex: 1
    }}
  />

  {/* Ground shadow */}
  <div
    style={{
      position: "absolute",
      bottom: "10px",
      width: "260px",
      height: "40px",
      background: "rgba(0,0,0,0.7)",
      filter: "blur(30px)",
      borderRadius: "50%",
      zIndex: 1
    }}
  />

  {/* Your PNG */}
  <motion.img
    src="/sorasora.png"
    alt="Mohamed Serag"
    style={{
      position: "relative",
      zIndex: 2,
      width: "100%",
      height: "100%",
      objectFit: "contain",
      filter: "drop-shadow(0 50px 90px rgba(0,0,0,0.8))"
    }}
    whileHover={{
      rotateY: 5,
      rotateX: -3,
      scale: 1.03
    }}
    transition={{ type: "spring", stiffness: 120 }}
  />
</motion.div>
    </section>
  )
}