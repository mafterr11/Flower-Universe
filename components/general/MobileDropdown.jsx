'use client'
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

export function MobileDropdown({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between text-lg font-medium text-gray-700 transition hover:text-rose-600"
      >
        {title}
        <ChevronDown
          className={`ml-1 h-4 w-4 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-2 space-y-2 overflow-hidden pl-3"
          >
            {children}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export function MobileSubLink({ href, children, isOpen, setIsOpen }) {
  return (
    <li>
      <Link
        href={href}
        onClick={() => setIsOpen(!isOpen)}
        className="block text-base text-gray-600 transition hover:text-rose-500"
      >
        {children}
      </Link>
    </li>
  );
}
