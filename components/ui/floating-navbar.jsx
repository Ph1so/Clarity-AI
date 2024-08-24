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
    { name: "Connect With Classmates", 
      link: "#Hero", 
    },
    { name: "Chatbot", 
      link: "#Hero", 
    },
    { name: "About Us", 
      link: "#Profile", 
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
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-[#E8DBFF] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-8",
          className
        )}
      >
        {navItems.length > 0 ? (
          navItems.map((navItem, idx) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relativeitems-center flex space-x-1 font-chillax text-[#17125D]"
              )}
            >
              <span className="hidden sm:block text-sm cursor-pointer">{navItem.name}</span>
            </Link>
          ))
        ) : (
          <p>No navigation items available</p>
        )}
        <div className="flex flex-row space-x-4">
          <button className="border text-sm font-chillax font-medium relative border-[#17125D] text-[#17125D] px-4 py-1 rounded-full">
            <span>Login</span>
          </button>
          <button className="border text-sm font-chillax font-medium relative bg-[#17125D] text-[#E8DBFF] px-4 py-1 rounded-full">
            <span>Sign Up</span>
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
