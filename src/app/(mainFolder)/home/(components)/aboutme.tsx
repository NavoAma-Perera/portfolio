"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { Paintbrush, ClipboardList, Code2, GraduationCap } from "lucide-react"
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
      const animatedWords = ["Business Analysis", "UI Designing", "Web Development"]

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
     
        <div className="max-w-screen-xl mx-auto backdrop-blur-xl bg-white/5 rounded-3xl border border-white/20 shadow-2xl p-8 md:p-12">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
          
          <div className="relative z-10 grid md:grid-cols-[1.3fr_1fr] items-center gap-8 lg:gap-10">
         
            <div className="space-y-6">
              <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold leading-tight mt-10">
                <span className="text-cyan-400">Hi , I am </span>
                <span className="text-yellow-400">Amali Perera</span>
              </h1>
              <h2 className="text-2xl md:text-2xl lg:text-3xl font-semibold text-cyan-300 min-h-[3rem] flex flex-wrap items-start">
                <span className="whitespace-nowrap mr-2">Enthusiast in</span>
                <span className="inline-flex items-baseline h-[1.5em] w-[320px] sm:w-[360px] md:w-[400px] relative overflow-hidden">
                  <span
                    className="bg-gradient-to-r from-cyan-400 via-white to-yellow-400 bg-clip-text text-transparent whitespace-nowrap font-semibold"
                    style={{ filter: "drop-shadow(0 4px 8px rgba(34, 211, 238, 0.3))" }}
                  >
                    {mounted ? displayedText : "Business Analysis"}
                  </span>
                  {mounted && displayedText && (
                    <span
                      className="absolute pointer-events-none z-10"
                      style={{
                        left: `${displayedText.length * 0.55}em`,
                        transition: "left 0.05s ease-out",
                      }}
                    >
                      {currentWordIndex === 0 && <ClipboardList className="text-white w-4 h-4" />}
                      {currentWordIndex === 1 && <Paintbrush className="text-white w-4 h-4" />}
                      {currentWordIndex === 2 && <Code2 className="text-white w-4 h-4" />}
                    </span>
                  )}
                </span>
              </h2>

              <p className="text-cyan-100 text-xl leading-relaxed">
                I&apos;m an undergraduate passionate about crafting seamless user experiences and turning ideas into
                impactful digital solutions. My interests span <span className="font-bold text-white">UI design</span>,{" "}
                <span className="font-bold text-white">web development</span>, and{" "}
                <span className="font-bold text-white">business analysis</span> — where creativity meets strategy.
              </p>

              <p className="text-cyan-100 text-xl leading-relaxed">
                I go by <span className="text-yellow-400 font-semibold">SNAP</span>, reflecting my approach — sharp,
                intentional, and personal. I enjoy designing intuitive interfaces, developing responsive websites, and
                bringing structure to ideas through thoughtful collaboration. Always eager to learn, create, and grow as a
                designer, developer, and future leader.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                
                <a
                  href="/Amali Perera CV.zip"
                  download
                  className="px-6 py-3 border-2 border-cyan-400 text-cyan-400 rounded-full font-medium hover:bg-cyan-400 hover:text-black transition duration-300"
                >
                  Download My CVs
                </a>
              </div>
            </div>

          
            <div className="order-first md:order-last relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 mx-auto md:mx-0 lg:ml-30 flex justify-center md:justify-end">
              <div className="absolute top-1/2 left-1/2 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden flex items-center justify-center -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-gray-800 to-gray-900 border-4 border-cyan-400/50">
                <div className="relative w-50 h-75 md:w-55 md:h-90">
                  <Image
                    src="/me.png"
                    alt="Amali Perera's profile picture"
                    fill
                    style={{ objectFit: "cover" }}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-12 md:py-16 lg:py-12 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-6">
      
        <div className="flex items-center justify-center gap-3 text-white text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter mb-16">
          <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            My Educ<span className="bg-gradient-to-r from-cyan-400 via-white to-yellow-400 bg-clip-text text-transparent">ation Milestone</span>
          </h2>        
        </div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            className="absolute left-1/2 -translate-x-0.5 top-0 w-1 bg-gradient-to-b from-cyan-400 to-transparent"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          />

          <div className="space-y-16 sm:space-y-20">
            {/* Uom*/}
            <motion.div
              className="relative flex justify-center md:justify-start"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
            >
            
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 top-6 w-4 h-4 bg-cyan-400 rounded-full border-4 border-gray-900 z-10"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
              />
              
             
              <div className="w-full max-w-sm sm:max-w-md md:max-w-lg md:w-5/12 md:pr-8 md:text-right pt-2">
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-cyan-400/30 hover:border-cyan-400/70 transition-all duration-300 shadow-xl shadow-cyan-400/30 flex items-start gap-4">
                  <div className="flex-shrink-0 w-18 h-19 rounded-lg overflow-hidden border border-gray-700">
                    <Image
                      src="/mora.png"
                      alt="University of Moratuwa Logo"
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                  
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-2">University of Moratuwa</h3>
                    <p className="text-gray-400 text-sm mb-3">2023 – Present</p>
                    <div className="space-y-1">
                      <p className="text-gray-300 font-medium">BSc. (Hons) Information Technology</p>
                      <p className="text-gray-200">Undergraduate</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* hrcc */}
            <motion.div
              className="relative flex justify-center md:justify-end"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, margin: "-50px" }}
            >
            
            
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 top-6 w-4 h-4 bg-cyan-400 rounded-full border-4 border-gray-900 z-10"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                viewport={{ once: true }}
              />

            
              <div className="w-full max-w-sm sm:max-w-md md:max-w-lg md:w-5/12 md:pl-8 pt-2">
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-cyan-400/30 hover:border-cyan-400/70 transition-all duration-300 shadow-xl shadow-cyan-400/30 flex items-start gap-4">
                  <div className="flex-shrink-0 w-18 h-18 rounded-lg overflow-hidden border border-gray-700">
                    <Image
                      src="/hrcc.png"
                      alt="Rajasinghe Central College Logo"
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                  
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-2">
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
              </div>
            </motion.div>

            {/* CKC */}
            <motion.div
              className="relative flex justify-center md:justify-start"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
            >
      
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 top-6 w-4 h-4 bg-cyan-400 rounded-full border-4 border-gray-900 z-10"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                viewport={{ once: true }}
              >
            
                <motion.div
                  className="absolute inset-0 bg-cyan-400 rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              </motion.div>

         
              <div className="w-full max-w-sm sm:max-w-md md:max-w-lg md:w-5/12 md:pr-8 md:text-right pt-2">
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-cyan-400/30 hover:border-cyan-400/70 transition-all duration-300 shadow-xl shadow-cyan-400/30 flex items-start gap-4">
                  <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border border-gray-700">
                    <Image
                      src="/ckc.png"
                      alt="Christ King College Logo"
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                  
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-2">
                      Christ King College Pannipitiya
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">2007–2018</p>
                    <div className="space-y-1">
                      <p className="text-gray-300 font-medium">G.C.E Ordinary Level</p>
                      <p className="text-gray-200">8A 1B</p>
                    </div>
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