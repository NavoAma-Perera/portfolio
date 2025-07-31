"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

import Aboutme from "./(components)/aboutme"
import Skills from "./(components)/skills"
import Projects from "./(components)/projects"
import Contact from "./(components)/contact"

function AnimatedSection({ 
  id, 
  children, 
  fullHeight = false 
}: { 
  id: string; 
  children: React.ReactNode;
  fullHeight?: boolean;
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.section
      id={id}
      ref={ref}
      className={fullHeight ? "min-h-screen" : ""}
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