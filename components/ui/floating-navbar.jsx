"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";


export const FloatingNav = ({
  navItems = [
    { name: "Chatbot", 
      link: "#Chatbot", 
    },
    { name: "Connect With Classmates", 
      link: "#Connect", 
    },
    { name: "About Us", 
      link: "#About", 
    }
  ],

  className
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto rounded-full dark:bg-black bg-[#E8DBFF] border border-[#17125D] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-8",
          className
        )}
      >
        {navItems.length > 0 ? (
          navItems.map((navItem, idx) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn( "relativeitems-center flex space-x-1 font-chillax text-[#17125D]" )} >
              <span className="hidden sm:block text-sm cursor-pointer">{navItem.name}</span>
            </Link>
          ))
        ) : (
          <p>No navigation items available</p>
        )}
        <div className="flex flex-row space-x-4">
          <button className="border text-sm font-chillax font-medium relative border-[#2C174B] text-[#2C174B] px-4 py-1 rounded-full">
            <span>Login</span>
          </button>
          <button className="border text-sm font-chillax font-medium relative bg-[#2C174B] text-[#E8DBFF] px-4 py-1 rounded-full">
            <span>Sign Up</span>
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
