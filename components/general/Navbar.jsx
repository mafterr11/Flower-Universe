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
import { ListItem } from "./ListItem";

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
              href="/"
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
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    {/* Left side featured card */}
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          href="/magazin"
                          className="flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b from-rose-100 to-white p-6 no-underline transition outline-none select-none hover:shadow-md"
                        >
                          <div className="text-accent mt-4 mb-2 text-lg font-semibold">
                            Magazinul nostru
                          </div>
                          <p className="text-sm leading-tight text-gray-600">
                            Descoperă o colecție unică de buchete, decorațiuni
                            și accesorii florale, perfect alese pentru
                            evenimente speciale.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>

                    {/* Right side list items */}
                    <ListItem
                      href="/magazin/buchete-de-mireasa"
                      title="Buchete de mireasă"
                    />
                    <ListItem
                      href="/magazin/seturi-de-lumanari"
                      title="Seturi de lumânări"
                    />
                    <ListItem
                      href="/magazin/accesorii-florale"
                      title="Accesorii florale"
                    />
                    <ListItem href="/magazin/papetarie" title="Papetărie" />
                    <ListItem
                      href="/magazin/decoratiuni-de-craciun"
                      title="Decorațiuni de Crăciun"
                    />
                    <ListItem
                      href="/magazin/aranjamente-de-masa"
                      title="Aranjamente de masă"
                    />
                    <ListItem href="/magazin/photocorner" title="Photocorner" />
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Center logo */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 1 }}
          className="font-serif text-xl tracking-wider text-rose-700 md:text-2xl"
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
                    <ListItem href="/planificare/nunti" title="Nunți" />
                    <ListItem href="/planificare/botezuri" title="Botezuri" />
                    <ListItem href="/planificare/corporate" title="Corporate" />
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
            className="mt-4 space-y-4 rounded-xl bg-white/80 p-6 text-left shadow-xl backdrop-blur-md"
          >
            <Link
              href="/"
              className="block text-lg font-medium text-gray-700 transition hover:text-rose-500"
            >
              Acasa
            </Link>

            <div>
              <p className="text-lg font-medium text-gray-700">Magazin</p>
              <ul className="mt-1 ml-4 space-y-1">
                <li>
                  <Link
                    href="/magazin/buchete-de-mireasa"
                    className="text-gray-600 hover:text-rose-500"
                  >
                    Buchete de mireasă
                  </Link>
                </li>
                <li>
                  <Link
                    href="/magazin/seturi-de-lumanari"
                    className="text-gray-600 hover:text-rose-500"
                  >
                    Seturi de lumânări
                  </Link>
                </li>
                <li>
                  <Link
                    href="/magazin/accesorii-florale"
                    className="text-gray-600 hover:text-rose-500"
                  >
                    Accesorii florale
                  </Link>
                </li>
                <li>
                  <Link
                    href="/magazin/papetarie"
                    className="text-gray-600 hover:text-rose-500"
                  >
                    Papetărie
                  </Link>
                </li>
                <li>
                  <Link
                    href="/magazin/decoratiuni-de-craciun"
                    className="text-gray-600 hover:text-rose-500"
                  >
                    Decorațiuni de Crăciun
                  </Link>
                </li>
                <li>
                  <Link
                    href="/magazin/aranjamente-de-masa"
                    className="text-gray-600 hover:text-rose-500"
                  >
                    Aranjamente de masă
                  </Link>
                </li>
                <li>
                  <Link
                    href="/magazin/photocorner"
                    className="text-gray-600 hover:text-rose-500"
                  >
                    Photocorner
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-lg font-medium text-gray-700">Planificare</p>
              <ul className="mt-1 ml-4 space-y-1">
                <li>
                  <Link
                    href="/planificare/nunti"
                    className="text-gray-600 hover:text-rose-500"
                  >
                    Nunți
                  </Link>
                </li>
                <li>
                  <Link
                    href="/planificare/botezuri"
                    className="text-gray-600 hover:text-rose-500"
                  >
                    Botezuri
                  </Link>
                </li>
                <li>
                  <Link
                    href="/planificare/corporate"
                    className="text-gray-600 hover:text-rose-500"
                  >
                    Corporate
                  </Link>
                </li>
              </ul>
            </div>

            <Link
              href="/contact"
              className="block text-lg font-medium text-gray-700 transition hover:text-rose-500"
            >
              Contact
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
