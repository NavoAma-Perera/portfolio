"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center overflow-hidden relative">
      <div className="flex flex-col items-center justify-center z-20">
        {/* Animated S N A P letters */}
        <div className="flex space-x-6 mb-12">
          {["S", "N", "A", "P"].map((letter, i) => (
            <span
              key={i}
              className="text-6xl md:text-8xl font-extrabold text-white animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
              aria-label={letter}
            >
              {letter}
            </span>
          ))}
        </div>

        {/* Explore Me button below animated letters */}
        <Link href="/home" aria-label="Explore me page">
          <Button
            variant="outline"
            className="mt-20 px-10 py-8 text-lg md:text-xl rounded-3xl border-2 border-[#FFD300] bg-transparent text-white hover:bg-[#FFD300] hover:text-black transition-colors duration-300"
          >
            Explore me
          </Button>
        </Link>
      </div>
    </div>
  )
}
