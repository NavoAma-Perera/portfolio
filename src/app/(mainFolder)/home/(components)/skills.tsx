"use client"

import { Lightbulb, Code2 } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import { cn } from "@/lib/utils"
import { motion, useInView } from "framer-motion"

export default function SkillsSection() {
  const softSkills = [
    "Communication",
    "Problem-solving",
    "Teamwork & Collaboration",
    "Adaptability",
    "Time Management",
    "Critical Thinking",
    "Active Listening",
    "Empathy",
    "Creativity",
    "Leadership",
  ]

  const [visibleSkills, setVisibleSkills] = useState<string[]>([])
  const [mounted, setMounted] = useState(false)

  const skillRef = useRef(null)
  const toolsRef = useRef(null)

  const isSkillInView = useInView(skillRef, { once: true, margin: "-100px" })
  const isToolsInView = useInView(toolsRef, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isSkillInView) {
      setMounted(true)
      softSkills.forEach((skill, index) => {
        setTimeout(() => {
          setVisibleSkills((prev) => [...prev, skill])
        }, 100 * index)
      })
    }
  }, [isSkillInView])

  const getSkillPosition = (index: number, total: number, radius: number) => {
    const angleOffset = Math.PI / 2
    const angle = (index / total) * 2 * Math.PI - angleOffset
    const x = radius * Math.cos(angle)
    const y = radius * Math.sin(angle)
    return {
      left: `calc(50% + ${x}px)`,
      top: `calc(50% + ${y}px)`,
      transform: `translate(-50%, -50%)`,
    }
  }

  return (
    <>
      {/* Skills Section */}
      <motion.section
        ref={skillRef}
        initial={{ opacity: 0, y: 100 }}
        animate={isSkillInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="w-full py-12 md:py-24 lg:py-12 flex items-center justify-center min-h-screen"
      >
        <div className="container px-4 md:px-6 flex flex-col items-center justify-center space-y-8 text-center">
          <div className="flex items-center justify-center gap-3 text-white text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter">
            <Code2 className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">Skills & Technologies</h2>
          </div>
          <div className="relative flex items-center justify-center w-full">
            <div className="hidden md:flex relative w-[500px] md:w-[600px] lg:w-[700px] h-[500px] md:h-[600px] lg:h-[700px] items-center justify-center">
             <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
  <Lightbulb className="h-20 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 text-[#FFD300] drop-shadow-[0_0_20px_#FFD300] animate-lightbulb-glow" />
  <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">Skills</h2>
</div>

              {softSkills.map((skill, index) => (
                <div
                  key={skill}
                  className={cn(
                    "absolute flex items-center justify-center bg-gray-800 text-white rounded-full border-2 border-gray-600 shadow-md font-semibold text-center hover:bg-gray-700 hover:border-[#FFD300] transition-all duration-300",
                    "w-24 h-24 text-xs md:w-28 md:h-28 md:text-sm lg:w-32 lg:h-32 lg:text-base",
                    mounted && visibleSkills.includes(skill) ? "opacity-100 animate-skill-appear" : "opacity-0"
                  )}
                  style={
                    mounted
                      ? {
                          ...getSkillPosition(index, softSkills.length, 250),
                          animationDelay: `${0.1 * index}s`,
                        }
                      : {}
                  }
                  title={skill}
                >
                  <span className="px-1 leading-tight">
                    {skill.length > 12
                      ? skill.split(" ").map((word, i) => (
                          <span key={i} className="block">
                            {word}
                          </span>
                        ))
                      : skill}
                  </span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4 md:hidden">
              {softSkills.map((skill, index) => (
                <div
                  key={skill}
                  className={cn(
                    "flex items-center justify-center bg-gray-800 text-white rounded-full border-2 border-gray-600 shadow font-semibold text-center hover:bg-gray-700 hover:border-[#FFD300] transition-all duration-300",
                    "w-28 h-28 text-xs sm:w-32 sm:h-32 sm:text-sm",
                    mounted && visibleSkills.includes(skill) ? "opacity-100 animate-skill-appear" : "opacity-0"
                  )}
                  style={{ animationDelay: `${0.1 * index}s` }}
                  title={skill}
                >
                  <span className="px-1 leading-tight">
                    {skill.length > 12
                      ? skill.split(" ").map((word, i) => (
                          <span key={i} className="block">
                            {word}
                          </span>
                        ))
                      : skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

     {/* Tools Section */}
<motion.section
  ref={toolsRef}
  initial={{ opacity: 0, y: 100 }}
  animate={isToolsInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.8 }}
  className="w-full py-10 md:py-24 lg:py-20 text-white flex flex-col items-center justify-center"
>
  <div className="container px-4 md:px-6 text-center space-y-12">
    <h2 className="text-3xl md:text-4xl font-bold">Technologies</h2>

    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 md:gap-10 justify-center items-center">
      {[
        { name: "HTML", src: "/html.svg" },
        { name: "CSS", src: "/css.svg" },
        { name: "JavaScript", src: "/js.svg" },
        { name: "Next.js", src: "/next.svg" },
        { name: "NestJS", src: "/nest.svg" },
        { name: "Java (OOP)", src: "/java.svg" },
        { name: "MySQL", src: "/mysql.svg" },
        { name: "Canva", src: "/canva.svg" },
        { name: "Figma", src: "/figma.svg" },
      ].map((tool) => (
        <div
          key={tool.name}
          className="flex flex-col items-center space-y-2 group transition-transform hover:scale-105"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gray-200 rounded-full flex items-center justify-center shadow-md border-4 border-gray-600 group-hover:border-[#FFD300] transition">
            <img
              src={tool.src}
              alt={tool.name}
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain"
            />
          </div>
          <span className="text-xs sm:text-sm md:text-base font-medium">{tool.name}</span>
        </div>
      ))}
    </div>
  </div>
</motion.section>

    </>
  )
}
