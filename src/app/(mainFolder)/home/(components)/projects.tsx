"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { SquareKanban } from "lucide-react"

const projects = [
 
  {
    title: "Sign-Bridge",
    description: "A group project using Arduino microcontrollers, flex sensors, and GSM modules to create a smart glove for mute people. The glove converts sign language gestures into audible voice messages, enabling seamless communication.",
    image: "/projects/sign-bridge.png", // Add your project image here
    link: "", // You can add a demo or video link if available
    github: "", // Add repo link if public
  },
   {
    title: "IoT Dashboard",
    description: (
      <>
        A group-developed IoT Dashboard web and mobile app built with{" "}
        <strong>Next.js</strong>, <strong>NestJS</strong>, <strong>MongoDB</strong>,{" "}
        <strong>Shadcn UI</strong>, <strong>Tailwind CSS</strong>, and{" "}
        <strong>AWS services</strong>. It enables remote device management, configuration, real-time visualization, alerting, and report generation, providing a comprehensive solution for IoT device monitoring and control.
      </>
    ),
    image: "/projects/iot-dashboard.png",
    link: "",  // you can add a live demo link if you have one
    github: "https://github.com/MohamedASHRIF/CeyAgro-IOT",
  },
  {
  title: "Portfolio Website",
  description: (
    <>
      An individual project built with <strong>Next.js</strong>, <strong>Shadcn UI</strong>, and <strong>Tailwind CSS</strong>. This portfolio showcases my skills, experience, and projects with a clean, responsive, and modern UI designed to highlight my work effectively.
    </>
  ),
  image: "/projects/portfolio.png",
  link: "",  // add live link if you have
  github: "", // add GitHub link if you want
}
  // Add more projects...
]

export default function Projects() {
  return (
    <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
      {/* Section Heading */}
      <div className="flex items-center justify-center gap-3 text-white text-3xl sm:text-4xl font-bold tracking-tight mb-12">
        <SquareKanban className="w-8 h-8 text-white" />
        <h2 className="text-white">Projects</h2>
      </div>

      {/* Project Cards Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 rounded-xl border border-gray-700 hover:border-[#FFD300] p-5 shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Image */}
            <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Title */}
            <h3 className="text-xl text-[#FFD300] font-semibold mb-2">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 text-md mb-4">
              {project.description}
            </p>

            {/* Links */}
            <div className="flex gap-4">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white  hover:text-[#FFD300]"
                >
                  Live Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white hover:text-[#FFD300]"
                >
                  GitHub
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
