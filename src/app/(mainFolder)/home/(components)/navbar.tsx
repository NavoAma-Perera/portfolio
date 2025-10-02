"use client"

import React, { useState, useEffect } from "react"
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

import { Menu } from "lucide-react"

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
      setSelected(key)
    }
  }

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
    onScroll()

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>

      <div className="fixed top-0 left-0 right-0 backdrop-blur-xl bg-black/30 border-b border-white/10 z-50 shadow-2xl px-6 py-4">
        <div className="flex justify-between items-center w-full max-w-7xl mx-auto">
          <div className="text-white font-bold text-lg bg-gradient-to-r from-cyan-400 via-white to-yellow-400 bg-clip-text text-transparent">
            Amali Perera
          </div>

          <NavigationMenu className="hidden sm:block">
            <NavigationMenuList className="flex justify-end gap-8">
              {navItems.map(({ key, label }) => (
                <NavigationMenuItem key={key}>
                  <span
                    onClick={() => scrollToSection(key)}
                    className={`text-white cursor-pointer transition-all duration-300 ease-in-out pb-1 border-b-2 hover:text-cyan-400 ${
                      selected === key
                        ? "border-cyan-400 text-cyan-400"
                        : "border-transparent"
                    }`}
                  >
                    {label}
                  </span>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="sm:hidden text-white focus:outline-none hover:text-cyan-400 transition-colors">
              <Menu className="w-6 h-6" />
            </DropdownMenuTrigger>

            <DropdownMenuContent
              side="bottom"
              align="end"
              className="backdrop-blur-xl bg-black/80 border border-white/20 rounded-lg w-56 mt-2 shadow-2xl"
            >
              {navItems.map(({ key, label }) => (
                <DropdownMenuItem key={key} className="focus:bg-white/10">
                  <span
                    onClick={() => scrollToSection(key)}
                    className={`block w-full px-2 py-2 cursor-pointer font-medium transition-colors ${
                      selected === key
                        ? "text-cyan-400"
                        : "text-white hover:text-cyan-400"
                    }`}
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