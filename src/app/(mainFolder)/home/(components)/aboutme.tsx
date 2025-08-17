"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { Paintbrush, ClipboardList, BookOpenText, Code2 } from "lucide-react"
import { motion } from "framer-motion"

export default function Aboutme() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [charIndex, setCharIndex] = useState(0)
  const [mounted, setMounted] = useState(false)


  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
      const animatedWords = ["UI Designing", "Business Analysis", "Web development"]

    if (!mounted) return

    let timeout: NodeJS.Timeout
    const currentWord = animatedWords[currentWordIndex]

    if (isTyping) {
      if (charIndex < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, charIndex + 1))
          setCharIndex((prev) => prev + 1)
        }, 100)
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false)
        }, 1500)
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, charIndex - 1))
          setCharIndex((prev) => prev - 1)
        }, 50)
      } else {
        setCurrentWordIndex((prev) => (prev + 1) % animatedWords.length)
        setIsTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [charIndex, isTyping, currentWordIndex, mounted])

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="px-4 py-12 md:px-6 lg:py-24">
        <div className="grid md:grid-cols-[1.3fr_1fr] items-center gap-8 lg:gap-10 max-w-screen-xl mx-auto">
          {/* Left Column: Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold leading-tight mt-10">
              <span className="text-white">Hi , I am </span>
              <span className="text-[#FFD300]">Amali Perera</span>
            </h1>
            <h2 className="text-2xl md:text-2xl lg:text-3xl font-semibold text-white min-h-[3rem] flex flex-wrap items-start">
              <span className="whitespace-nowrap mr-2">Enthusiast in</span>
              <span className="inline-flex items-baseline h-[1.5em] w-[320px] sm:w-[360px] md:w-[400px] relative overflow-hidden">
                <span
                  className="bg-gradient-to-r from-[#FFD300] via-white to-[#FFD300] bg-clip-text text-transparent whitespace-nowrap font-semibold"
                  style={{ filter: "drop-shadow(0 4px 8px rgba(255, 211, 0, 0.3))" }}
                >
                  {mounted ? displayedText : "UI Designing"}
                </span>
                {mounted && displayedText && (
                  <span
                    className="absolute pointer-events-none z-10"
                    style={{
                      left: `${displayedText.length * 0.55}em`,
                      transition: "left 0.05s ease-out",
                    }}
                  >
                    {currentWordIndex === 0 && <Paintbrush className="text-white w-4 h-4" />}
                    {currentWordIndex === 1 && <ClipboardList className="text-white w-4 h-4" />}
                    {currentWordIndex === 2 && <Code2 className="text-white w-4 h-4" />}
                  </span>
                )}
              </span>
            </h2>

            <p className="text-gray-200 text-xl leading-relaxed">
              I&apos;m an undergraduate passionate about crafting seamless user experiences and turning ideas into
              impactful digital solutions. My interests span <span className="font-bold text-white">UI design</span>,{" "}
              <span className="font-bold text-white">web development</span>, and{" "}
              <span className="font-bold text-white">business analysis</span> — where creativity meets strategy.
            </p>

            <p className="text-gray-200 text-xl leading-relaxed">
              I go by <span className="text-[#FFD300] font-semibold">SNAP</span>, reflecting my approach — sharp,
              intentional, and personal. I enjoy designing intuitive interfaces, developing responsive websites, and
              bringing structure to ideas through thoughtful collaboration. Always eager to learn, create, and grow as a
              designer, developer, and future leader.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              {/* Download CV Button */}
              <a
                href="/Amali-Perera-CV.pdf"
                download
                className="px-6 py-3 border-3 border-[#FFD300] text-[#FFD300] rounded-full font-medium hover:bg-[#FFD300] hover:text-black transition duration-300"
              >
                Download my CV
              </a>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="order-first md:order-last relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 mx-auto md:mx-0 lg:ml-30 flex justify-center md:justify-end">
            {/* Floating Bubbles */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Large bubbles - positioned outside container bounds */}
              <motion.div
                className="absolute w-16 h-16 bg-[#FFD300]/50 rounded-full"
                style={{ top: "-10%", left: "-15%" }}
                animate={{
                  y: [0, -20, 0],
                  x: [0, 5, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute w-12 h-12 bg-white/50 rounded-full"
                style={{ top: "85%", right: "-10%" }}
                animate={{
                  y: [0, -15, 0],
                  x: [0, -3, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
              <motion.div
                className="absolute w-20 h-20 bg-white/50 rounded-full"
                style={{ top: "100%", left: "-8%" }}
                animate={{
                  y: [0, -25, 0],
                  x: [0, 8, 0],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />

              {/* Medium bubbles - positioned with more spacing */}
              <motion.div
                className="absolute w-10 h-10 bg-[#FFD300]/50 rounded-full"
                style={{ top: "15%", right: "-20%" }}
                animate={{
                  y: [0, -12, 0],
                  x: [0, -2, 0],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.8,
                }}
              />
              <motion.div
                className="absolute w-14 h-14 bg-white/50 rounded-full"
                style={{ top: "-8%", right: "15%" }}
                animate={{
                  y: [0, -18, 0],
                  x: [0, 4, 0],
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
              />

              {/* Small bubbles - positioned further from center */}
             
             
              <motion.div
                className="absolute w-8 h-8 bg-white/50 rounded-full"
                style={{ top: "-5%", left: "10%" }}
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 2,
                }}
              />
            </div>

            {/* Profile image with floating animation */}
            <motion.div
              className="absolute top-1/2 left-1/2 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden flex items-center justify-center -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-gray-800 to-gray-900 border-4 border-[#FFD300]/50"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 1, -1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <div className="relative w-50 h-75 md:w-55 md:h-90">
                <Image
                  src="/me.png"
                  alt="Amali Perera's profile picture"
                  fill
                  style={{ objectFit: "cover" }}
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <section className="py-12 md:py-16 lg:py-12 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-6">
        {/* Heading and Icon - centered */}
        <div className="flex items-center justify-center gap-3 text-white text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter mb-16">
          <BookOpenText className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
 <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
  My <span className="bg-gradient-to-r from-[#FFD300] via-yellow-300 to-yellow-500 bg-clip-text text-transparent">Education</span>
</h2>        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <motion.div
            className="absolute left-1/2 -translate-x-0.5 top-0 w-1 bg-gradient-to-b from-[#FFD300] to-transparent"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          />

          {/* Timeline Items */}
          <div className="space-y-16 sm:space-y-20">
            {/* First Education Item */}
            <motion.div
              className="relative flex justify-center md:justify-start"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Timeline Dot */}
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 top-6 w-4 h-4 bg-[#FFD300] rounded-full border-4 border-gray-900 z-10"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
              />
<div className="w-full max-w-sm sm:max-w-md md:max-w-lg md:w-5/12 md:pr-8 md:text-right pt-2">
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 hover:border-[#FFD300]/70 transition-all duration-300 shadow-xl shadow-[#FFD300]/20">
                  <h3 className="text-lg sm:text-xl font-semibold text-[#FFD300] mb-2">University of Moratuwa</h3>
                  <p className="text-gray-400 text-sm mb-3">2023 – Present</p>
                  <div className="space-y-1">
                    <p className="text-gray-300 font-medium">BSc. (Hons) Information Technology</p>
                    <p className="text-gray-200">Undergraduate</p>
                  </div>
                
                </div>
              </div>
              {/* Content Card */}
             
            </motion.div>

            {/* Second Education Item */}
            <motion.div
              className="relative flex justify-center md:justify-end"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Timeline Dot */}
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 top-6 w-4 h-4 bg-[#FFD300] rounded-full border-4 border-gray-900 z-10"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                viewport={{ once: true }}
              />

              {/* Content Card */}
              <div className="w-full max-w-sm sm:max-w-md md:max-w-lg md:w-5/12 md:pl-8 pt-2">
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 hover:border-[#FFD300]/70 transition-all duration-300 shadow-xl shadow-[#FFD300]/20">
                  <h3 className="text-lg sm:text-xl font-semibold text-[#FFD300] mb-2">
                    Rajasinghe Central College Hanwella
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">2018–2020</p>
                  <div className="space-y-1">
                    <p className="text-gray-300 font-medium">G.C.E Advanced Level</p>
                    <p className="text-gray-200">Biology (A) Chemistry (B) Physics (B)</p>
                    <p className="text-gray-200">Z Score: 1.8062</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Third Education Item */}
            <motion.div
              className="relative flex justify-center md:justify-start"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Timeline Dot - Current/Active */}
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 top-6 w-4 h-4 bg-[#FFD300] rounded-full border-4 border-gray-900 z-10"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                viewport={{ once: true }}
              >
                {/* Pulsing effect for current education */}
                <motion.div
                  className="absolute inset-0 bg-[#FFD300] rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              </motion.div>

              {/* Content Card */}
              <div className="w-full max-w-sm sm:max-w-md md:max-w-lg md:w-5/12 md:pr-8 md:text-right pt-2">
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 hover:border-[#FFD300]/70 transition-all duration-300 shadow-xl shadow-[#FFD300]/20">
                  <h3 className="text-lg sm:text-xl font-semibold text-[#FFD300] mb-2">
                    Christ King College Pannipitiya
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">2007–2018</p>
                  <div className="space-y-1">
                    <p className="text-gray-300 font-medium">G.C.E Ordinary Level</p>
                    <p className="text-gray-200">8A 1B</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
