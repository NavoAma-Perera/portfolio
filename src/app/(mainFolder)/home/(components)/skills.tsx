"use client"

import { Lightbulb, Code2 } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

// Move softSkills outside component to avoid useEffect warnings
const softSkills: string[] = [
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

export default function SkillsSection() {
  const [visibleSkills, setVisibleSkills] = useState<string[]>([])
  const [mounted, setMounted] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const skillRef = useRef<HTMLDivElement | null>(null)
  const toolsRef = useRef<HTMLDivElement | null>(null)
  const isSkillInView = useInView(skillRef, { once: true, margin: "-100px" })
  const isToolsInView = useInView(toolsRef, { once: true, margin: "-100px" })

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (isSkillInView && isClient) {
      setMounted(true)
      softSkills.forEach((skill, index) => {
        setTimeout(() => {
          setVisibleSkills((prev) => [...prev, skill])
        }, 100 * index)
      })
    }
  }, [isSkillInView, isClient])

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
    <div className="min-h-screen py-12">
      {/* Skills Section */}
      <motion.section
        ref={skillRef}
        initial={{ opacity: 0, y: 100 }}
        animate={isSkillInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="w-full py-12 md:py-24 lg:py-12 flex items-center justify-center"
      >
        <div className="container px-4 md:px-6 flex flex-col items-center justify-center space-y-10 sm:space-y-12 text-center">
          <div className="flex flex-row items-center justify-center gap-4 text-white mb-8">
            <Code2 className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Skills & Technologies
            </h2>
          </div>

          <div className="relative flex items-center justify-center w-full">
            {/* Desktop Circular Layout */}
            <div className="hidden lg:flex relative w-[500px] lg:w-[600px] xl:w-[700px] h-[500px] lg:h-[600px] xl:h-[700px] items-center justify-center">
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-10">
                <Lightbulb className="h-20 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 text-yellow-400 drop-shadow-lg animate-pulse" />
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
                  Skills
                </h2>
              </div>

              {softSkills.map((skill, index) => (
                <div
                  key={skill}
                  className={cn(
                    "absolute flex items-center justify-center bg-gray-800 text-white rounded-full border-2 border-gray-600 shadow-md font-semibold text-center cursor-pointer transition-all duration-300 ease-in-out",
                    "w-24 h-24 text-xs md:w-28 md:h-28 md:text-sm lg:w-32 lg:h-32 lg:text-base",
                    "hover:bg-gray-700 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-400/20 hover:scale-105",
                    isClient && mounted && visibleSkills.includes(skill)
                      ? "opacity-100 animate-fadeInScale"
                      : "opacity-0"
                  )}
                  style={
                    isClient && mounted
                      ? {
                          ...getSkillPosition(index, softSkills.length, 220),
                          animationDelay: `${0.1 * index}s`,
                        }
                      : { opacity: 0 }
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

            {/* Mobile Grid Layout */}
            <div className="grid grid-cols-2 gap-4 lg:hidden mt-10 ml-20">
              {softSkills.map((skill, index) => (
                <div
                  key={skill}
                  className={cn(
                    "flex items-center justify-center bg-gray-800 text-white rounded-full border-2 border-gray-600 shadow font-semibold text-center cursor-pointer transition-all duration-300 ease-in-out",
                    "w-24 h-24 text-[10px] sm:w-28 sm:h-28 sm:text-xs",
                    "hover:bg-gray-700 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-400/20 hover:scale-105",
                    isClient && mounted && visibleSkills.includes(skill)
                      ? "opacity-100 animate-fadeInScale"
                      : "opacity-0"
                  )}
                  style={{
                    animationDelay: `${0.1 * index}s`,
                    opacity:
                      isClient && mounted && visibleSkills.includes(skill)
                        ? 1
                        : 0,
                  }}
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
              { name: "HTML", icon: "/html.svg" },
              { name: "CSS", icon: "/css.svg" },
              { name: "JavaScript", icon: "/js.svg" },
              { name: "Next.js", icon: "/next.svg" },
              { name: "NestJS", icon: "/nest.svg" },
              { name: "Java (OOP)", icon: "/java.svg" },
              { name: "MySQL", icon: "/mysql.svg" },
              { name: "Canva", icon: "/canva.svg" },
              { name: "Figma", icon: "/figma.svg" },
            ].map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isToolsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="flex flex-col items-center space-y-2 group transition-transform hover:scale-105"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-gray-800 rounded-full flex items-center justify-center shadow-lg border border-gray-700 group-hover:border-yellow-400 transition-all duration-300 ease-in-out">
                  <Image
                    src={tool.icon}
                    alt={tool.name}
                    width={56}
                    height={56}
                    className="object-contain"
                  />
                </div>
                <span className="text-sm sm:text-base md:text-lg font-medium text-gray-200 group-hover:text-yellow-400 transition-colors">
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Custom styles */}
      <style jsx>{`
        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.8) translate(-50%, -50%);
          }
          100% {
            opacity: 1;
            transform: scale(1) translate(-50%, -50%);
          }
        }

        .animate-fadeInScale {
          animation: fadeInScale 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  )
}
