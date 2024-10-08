"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Sidebar,
  SidebarBody,
  SidebarLink,
} from "@/components/ui/chatbot-sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export default function sidebar() {
  const links = [
    {
      label: "Previous Chat 1",
      href: "#",
    },
    {
      label: "Previous Chat 2",
      href: "#",
    },
    {
      label: "Previous Chat 3",
      href: "#",
    },
  ];

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    setMessages((messages) => [
      ...messages,
      { role: "user", content: message },
    ]);
    setMessage("");

    const response = await fetch("/api/generate_message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([...messages, { role: "user", content: message }]),
    });

    const data = await response.json();
    setMessages((messages) => [
      ...messages,
      { role: "assistant", content: data.message },
    ]);
  };

  return (
    <div
      className={cn(
        "flex flex-col md:flex-row bg-gradient-to-b from-[#2D174C] to-[#06052C] w-full flex-1 overflow-hidden",
        "h-screen"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10 bg-gradient-to-b from-[#2D174C] to-[#06052C] opacity-75">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-4">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div></div>
        </SidebarBody>
      </Sidebar>
      <Dashboard />
    </div>
  );
}

export const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center relative z-20"
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-chillax text-2xl font-semibold text-[#EACAFF] ml-1 mt-5 whitespace-pre"
      >
        Clarity AI
      </motion.span>
    </Link>
  );
};

export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center py-1 relative z-20"
    >
      <div className="flex-shrink-0 font-chillax text-2xl font-semibold text-[#EACAFF] ml-1 mt-5">
        {" "}
        Logo{" "}
      </div>
    </Link>
  );
};

// Dummy dashboard component with content
const Dashboard = () => {
  return <div className="m-16 text-white"> Hi World </div>;
};
