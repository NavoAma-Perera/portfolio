"use client"

import {
 
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
  Lightbulb,
  Laptop2Icon,

} from "lucide-react"
import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

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
  const isSkillInView = useInView(skillRef, { once: true, margin: "-100px" })
  const isToolsInView = useInView(toolsRef, { once: true, margin: "-100px" })

  const [activeTech, setActiveTech] = useState<string | null>(null)

  const handleTechClick = (techName: string) => {
    if (activeTech === techName) {
      setActiveTech(null)
    } else {
      setActiveTech(techName)
    }
  }

  return (
    <div className="min-h-screen py-12">
     
      <motion.section
        ref={skillRef}
        initial={{ opacity: 0, y: 100 }}
        animate={isSkillInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="w-full py-12 md:py-24 lg:py-12 flex items-center justify-center"
      >
        <div className="container px-4 md:px-6 flex flex-col items-center justify-center space-y-10 sm:space-y-12 text-center">
          <div className="flex flex-row items-center justify-center gap-4 text-white mb-8">
            <Lightbulb className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              <span className="text-white">What I </span>
              <span className="bg-gradient-to-r from-cyan-400 via-white to-yellow-400 bg-clip-text text-transparent">
                Bring to the
              </span>
              <span className="text-white"> table</span>
            </h2>
          </div>

          <div className="block md:hidden w-full max-w-4xl">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {softSkills.map((skill) => {
                const IconComponent = skill.icon
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={isSkillInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: 0.1,
                      ease: "easeOut",
                    }}
                    className="flex flex-col items-center justify-center backdrop-blur-xl bg-white/5 text-white rounded-xl border border-white/20 shadow-xl font-semibold text-center transition-all duration-300 ease-in-out p-4 h-28 hover:border-cyan-400/70 hover:bg-white/10"
                  >
                    <IconComponent className="h-7 w-7 text-cyan-400 mb-2" />
                    <span className="text-sm leading-tight">{skill.name}</span>
                  </motion.div>
                )
              })}
            </div>
          </div>

          <div className="hidden md:block relative w-full max-w-6xl">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500 animate-scroll hover:pause-animation">
                {softSkills.concat(softSkills).map((skill, idx) => {
                  const IconComponent = skill.icon
                  return (
                    <div
                      key={`${idx}-${skill.name}`}
                      className="flex flex-col items-center justify-center backdrop-blur-xl bg-white/5 text-white rounded-xl border border-white/20 shadow-xl font-semibold text-center transition-all duration-300 ease-in-out p-6 h-32 hover:border-cyan-400/70 hover:bg-white/10 flex-shrink-0 w-64 mx-3"
                      title={skill.name}
                    >
                      <IconComponent className="h-8 w-8 text-cyan-400 mb-2" />
                      <span className="text-base leading-tight">{skill.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

   
      <motion.section
        ref={toolsRef}
        initial={{ opacity: 0, y: 100 }}
        animate={isToolsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="w-full py-10 md:py-24 lg:py-20 text-white flex flex-col items-center justify-center"
      >
        <div className="container px-4 md:px-6 text-center space-y-12">
          <div className="flex flex-row items-center justify-center gap-4 text-white mb-8">
            <Laptop2Icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              <span className="text-white">My </span>
              <span className="bg-gradient-to-r from-cyan-400 via-white to-yellow-400 bg-clip-text text-transparent">
                Tech
              </span>
              <span className="text-white"> Arsenal</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "Frontend",
                tools: [
                  { name: "HTML", icon: "/html.svg" },
                  { name: "CSS", icon: "/css.svg" },
                  { name: "JavaScript", icon: "/js.svg" },
                  { name: "React", icon: "/react.png" },
                  { name: "React Native", icon: "/native.png" },
                  { name: "Next.js", icon: "/next.svg" },
                ],
              },
              {
                category: "Backend",
                tools: [
                  { name: "NestJS", icon: "/nest.svg" },
                  { name: "Java (OOP)", icon: "/java.svg" },
                ],
              },
              {
                category: "Database",
                tools: [
                  { name: "MySQL", icon: "/mysql.svg" },
                  { name: "MongoDB", icon: "/mongo.png" },
                ],
              },
              {
                category: "Design",
                tools: [
                  { name: "Canva", icon: "/canva.svg" },
                  { name: "Figma", icon: "/figma.svg" },
                ],
              },
              {
                category: "Tools & Collaboration",
                tools: [
                  { name: "GitHub", icon: "/git.png" },
                  { name: "VS Code", icon: "/vs.png" },
                  { name: "Jira", icon: "/jira.png" },
                  { name: "ClickUp", icon: "/click.png" },
                ],
              },
            ].map((section, sectionIndex) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 50 }}
                animate={isToolsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/20 hover:border-cyan-400/70 hover:bg-white/10 transition-all duration-300 shadow-2xl relative"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6 text-center border-b border-white/20 pb-3 relative z-10">
                  {section.category}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 relative z-10">
                  {section.tools.map((tool, toolIndex) => (
                    <motion.div
                      key={tool.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isToolsInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: sectionIndex * 0.1 + toolIndex * 0.05 }}
                      className="flex flex-col items-center group transition-transform hover:scale-110 relative"
                      onClick={() => handleTechClick(tool.name)}
                    >
                      <div className="w-16 h-16 sm:w-20 sm:h-20 backdrop-blur-md bg-white/10 rounded-xl flex items-center justify-center shadow-lg border border-white/20 group-hover:border-cyan-400/70 group-hover:bg-white/15 transition-all duration-300 ease-in-out relative cursor-pointer">
                        <Image
                          src={tool.icon || "/placeholder.svg"}
                          alt={tool.name}
                          width={40}
                          height={40}
                          className="object-contain w-10 h-10 sm:w-12 sm:h-12"
                        />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-gray-300 group-hover:text-cyan-400 text-center mt-2 transition-colors duration-300">
                        {tool.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  )
}