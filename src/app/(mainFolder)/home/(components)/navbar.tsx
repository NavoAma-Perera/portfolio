"use client"

import React, { useState , useEffect} from "react"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"

import { Menu} from "lucide-react"

// Import your section components

//import Projects from "@/components/projects"
//import Contact from "@/components/contact"

const navItems = [
  { key: "about", label: "About Me" },
  { key: "skills", label: "Skills & Technologies" },
  { key: "projects", label: "Projects" },
  { key: "contact", label: "Contact Me" },
]

export default function HeaderNav() {
  const [selected, setSelected] = useState("about")

  const scrollToSection = (key: string) => {
    const element = document.getElementById(key)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      setSelected(key) // update selected on click
    }
  }

  // Scroll spy effect:
  useEffect(() => {
    function onScroll() {
      const scrollPosition = window.scrollY + window.innerHeight / 3

      let currentSection = "about"
      for (const { key } of navItems) {
        const el = document.getElementById(key)
        if (el && el.offsetTop <= scrollPosition) {
          currentSection = key
        }
      }
      setSelected(currentSection)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll() // initial check

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      {/* Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 bg-gradient-to-br from-black via-gray-900 to-black bg-opacity-80 z-50 shadow-md px-6 py-3">
        <div className="flex justify-between items-center w-full">
          <div className="text-white font-bold text-lg">Amali Perera</div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden sm:block">
            <NavigationMenuList className="flex justify-end gap-12">
              {navItems.map(({ key, label }) => (
                <NavigationMenuItem key={key}>
                  <span
                    onClick={() => scrollToSection(key)}
                    className={`text-white cursor-pointer transition-colors duration-200 ease-in-out border-b-4 ${
  selected === key ? "border-[#FFD300]" : "border-transparent"
} `}

                  >
                    {label}
                  </span>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Dropdown */}
          <DropdownMenu>
           <DropdownMenuTrigger className="sm:hidden text-white focus:outline-none">
  <Menu className="w-6 h-6" />
</DropdownMenuTrigger>

            <DropdownMenuContent side="bottom" align="end" className="bg-gray-800 rounded-md w-48 mt-2">
              {navItems.map(({ key, label }) => (
                <DropdownMenuItem key={key}>
                  <span
                    onClick={() => {
                      scrollToSection(key)
                      // close dropdown if you implement state
                    }}
                    className="block w-full px-2 py-1 cursor-pointer text-white font-medium hover:text-yellow-400"
                  >
                    {label}
                  </span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  )
}