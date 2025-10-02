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
    title: "Accessible Sri Lanka",
    description:
      "A group project built to help people with disabilities and caregivers find accessible, convenient locations across Sri Lanka. Users can explore places, review accessibility features, and contribute new entries, promoting an inclusive and navigable environment.",
    tech: ["React", "Vue", "Mantine UI", "Ballerina"],
    image: "/access.png",
    link: "https://www.youtube.com/watch?feature=shared&v=4Xwdvp-wJzA",
    github: "https://github.com/HKSahanTharaka/iwb25-354-jrsharks",
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
      <div className="flex items-center justify-center gap-3 text-white text-3xl sm:text-4xl font-bold tracking-tight mb-12">
        <SquareKanban className="w-8 h-8 text-white" />
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          What<span className="bg-gradient-to-r from-cyan-400 via-white to-yellow-400 bg-clip-text text-transparent"> I have Built</span>
        </h2>
      </div>

      {/* Carousel Section */}
      <Carousel opts={{ align: "start", loop: true }} className="w-full max-w-5xl mx-auto relative">
        <CarouselContent className="-ml-4">
          {projects.map((project, index) => (
            <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
              <motion.div
                className="backdrop-blur-xl bg-white/5 rounded-xl border border-white/20 hover:border-cyan-400/70 hover:bg-white/10 p-5 shadow-2xl h-full transition-all duration-300 relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                
                <div className="relative z-10">
                
                  <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
                    <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                  </div>

                  <h3 className="text-xl text-cyan-400 font-semibold mb-2">{project.title}</h3>

                  <p className="text-gray-300 text-md mb-2">{project.description}</p>

                
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech?.map((tech, idx) => (
                      <span
                        key={idx}
                        className="backdrop-blur-md bg-white/10 border border-white/30 text-white text-xs font-semibold px-2 py-2 rounded-lg hover:border-cyan-400/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-cyan-400/60 text-white text-sm font-medium rounded-lg hover:bg-cyan-400 transition-colors duration-200"
                      >
                        {project.title.includes("UI/UX Work") ? "View Behance" : "Live Demo"}
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 backdrop-blur-md bg-white/10 text-white text-sm font-medium rounded-lg hover:bg-white/20 border border-white/30 hover:border-cyan-400/50 transition-colors duration-200"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>

      
        <div className="carousel-controls">
      
          <CarouselPrevious className="carousel-previous text-white backdrop-blur-md bg-white/10 hover:bg-white/20 hover:text-cyan-400 hover:border-cyan-400/50 border border-white/30 w-10 h-10 rounded-full items-center justify-center hidden md:flex transition-all duration-300" />
          <CarouselNext className="carousel-next text-white backdrop-blur-md bg-white/10 hover:bg-white/20 hover:text-cyan-400 hover:border-cyan-400/50 border border-white/30 w-10 h-10 rounded-full items-center justify-center hidden md:flex transition-all duration-300" />

         
          <div className="flex justify-center mt-3 space-x-4 md:hidden">
            <CarouselPrevious className="text-white backdrop-blur-md bg-white/10 hover:bg-white/20 hover:text-cyan-400 hover:border-cyan-400/50 border border-white/30 w-12 h-12 rounded-full flex items-center justify-center relative left-0 top-0 transform-none transition-all duration-300" />
            <CarouselNext className="text-white backdrop-blur-md bg-white/10 hover:bg-white/20 hover:text-cyan-400 hover:border-cyan-400/50 border border-white/30 w-12 h-12 rounded-full flex items-center justify-center relative right-0 top-0 transform-none transition-all duration-300" />
          </div>
        </div>

     
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