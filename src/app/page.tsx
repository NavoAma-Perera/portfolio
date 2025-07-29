"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center overflow-hidden relative">

<div className="flex flex-col items-center justify-center z-20">
  {/* Large welcome text */}
  <h1
    className={`text-5xl md:text-8xl font-bold mb-8 transition-all duration-1500 leading-none ${
      isLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
    }`}
  >
    <span className="bg-gradient-to-r from-[#FFD300] via-white to-[#FFD300] bg-clip-text text-transparent animate-gradient-x">
      Welcome to my portfolio!
    </span>
  </h1>

  {/* Loading dots */}
  <div className="flex justify-center items-center space-x-6 mb-6">
    <div className="w-6 h-6 bg-[#FFD300] rounded-full animate-bounce shadow-lg shadow-[#FFD300]/50"></div>
    <div
      className="w-6 h-6 bg-white rounded-full animate-bounce shadow-lg shadow-white/50"
      style={{ animationDelay: "0.2s" }}
    ></div>
    <div
      className="w-6 h-6 bg-[#FFD300] rounded-full animate-bounce shadow-lg shadow-[#FFD300]/50"
      style={{ animationDelay: "0.4s" }}
    ></div>
  </div>

  {/* Explore Me button below loading dots */}
  <Button
    variant="outline" // assuming shadcn/ui or you can style manually
    className="border-[#FFD300] bg-transparent text-white hover:bg-[#FFD300] hover:text-black transition-colors duration-300"
  >
    <Link href="/home" className="w-full h-full block text-center">
      Explore me
    </Link>
  </Button>
</div>

      </div>
    </>
  )
}
