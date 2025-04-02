"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    {
      nume: "Acasa",
      link: "/acasa",
    },
    {
      nume: "Magazin",
      link: "/magazin",
    },
    {
      nume: "Planificare",
      link: "/planificare",
    },
    {
      nume: "Contact",
      link: "/contact",
    },
  ];

  return (
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="bg-white/80 backdrop-blur-md shadow-xl rounded-full px-8 py-4 flex  items-center space-x-6 md:space-x-10 border border-pink-100"
      >
        {/* Mobile toggle button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-rose-600">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Left nav links */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.slice(0, 2).map((link, i) => (
            <motion.div
              key={link.nume}
              whileHover={{ scale: 1.1, rotate: -1 }}
              className="relative"
            >
              <Link
                href={link.link}
                className="text-gray-700 font-medium hover:text-rose-500 transition relative after:absolute after:h-[2px] after:bg-rose-400 after:w-0 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all"
              >
                {link.nume}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Center logo */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 1 }}
          className="text-xl md:text-2xl font-serif text-rose-600 tracking-wider"
        >
          <Link href={"/"} className="flex items-center">
            Flower
            <div className="relative w-10 h-10 ">
              <Image src={"/logo.png"} fill alt="logo" />
            </div>
            Universe
          </Link>
        </motion.div>

        {/* Right nav links */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.slice(2).map((link, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1, rotate: 1 }}
              className="relative"
            >
              <Link
                href={link.link}
                className="text-gray-700 font-medium hover:text-rose-500 transition relative after:absolute after:h-[2px] after:bg-rose-400 after:w-0 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all"
              >
                {link.nume}
              </Link>
            </motion.div>
          ))}
        </nav>
      </motion.div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-4 bg-white/80 backdrop-blur-md shadow-xl rounded-xl p-6 space-y-4 text-center"
          >
            {navLinks.map((link, i) => (
              <Link
                key={i}
                href={link.link}
                className="block text-lg text-gray-700 hover:text-rose-500 transition"
              >
                {link.nume}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
