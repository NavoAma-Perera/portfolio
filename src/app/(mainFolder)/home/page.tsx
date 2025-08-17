"use client"

import type React from "react"
import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"

import Aboutme from "./(components)/aboutme"
import Skills from "./(components)/skills"
import Projects from "./(components)/projects"
import Contact from "./(components)/contact"

interface Particle {
  id: number
  left: number
  duration: number
  delay: number
  isYellow: boolean
}

function AnimatedBackground() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const newParticles = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // random horizontal position
      duration: Math.random() * 10 + 20, // between 20–35s for snail speed
      delay: Math.random() * 10,
      isYellow: i % 2 !== 0,
    }))
    setParticles(newParticles)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={`particle-${particle.id}`}
          className={`absolute w-1 h-20 rounded-full shadow-lg ${
            particle.isYellow ? "bg-yellow-400 shadow-yellow-400/50" : "bg-white shadow-white/50"
          }`}
          style={{
            left: `${particle.left}%`,
            bottom: "-30px", // start just below screen
            boxShadow: particle.isYellow ? "0 0 20px rgba(251, 191, 36, 0.6)" : "0 0 20px rgba(255, 255, 255, 0.6)",
          }}
          animate={{
            y: ["0vh", "-120vh"], // rise upward off screen
            opacity: [0, 0.8, 0], // fade in & out with higher peak opacity
            scale: [0.5, 1.2, 0.5], // more pronounced twinkle effect
          }}
          transition={{
            duration: particle.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: particle.delay,
            ease: "easeOut",
          }}
        />
      ))}
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
        <Skills />
      </AnimatedSection>

      <AnimatedSection id="projects">
        <Projects />
      </AnimatedSection>

      <AnimatedSection id="contact">
        <Contact />
      </AnimatedSection>
    </>
  )
}
