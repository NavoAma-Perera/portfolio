"use client"

import { Heart } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative backdrop-blur-xl bg-black/40 border-t border-white/10 text-white py-6 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-6xl mx-auto text-center"
      >
        <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
      Copyright    © {currentYear} Amali Perera [ SNAP ]
        </p>
      </motion.div>
    </footer>
  )
}