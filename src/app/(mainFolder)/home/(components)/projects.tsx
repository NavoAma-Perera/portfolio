"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { SquareKanban } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const projects = [
  {
    title: "Sign-Bridge",
    description:
      "A group project using Arduino microcontrollers, flex sensors, and GSM modules to create a smart glove for mute people. The glove converts sign language gestures into audible voice messages, enabling seamless communication.",
    image: "/sign.png",
    link: "https://drive.google.com/file/d/19E4dzU6I4VLTdJhyJWsAXYRmgEEQi6Lb/view?usp=drive_link",
    github: "",
  },
  {
    title: "E-Watch – E-commerce Website",
    description: (
      <>
        A group project that delivers a full-fledged online watch store with
        product Browse, cart functionality, user authentication, and order
        management. Built using <strong>HTML</strong>, <strong>CSS</strong>,{" "}
        <strong>JavaScript</strong>, <strong>PHP</strong>, and{" "}
        <strong>MySQL</strong>, it offers a practical e-commerce experience
        from both user and admin perspectives.
      </>
    ),
    image: "/ecom.png",
    link: "https://drive.google.com/file/d/19E4dzU6I4VLTdJhyJWsAXYRmgEEQi6Lb/view?usp=drive_link",
    github: "https://github.com/NavoAma-Perera/E-Com-Web",
  },
  {
    title: "IoT Dashboard",
    description: (
      <>
        A group-developed IoT Dashboard web and mobile app built with{" "}
        <strong>Next.js</strong>, <strong>NestJS</strong>,{" "}
        <strong>MongoDB</strong>, <strong>Shadcn UI</strong>,{" "}
        <strong>Tailwind CSS</strong>, and <strong>AWS services</strong>. It
        enables remote device management, configuration, real-time
        visualization, alerting, and report generation, providing a
        comprehensive solution for IoT device monitoring and control.
      </>
    ),
    image: "/iot.png",
    link: "",
    github: "https://github.com/MohamedASHRIF/CeyAgro-IOT",
  },
  {
    title: "Portfolio Website",
    description: (
      <>
        An individual project built with <strong>Next.js</strong>,{" "}
        <strong>Shadcn UI</strong>, and <strong>Tailwind CSS</strong>. This
        portfolio showcases my skills, experience, and projects with a clean,
        responsive, and modern UI designed to highlight my work effectively.
      </>
    ),
    image: "/port.png",
    link: "",
    github: "https://github.com/NavoAma-Perera/portfolio",
  },
  {
    title: "UI/UX Work",
    description: (
      <>
        Explore my full range of UI and UX design projects on Behance,
        showcasing wireframes, prototypes, and visual design work created with
        Canva, Figma, and other tools.
      </>
    ),
    image: "/ui.png",
    link: "https://www.behance.net/navoperera",
    github: "",
  },
]

export default function Projects() {
  return (
    <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
      {/* Section Heading */}
      <div className="flex items-center justify-center gap-3 text-white text-3xl sm:text-4xl font-bold tracking-tight mb-12">
        <SquareKanban className="w-8 h-8 text-white" />
        <h2 className="text-white">Projects</h2>
      </div>

      {/* Carousel Section */}
      <Carousel opts={{ align: "start", loop: true }} className="w-full max-w-5xl mx-auto relative">
        <CarouselContent className="-ml-4">
          {projects.map((project, index) => (
            <CarouselItem
              key={index}
              className="pl-4 basis-full md:basis-1/2 lg:basis-1/3"
            >
              <motion.div
                className="bg-gray-900 rounded-xl border border-gray-700 hover:border-[#FFD300] p-5 shadow-lg h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
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
                      className="text-sm text-white hover:text-[#FFD300]"
                    >
                      {project.title.includes("UI/UX Work")
                        ? "View Behance"
                        : "Live Demo"}
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
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Controls Wrapper */}
        <div className="carousel-controls flex justify-center mt-6 space-x-4">
          <CarouselPrevious className="carousel-previous text-white bg-gray-800 hover:bg-gray-700 hover:text-[#FFD300] w-10 h-10 rounded-full flex items-center justify-center" />
          <CarouselNext className="carousel-next text-white bg-gray-800 hover:bg-gray-700 hover:text-[#FFD300] w-10 h-10 rounded-full flex items-center justify-center" />
        </div>
      </Carousel>

      {/* Custom Styles */}
      <style jsx>{`
        /* Default (desktop): arrows on sides */
        .carousel-previous {
          position: absolute;
          left: 0.5rem;
          top: 50%;
          transform: translateY(-50%);
        }

        .carousel-next {
          position: absolute;
          right: 0.5rem;
          top: 50%;
          transform: translateY(-50%);
        }

        @media (max-width: 640px) {
          /* On small screens, reposition controls below carousel */
          .carousel-previous,
          .carousel-next {
            position: static;
            transform: none;
            width: 2.5rem;
            height: 2.5rem;
            font-size: 1.25rem;
          }

          .carousel-controls {
            position: static;
            margin-top: 1.5rem;
            transform: none;
            justify-content: center;
            z-index: auto;
          }
        }
      `}</style>
    </section>
  )
}
