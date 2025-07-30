"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { Paintbrush, ClipboardList, BookOpenText,Code2 } from "lucide-react"
import { motion } from "framer-motion"

export default function Aboutme() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    let timeout: NodeJS.Timeout
      const animatedWords = ["UI Designing", "Project Management","Web development"]

    const currentWord = animatedWords[currentWordIndex]

    if (isTyping) {
      if (charIndex < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + currentWord[charIndex])
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
          setDisplayedText((prev) => prev.slice(0, -1))
          setCharIndex((prev) => prev - 1)
        }, 50)
      } else {
        setCurrentWordIndex((prev) => (prev + 1) % animatedWords.length)
        setIsTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [charIndex, isTyping, currentWordIndex])

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
  <span
    className="inline-flex items-baseline h-[1.5em] w-[320px] sm:w-[360px] md:w-[400px] relative overflow-hidden"
  >
    <span
      className="text-white whitespace-nowrap"
      style={{ filter: "drop-shadow(0 4px 8px rgba(255, 211, 0, 0.3))" }}
    >
      {displayedText}
    </span>
    {displayedText.length > 0 && (
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
  I&apos;m an undergraduate passionate about crafting seamless user experiences and turning ideas into impactful digital solutions. My interests lie at the intersection of{" "}
  <span className="font-bold text-white">UI design</span>,{" "}
  <span className="font-bold text-white">web development</span>, and{" "}
  <span className="font-bold text-white">project management</span> — where creativity meets strategy.
</p>

<p className="text-gray-200 text-xl leading-relaxed">
  I often go by <span className="text-[#FFD300] font-semibold">SNAP</span>, a creative identity inspired by my initials. It is a simple way I reflect my approach — sharp, intentional, and personal.
  I enjoy designing intuitive, user-first interfaces, developing responsive websites, and bringing structure to ideas through thoughtful planning and collaboration.
</p>

<p className="text-gray-200 text-xl leading-relaxed">
  Always eager to learn, create, and grow — both as a designer, developer, and future leader.
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
<div className="order-first md:order-last relative w-96 h-96 mx-auto md:mx-0 lg:ml-30 flex justify-center md:justify-end">
  {/* Outer ring */}
  <div className="absolute inset-0 rounded-full border-4 border-[#FFD300]/60 z-0"></div>

  {/* Top dot (0°) */}
  <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md z-10" />

  {/* Bottom-right dot (120°) */}
  <div className="absolute right-[14%] bottom-[14%] transform translate-x-1/2 translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md z-10" />

  {/* Bottom-left dot (240°) */}
  <div className="absolute left-[14%] bottom-[14%] transform -translate-x-1/2 translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md z-10" />

  {/* Profile image (centered inside outer ring) */}
  <div className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full border-4 border-[#FFD300] overflow-hidden flex items-center justify-center -translate-x-1/2 -translate-y-1/2 bg-black z-10">
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

     {/* Education Section */}
<section className="py-12 md:py-16 lg:py-12 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-6">
  {/* Heading and Icon - centered */}
        <div className="flex items-center justify-center gap-3 text-white text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter">
    <BookOpenText className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white " />
    <h2 className="text-3xl md:text-4xl font-bold text-white">Education</h2>
  </div>

  {/* Cards container */}
 <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 justify-center items-center mt-8">     
  <motion.div       
    className="flex justify-center"       
    initial={{ opacity: 0, y: 50 }}        
    transition={{ duration: 0.6 }}       
    whileInView={{ opacity: 1, y: 0 }}             
    viewport={{ once: true }}     
  >       
    <div className="w-80 h-80 bg-transparent border-4 border-gray-700 rounded-full flex flex-col justify-center items-center text-center hover:border-[#FFD300] transition-all duration-300  p-8 shadow-lg">         
      <h3 className="text-lg md:text-xl text-[#FFD300] font-semibold mb-3">             
        Christ King College Pannipitiya           
      </h3>         
      <p className="text-gray-200 text-sm mb-2">2007–2018</p>           
      <p className="text-gray-200 text-sm font-medium mb-1">G.C.E Ordinary Level:</p>             
      <p className="text-gray-200 text-sm">8A 1B</p>             
    </div>     
  </motion.div>      

  <motion.div       
    className="flex justify-center"       
    initial={{ opacity: 0, y: 50 }}       
    whileInView={{ opacity: 1, y: 0 }}       
    transition={{ duration: 0.6, delay: 0.2 }}       
    viewport={{ once: true }}     
  >       
    <div className="w-80 h-80 bg-transparent border-4 border-gray-700 rounded-full flex flex-col justify-center hover:border-[#FFD300] transition-all duration-300  items-center text-center p-8 shadow-lg">         
      <h3 className="text-lg md:text-xl text-[#FFD300] font-semibold mb-3">             
        Rajasinghe Central College Hanwella           
      </h3>         
      <p className="text-gray-200 text-sm mb-2">2018–2020</p>           
      <p className="text-gray-200 text-sm font-medium mb-1">G.C.E Advanced Level:</p>             
      <p className="text-gray-200 text-sm">Biology (A) Chemistry (B) Physics (B)</p>               
      <p className="text-gray-200 text-sm">Z score: 1.8062</p>             
    </div>     
  </motion.div>      

  <motion.div       
    className="flex justify-center"       
    initial={{ opacity: 0, y: 50 }}       
    whileInView={{ opacity: 1, y: 0 }}              
    transition={{ duration: 0.6, delay: 0.4 }}       
    viewport={{ once: true }}     
  >       
    <div className="w-80 h-80 bg-transparent border-4 border-gray-700 rounded-full flex flex-col justify-center hover:border-[#FFD300] transition-all duration-300  items-center text-center p-8 shadow-lg">         
      <h3 className="text-lg md:text-xl text-[#FFD300] font-semibold mb-3">University of Moratuwa</h3>         
      <p className="text-gray-200 text-sm mb-2">2023 (Present)</p>           
      <p className="text-gray-200 text-sm">BSc. (Hons) Information Technology (Undergraduate)</p>         
    </div>     
  </motion.div>   
</div>
</section>

    </motion.div>
  )
}
