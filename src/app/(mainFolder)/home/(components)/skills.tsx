"use client"

import {
  Code2,
  Wrench,
  MessageCircle,
  Puzzle,
  Users,
  RefreshCw,
  Clock,
  Brain,
  Ear,
  Heart,
  Palette,
  Crown,
} from "lucide-react"
import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import classnames from "classnames"

const softSkills = [
  { name: "Communication", icon: MessageCircle },
  { name: "Problem-solving", icon: Puzzle },
  { name: "Teamwork & Collaboration", icon: Users },
  { name: "Adaptability", icon: RefreshCw },
  { name: "Time Management", icon: Clock },
  { name: "Critical Thinking", icon: Brain },
  { name: "Active Listening", icon: Ear },
  { name: "Empathy", icon: Heart },
  { name: "Creativity", icon: Palette },
  { name: "Leadership", icon: Crown },
]

export default function SkillsSection() {
  const skillRef = useRef<HTMLDivElement | null>(null)
  const toolsRef = useRef<HTMLDivElement | null>(null)
  const scrollContainerRef = useRef<HTMLDivElement | null>(null)
  const isSkillInView = useInView(skillRef, { once: true, margin: "-100px" })
  const isToolsInView = useInView(toolsRef, { once: true, margin: "-100px" })

  const [isPaused, setIsPaused] = useState(false)
  const [currentTransform, setCurrentTransform] = useState(0)
  const [activeTech, setActiveTech] = useState<string | null>(null)

  const handleTechClick = (techName: string) => {
    if (activeTech === techName) {
      setActiveTech(null) // Hide if already active
    } else {
      setActiveTech(techName) // Show the clicked technology
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
<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
  What I  <span className="bg-gradient-to-r from-[#FFD300] via-yellow-300 to-yellow-500 bg-clip-text text-transparent">Bring to the </span>table
</h2>          </div>

          <div className="block md:hidden w-full max-w-4xl">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {softSkills.map((skill, index) => {
                const IconComponent = skill.icon
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={isSkillInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: 0.1 * index,
                      ease: "easeOut",
                    }}
                    className="flex flex-col items-center justify-center bg-gray-800 text-white rounded-xl border-2 border-gray-600 shadow-lg font-semibold text-center transition-all duration-300 ease-in-out p-4 h-28 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-400/10"
                  >
                    <IconComponent className="h-7 w-7 text-yellow-400 mb-2" />
                    <span className="text-sm leading-tight">{skill.name}</span>
                  </motion.div>
                )
              })}
            </div>
          </div>

          <div className="hidden md:block relative w-full max-w-6xl">
            <div className="overflow-hidden">
              <div
                ref={scrollContainerRef}
                className={classnames(
                  "flex transition-transform duration-500",
                  !isPaused && "animate-scroll hover:pause-animation",
                )}
                style={{ transform: isPaused ? `translateX(${currentTransform}px)` : undefined }}
              >
                {/* First set of skills */}
                {softSkills.map((skill, index) => {
                  const IconComponent = skill.icon
                  return (
                    <div
                      key={`first-${skill.name}`}
                      className="flex flex-col items-center justify-center bg-gray-800 text-white rounded-xl border-2 border-gray-600 shadow-lg font-semibold text-center transition-all duration-300 ease-in-out p-6 h-32 hover:border-yellow-400 flex-shrink-0 w-64 mx-3"
                      title={skill.name}
                    >
                      <IconComponent className="h-8 w-8 text-yellow-400 mb-2" />
                      <span className="text-base leading-tight">{skill.name}</span>
                    </div>
                  )
                })}
                {/* Duplicate set for seamless loop */}
                {softSkills.map((skill, index) => {
                  const IconComponent = skill.icon
                  return (
                    <div
                      key={`second-${skill.name}`}
                      className="flex flex-col items-center justify-center bg-gray-800 text-white rounded-xl border-2 border-gray-600 shadow-lg font-semibold text-center transition-all duration-300 ease-in-out p-6 h-32 hover:border-yellow-400 flex-shrink-0 w-64 mx-3"
                      title={skill.name}
                    >
                      <IconComponent className="h-8 w-8 text-yellow-400 mb-2" />
                      <span className="text-base leading-tight">{skill.name}</span>
                    </div>
                  )
                })}
              </div>
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
          <div className="flex flex-row items-center justify-center gap-4 text-white mb-8">
            <Wrench className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
  My <span className="bg-gradient-to-r from-[#FFD300] via-yellow-300 to-yellow-500 bg-clip-text text-transparent">Tech</span> Arsenal
</h2>
          </div>
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
                className="flex flex-col items-center group transition-transform hover:scale-105 relative"
                onClick={() => handleTechClick(tool.name)}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-gray-800 rounded-full flex items-center justify-center shadow-lg border border-gray-700 group-hover:border-yellow-400 transition-all duration-300 ease-in-out relative cursor-pointer">
                  <Image
                    src={tool.icon || "/placeholder.svg"}
                    alt={tool.name}
                    width={40}
                    height={40}
                    className="object-contain w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
                  />
                  <div
                    className={classnames(
                      "absolute inset-0 bg-black/80 rounded-full flex items-center justify-center transition-opacity duration-300 ease-in-out",
                      "opacity-0 group-hover:opacity-100",
                      "md:opacity-0",
                      activeTech === tool.name && "opacity-100",
                    )}
                  >
                    <span className="text-xs sm:text-sm font-medium text-yellow-400 text-center px-2">{tool.name}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  )
}
