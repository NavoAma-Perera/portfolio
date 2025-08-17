"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { SquareKanban } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const projects = [
  {
    title: "Sign-Bridge",
    description:
      "A group project using Arduino microcontrollers, flex sensors, and GSM modules to create a smart glove for mute people. The glove converts sign language gestures into audible voice messages, enabling seamless communication.",
    tech: ["Arduino", "Flex Sensors", "GSM Modules"],
    image: "/sign.png",
    link: "https://drive.google.com/file/d/19E4dzU6I4VLTdJhyJWsAXYRmgEEQi6Lb/view?usp=drive_link",
    github: "",
  },
  {
    title: "E-Watch – E-commerce Website",
    description:
      "A group project that delivers a full-fledged online watch store with product browse, cart functionality, user authentication, and order management. It offers a practical e-commerce experience from both user and admin perspectives.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    image: "/ecom.png",
    link: "https://drive.google.com/file/d/19E4dzU6I4VLTdJhyJWsAXYRmgEEQi6Lb/view?usp=drive_link",
    github: "https://github.com/NavoAma-Perera/E-Com-Web",
  },
  {
    title: "IoT Dashboard",
    description:
      "A group-developed IoT Dashboard web and mobile app. It enables remote device management, configuration, real-time visualization, alerting, and report generation.",
    tech: ["Next.js", "NestJS", "MongoDB", "Shadcn UI", "Tailwind CSS", "AWS"],
    image: "/iot.png",
    link: "",
    github: "https://github.com/MohamedASHRIF/CeyAgro-IOT",
  },
  {
    title: "Portfolio Website",
    description:
      "An individual project built with Next.js, Shadcn UI, and Tailwind CSS. This portfolio showcases my skills, experience, and projects with a clean, responsive, and modern UI designed to highlight my work effectively.",
    tech: ["Next.js", "Shadcn UI", "Tailwind CSS"],
    image: "/portfolio.png",
    link: "",
    github: "https://github.com/NavoAma-Perera/portfolio",
  },
  {
    title: "UI/UX Work",
    description:
      "Explore my full range of UI and UX design projects on Behance, showcasing wireframes, prototypes, and visual design work created with Canva, Figma, and other tools.",
    tech: ["Figma", "Canva", "Wireframes", "Prototypes"],
    image: "/ui.png",
    link: "https://www.behance.net/navoperera",
    github: "",
  },
]

export default function Projects() {
  return (
    <section className="py-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
      {/* Section Heading */}
      <div className="flex items-center justify-center gap-3 text-white text-3xl sm:text-4xl font-bold tracking-tight mb-12">
        <SquareKanban className="w-8 h-8 text-white" />
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          What<span className="bg-gradient-to-r from-[#FFD300] via-yellow-300 to-yellow-500 bg-clip-text text-transparent"> I have Built</span>
        </h2>
      </div>

      {/* Carousel Section */}
      <Carousel opts={{ align: "start", loop: true }} className="w-full max-w-5xl mx-auto relative">
        <CarouselContent className="-ml-4">
          {projects.map((project, index) => (
            <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
              <motion.div
                className="bg-gray-900 rounded-xl border border-gray-700 hover:border-[#FFD300] p-5 shadow-lg h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Image */}
                <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>

                {/* Title */}
                <h3 className="text-xl text-[#FFD300] font-semibold mb-2">{project.title}</h3>

                {/* Description */}
                <p className="text-gray-300 text-md mb-2">{project.description}</p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech?.map((tech, idx) => (
                    <span
                      key={idx}
                      className="border border-white text-white text-xs font-semibold px-2 py-2 rounded-lg transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-[#FFD300]/60 text-white text-sm font-medium rounded-lg hover:bg-yellow-400 transition-colors duration-200"
                    >
                      {project.title.includes("UI/UX Work") ? "View Behance" : "Live Demo"}
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gray-700 text-white text-sm font-medium rounded-lg hover:bg-gray-600 border border-gray-600 hover:border-gray-500 transition-colors duration-200"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Controls Wrapper */}
        <div className="carousel-controls">
          {/* Desktop arrows (on sides) */}
          <CarouselPrevious className="carousel-previous text-white bg-gray-800 hover:bg-gray-700 hover:text-[#FFD300] w-10 h-10 rounded-full items-center justify-center hidden md:flex" />
          <CarouselNext className="carousel-next text-white bg-gray-800 hover:bg-gray-700 hover:text-[#FFD300] w-10 h-10 rounded-full items-center justify-center hidden md:flex" />

          {/* Mobile arrows (below cards) */}
          <div className="flex justify-center mt-3 space-x-4 md:hidden">
            <CarouselPrevious className="text-white bg-gray-800 hover:bg-gray-700 hover:text-[#FFD300] w-12 h-12 rounded-full flex items-center justify-center relative left-0 top-0 transform-none" />
            <CarouselNext className="text-white bg-gray-800 hover:bg-gray-700 hover:text-[#FFD300] w-12 h-12 rounded-full flex items-center justify-center relative right-0 top-0 transform-none" />
          </div>
        </div>

        {/* Custom Styles */}
        <style jsx>{`
          /* Desktop: arrows on sides */
          @media (min-width: 768px) {
            .carousel-previous {
              position: absolute;
              left: -1rem;
              top: 50%;
              transform: translateY(-50%);
            }

            .carousel-next {
              position: absolute;
              right: -1rem;
              top: 50%;
              transform: translateY(-50%);
            }
          }
        `}</style>
      </Carousel>
    </section>
  )
}
