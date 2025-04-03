"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-6 left-1/2 z-50 -translate-x-1/2 transform">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex items-center space-x-6 rounded-full border border-pink-100 bg-white/80 px-8 py-4 shadow-xl backdrop-blur-md md:space-x-10"
      >
        {/* Mobile toggle button */}
        <div className="flex items-center md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-rose-600">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Left nav links */}
        <nav className="hidden space-x-6 md:flex md:items-center">
          <motion.div
            whileHover={{ scale: 1.1, rotate: -1 }}
            className="relative"
          >
            <Link
              href="/acasa"
              className="relative font-medium transition after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-rose-400 after:transition-all hover:after:w-full"
            >
              Acasa
            </Link>
          </motion.div>

          {/* Magazin dropdown */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent px-2 text-base font-medium">
                  Magazin
                </NavigationMenuTrigger>
                <NavigationMenuContent className="rounded-lg bg-white p-4 shadow-md">
                  <ul className="grid w-48 gap-3">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/magazin/categorii">Categorii</Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/magazin/oferte">Oferte</Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/magazin/noutati">Noutăți</Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Center logo */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 1 }}
          className="font-serif text-xl tracking-wider text-rose-600 md:text-2xl"
        >
          <Link href={"/"} className="flex items-center">
            Flower
            <div className="relative h-10 w-10">
              <Image src={"/logo.png"} fill alt="logo" />
            </div>
            Universe
          </Link>
        </motion.div>

        {/* Right nav links */}
        <nav className="hidden space-x-6 md:flex md:items-center">
          {/* Planificare dropdown */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent px-2 text-base font-medium">
                  Planificare
                </NavigationMenuTrigger>
                <NavigationMenuContent className="rounded-lg bg-white p-4 shadow-md">
                  <ul className="grid w-56 gap-3">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/planificare/calendar">
                          Calendar Evenimente
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/planificare/servicii">
                          Servicii Disponibile
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/planificare/consultanta">Consultanță</Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <motion.div
            whileHover={{ scale: 1.1, rotate: 1 }}
            className="relative"
          >
            <Link
              href="/contact"
              className="relative font-medium transition after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-rose-400 after:transition-all hover:after:w-full"
            >
              Contact
            </Link>
          </motion.div>
        </nav>
      </motion.div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-4 space-y-4 rounded-xl bg-white/80 p-6 text-center shadow-xl backdrop-blur-md"
          >
            {[
              { label: "Acasa", href: "/acasa" },
              { label: "Magazin", href: "/magazin" },
              { label: "Planificare", href: "/planificare" },
              { label: "Contact", href: "/contact" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block text-lg transition"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
