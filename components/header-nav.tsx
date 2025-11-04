"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function HeaderNav() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "Solutions", href: "#solutions" },
    { name: "Pricing", href: "#pricing" },
    { name: "Resources", href: "#resources" },
    { name: "Company", href: "#company" },
    { name: "Contact", href: "#contact" },
  ]

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.substring(1)
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md shadow-lg" : "backdrop-blur-sm"
      }`}
      style={{
        backgroundColor: "rgba(11, 13, 20, 0.9)",
      }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="#top" className="text-white text-xl font-bold hover:opacity-80 transition-opacity">
              Nxsus
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <Link
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="text-white/80 hover:text-white transition-opacity duration-200 font-medium text-sm"
                  data-track="header-nav"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          <motion.div
            className="hidden lg:flex items-center space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              variant="ghost"
              className="text-white/80 hover:text-white hover:bg-transparent transition-opacity duration-200 text-sm font-medium"
              data-track="header-signin"
            >
              Sign In
            </Button>
            <Button
              className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-medium px-6 text-sm rounded-xl transition-colors duration-200"
              data-track="header-cta"
            >
              Get started
            </Button>
          </motion.div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </motion.div>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#0B0D14] border-l border-white/10">
              <SheetHeader>
                <SheetTitle className="text-left text-xl font-bold text-white">Nxsus.</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className="text-white/80 hover:text-white text-lg py-2 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex flex-col space-y-3 pt-6 border-t border-white/10">
                  <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10 justify-start">
                    Sign In
                  </Button>
                  <Button className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-medium">Get started</Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}
