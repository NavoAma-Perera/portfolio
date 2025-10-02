"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Send, User } from "lucide-react"
import { FaLinkedin, FaGithub, FaBehance } from "react-icons/fa"
import { motion } from "framer-motion"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    setErrorMsg("")

    try {
      const res = await fetch("https://formspree.io/f/mwpqbjnj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setStatus("success")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setStatus("error")
        setErrorMsg("Failed to send message. Please try again later.")
      }
    } catch {
      setStatus("error")
      setErrorMsg("An unexpected error occurred. Please try again later.")
    }
  }

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center px-6 md:px-16 py-20 text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-12 text-center flex items-center gap-3"
      >
        <Send size={28} className="text-white" />
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          Get in <span className="bg-gradient-to-r from-cyan-400 via-white to-yellow-400 bg-clip-text text-transparent">Touch</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl"
      >
        <motion.div
          initial={{ opacity: 0, x: 0, y: 100 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6 flex flex-col justify-center items-center md:items-start"
        >
          <p className="text-xl mb-4 text-white">Feel free to reach out or connect with me:</p>

          <div className="flex gap-6 flex-wrap justify-center md:justify-start">
            <a
              href="mailto:pereranavo20011212@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black p-4 rounded-full shadow-md hover:scale-110 hover:bg-yellow-300 transition"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/navodya-perera-3285712a7"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black p-4 rounded-full shadow-md hover:scale-110 hover:bg-yellow-300 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>

            <a
              href="https://www.behance.net/navoperera"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black p-4 rounded-full shadow-md hover:scale-110 hover:bg-yellow-300 transition"
              aria-label="Behance"
            >
              <FaBehance size={24} />
            </a>

            <a
              href="https://github.com/NavoAma-Perera"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black p-4 rounded-full shadow-md hover:scale-110 hover:bg-yellow-300 transition"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 0, y: 100 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="backdrop-blur-xl bg-white/5 p-8 rounded-2xl border border-white/20 shadow-2xl w-full md:self-start mt-4 md:mt-0 relative"
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
          
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="flex items-center gap-3">
              <User size={20} className="text-cyan-400" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md backdrop-blur-md bg-white/10 text-white border border-white/30 focus:outline-none focus:border-cyan-400 placeholder:text-gray-400 transition-colors"
                required
                suppressHydrationWarning
              />
            </div>

            <div className="flex items-center gap-3">
              <Mail size={20} className="text-cyan-400" />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md backdrop-blur-md bg-white/10 text-white border border-white/30 focus:outline-none focus:border-cyan-400 placeholder:text-gray-400 transition-colors"
                required
                suppressHydrationWarning
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm text-cyan-300">
                Message
              </label>
              <textarea
                name="message"
                rows={6}
                placeholder="Type your message..."
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md backdrop-blur-md bg-white/10 text-white border border-white/30 focus:outline-none focus:border-cyan-400 placeholder:text-gray-400 transition-colors"
                required
              />
            </div>

            {status === "sending" && <p className="text-cyan-400 font-medium">Sending message...</p>}
            {status === "success" && <p className="text-white font-medium">Message sent successfully! Thank you.</p>}
            {status === "error" && <p className="text-red-500 font-medium">{errorMsg}</p>}

           <button
  type="submit"
  disabled={status === "sending"}
  className="flex items-center gap-2 px-6 py-3 rounded-md border-2 border-cyan-400 text-cyan-400 bg-white/10 backdrop-blur-md 
             hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
  suppressHydrationWarning
>
  <Send size={18} /> Send Message
</button>

          </form>
        </motion.div>
      </motion.div>
    </section>
  )
}
