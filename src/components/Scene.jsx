import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useRef, useEffect } from "react"
import * as THREE from "three"

function AnimatedGrid(){
  const mesh = useRef()
  const mouse = useRef({ x: 0, y: 0 })
  const materialRef = useRef()

 useEffect(() => {
  const handleMouseMove = (e) => {
    mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
    mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1
  }

  window.addEventListener("mousemove", handleMouseMove)

  return () => {
    window.removeEventListener("mousemove", handleMouseMove)
  }
}, [])

  useFrame(({ clock }) => {
    if (!mesh.current) return

    const time = clock.getElapsedTime()

    // موجة
    const position = mesh.current.geometry.attributes.position

    for (let i = 0; i < position.count; i++) {
      const x = position.getX(i)
      const y = position.getY(i)

      const wave =
        Math.sin(x * 0.5 + time) * 0.3 +
        Math.cos(y * 0.5 + time) * 0.3

      position.setZ(i, wave)
    }

    position.needsUpdate = true

    // rotation ناعمة
mesh.current.rotation.x +=
  (mouse.current.y * 0.25 - mesh.current.rotation.x) * 0.08
mesh.current.rotation.y +=
  (mouse.current.x * 0.25 - mesh.current.rotation.y) * 0.08

// parallax position عكسي خفيف
mesh.current.position.x +=
  (-mouse.current.x * 0.5 - mesh.current.position.x) * 0.05
mesh.current.position.y +=
  (-mouse.current.y * 0.3 - mesh.current.position.y) * 0.05
  
  // fade with scroll
const scrollY = window.scrollY
const fadeStart = 0
const fadeEnd = window.innerHeight

let progress = scrollY / fadeEnd
progress = Math.min(progress, 1)

let opacity = 1 - progress

if (materialRef.current) {
  materialRef.current.opacity = opacity
}
})

  return (
    <mesh ref={mesh} rotation={[-0.6, 0, 0]}>
      <planeGeometry args={[30, 30, 80, 80]} />
     <meshBasicMaterial
  ref={materialRef}
  wireframe
  color="#00ffb3"
  opacity={0.7}
  transparent
  
/>
    </mesh>
  )
}




function ScrollCamera() {
  const { camera } = useThree()
  const mouse = useRef({ x: 0, y: 0 })
  

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  useFrame(() => {
    // حركة كاميرا خفيفة جدًا
    camera.position.x += (mouse.current.x * 0.5 - camera.position.x) * 0.05
    camera.position.y += (5 + mouse.current.y * 0.3 - camera.position.y) * 0.05
  })

  return null
}
function FloatingSphere({ position }) {
  const mesh = useRef()

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    mesh.current.position.y = position[1] + Math.sin(t + position[0]) * 0.5
    mesh.current.rotation.x += 0.01
    mesh.current.rotation.y += 0.01
  })

  return (
    <mesh ref={mesh} position={position}>
      <sphereGeometry args={[0.4, 32, 32]} />
      <meshStandardMaterial
        color="#00ffb3"
        opacity={0.4}
        transparent
        emissive="#00ffb3"
        emissiveIntensity={0.5}
      />
    </mesh>
  )
}
function DynamicLight() {
  const lightRef = useRef()
  const { viewport } = useThree()

  useFrame(({ mouse }) => {
    if (!lightRef.current) return

    lightRef.current.position.x = mouse.x * viewport.width * 0.5
    lightRef.current.position.y = mouse.y * viewport.height * 0.5
    lightRef.current.position.z = 5
  })

  return (
    <pointLight
      ref={lightRef}
      intensity={3}
      distance={20}
      color="#00ffb3"
    />
  )
}

export default function Scene() {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1
      }}
      camera={{ position: [0, 5, 10], fov: 60 }}
    >
      <ambientLight intensity={0.5} />
      <DynamicLight />
      <ScrollCamera />
      <AnimatedGrid />
      <FloatingSphere position={[-3, 2, 0]} />
<FloatingSphere position={[3, 1, -2]} />
<FloatingSphere position={[0, 3, -4]} />
    </Canvas>
  )
}