"use client"
import React, { useRef, useEffect} from "react"
import { motion, useInView } from "framer-motion"
import Aboutme from "./(components)/aboutme"
import SkillsSection from "./(components)/skills"
import Projects from "./(components)/projects"
import Contact from "./(components)/contact"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  pulseOffset: number
}

function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationFrameRef = useRef<number | undefined>(undefined)
  const colorPhaseRef = useRef<number>(0)
  const zoomRef = useRef<number>(1.5)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      
   
      const particleCount = canvas.width > 768 ? 80 : 45
      const particles: Particle[] = []
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.7,
          vy: (Math.random() - 0.5) * 0.7,
          radius: Math.random() * 2.5 + 2,
          pulseOffset: Math.random() * Math.PI * 2,
        })
      }
      particlesRef.current = particles
    }
    
    updateCanvasSize()
    window.addEventListener("resize", updateCanvasSize)

    const animate = () => {
      const particles = particlesRef.current
      
      colorPhaseRef.current += 0.008
      
      const colorCycle = Math.sin(colorPhaseRef.current * 0.5)
      const colorPhase = (colorCycle + 1) / 2
      
      let r: number, g: number, b: number
      if (colorPhase < 0.25) {
        const t = colorPhase / 0.25
        r = Math.floor(0 + t * 255)
        g = 255
        b = Math.floor(255 - t * 55)
      } else if (colorPhase < 0.5) {
        const t = (colorPhase - 0.25) / 0.25
        r = 255
        g = 255
        b = Math.floor(200 - t * 200)
      } else if (colorPhase < 0.75) {
        const t = (colorPhase - 0.5) / 0.25
        r = 255
        g = 255
        b = Math.floor(0 + t * 200)
      } else {
        const t = (colorPhase - 0.75) / 0.25
        r = Math.floor(255 - t * 255)
        g = 255
        b = Math.floor(200 + t * 55)
      }
      
      const rotationAngle = colorPhaseRef.current * 0.7
      
      zoomRef.current += 0.004
      if (zoomRef.current > 2.5) {
        zoomRef.current = 1.5
      }
      const zoomPhase = zoomRef.current
      
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      
      ctx.fillStyle = '#0a0a0f'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      const gridZoom = zoomPhase * 0.7
      ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${0.03 * gridZoom})`
      ctx.lineWidth = 1
      const gridSize = 60
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        const dx = particle.x - centerX
        const dy = particle.y - centerY
        const distance = Math.sqrt(dx * dx + dy * dy)
        const angle = Math.atan2(dy, dx) + Math.sin(rotationAngle) * 0.03
        const zoomedDistance = distance * zoomPhase
        const drawX = centerX + Math.cos(angle) * zoomedDistance
        const drawY = centerY + Math.sin(angle) * zoomedDistance

        const pulse = Math.sin(colorPhaseRef.current * 3 + particle.pulseOffset) * 0.5 + 1

        const glowRadius = particle.radius * pulse * 4
        const gradient = ctx.createRadialGradient(drawX, drawY, 0, drawX, drawY, glowRadius)
        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0.9)`)
        gradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, 0.4)`)
        gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`)
        
        ctx.beginPath()
        ctx.arc(drawX, drawY, glowRadius, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
        
        ctx.beginPath()
        ctx.arc(drawX, drawY, particle.radius * pulse, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 1)`
        ctx.fill()
      })

      const maxDistance = 180
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.7
            
            const ix = particles[i].x
            const iy = particles[i].y
            const jx = particles[j].x
            const jy = particles[j].y
            
            const dxi = ix - centerX
            const dyi = iy - centerY
            const disti = Math.sqrt(dxi * dxi + dyi * dyi)
            const anglei = Math.atan2(dyi, dxi) + Math.sin(rotationAngle) * 0.03
            const zoomedDisti = disti * zoomPhase
            const drawXi = centerX + Math.cos(anglei) * zoomedDisti
            const drawYi = centerY + Math.sin(anglei) * zoomedDisti
            
            const dxj = jx - centerX
            const dyj = jy - centerY
            const distj = Math.sqrt(dxj * dxj + dyj * dyj)
            const anglej = Math.atan2(dyj, dxj) + Math.sin(rotationAngle) * 0.03
            const zoomedDistj = distj * zoomPhase
            const drawXj = centerX + Math.cos(anglej) * zoomedDistj
            const drawYj = centerY + Math.sin(anglej) * zoomedDistj
            
            ctx.beginPath()
            ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`
            ctx.lineWidth = 1.5
            ctx.moveTo(drawXi, drawYi)
            ctx.lineTo(drawXj, drawYj)
            ctx.stroke()
            
            const pulseSpeed = colorPhaseRef.current * 6 + i + j
            const pulsePosition = (pulseSpeed % 1)
            const pulseX = drawXi + (drawXj - drawXi) * pulsePosition
            const pulseY = drawYi + (drawYj - drawYi) * pulsePosition
            
            if (distance < maxDistance * 0.7) {
              ctx.beginPath()
              ctx.arc(pulseX, pulseY, 2.5, 0, Math.PI * 2)
              ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity * 1.5})`
              ctx.fill()
            }
            
            if (distance < maxDistance * 0.5) {
              ctx.beginPath()
              ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${opacity * 0.3})`
              ctx.lineWidth = 4
              ctx.moveTo(drawXi, drawYi)
              ctx.lineTo(drawXj, drawYj)
              ctx.stroke()
            }
          }
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", updateCanvasSize)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}

function AnimatedSection({
  id,
  children,
  fullHeight = false,
}: {
  id: string
  children: React.ReactNode
  fullHeight?: boolean
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.section
      id={id}
      ref={ref}
      className={`${fullHeight ? "min-h-screen relative" : "relative"} z-10`}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  )
}

export default function HomePage() {
  return (
    <>
      <AnimatedBackground />

      <AnimatedSection id="about" fullHeight={true}>
        <Aboutme />
      </AnimatedSection>

      <AnimatedSection id="skills" fullHeight={true}>
        <SkillsSection />
      </AnimatedSection>

      <AnimatedSection id="projects">
        <Projects/>
      </AnimatedSection>

      <AnimatedSection id="contact">
        <Contact/>
      </AnimatedSection>
    </>
  )
}