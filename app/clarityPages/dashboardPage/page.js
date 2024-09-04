"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/dashboard-sidebar";
import { IconArrowLeft, IconBrandTabler, IconSettings, IconUserBolt } from "@tabler/icons-react";
import { cn } from "@/lib/utils";


export default function sidebar() {
    const links = [
      {
        label: "Chat with Clarity",
        href: "/clarityPages/chatbotPage",
        icon: (
          <IconBrandTabler className="text-[#EACAFF] dark:text-neutral-200 h-6 w-6 flex-shrink-0" />
        ),
      },
      {
        label: "Messages",
        href: "/clarityPages/messagesPage",
        icon: (
          <IconUserBolt className="text-[#EACAFF] h-6 w-6 flex-shrink-0" />
        ),
      },
      {
        label: "Settings",
        href: "/clarityPages/personalProfilePage",
        icon: (
          <IconSettings className="text-[#EACAFF] h-6 w-6 flex-shrink-0" />
        ),
      },
    ];

    const [open, setOpen] = useState(false);

    return (
      (<div className = {cn( "flex flex-col md:flex-row bg-gradient-to-b from-[#2D174C] to-[#06052C] w-full flex-1 overflow-hidden", "h-screen" )}>
        <Sidebar open={open} setOpen={setOpen}>
          <SidebarBody className="justify-between gap-10 opacity-75">
            <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
              {open ? <Logo /> : <LogoIcon />}
              <div className="mt-8 flex flex-col gap-4">
                {links.map((link, idx) => ( 
                    <SidebarLink key={idx} link={link} /> 
                ))}
              </div>
            </div>
            <div>
            </div>
          </SidebarBody>
        </Sidebar>
        <Dashboard />
      </div>)
    )
  }


  export const Logo = () => {
    return (
      (<Link href="#" className="font-normal flex space-x-2 items-center relative z-20">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-chillax text-2xl font-semibold text-[#EACAFF] ml-1 mt-5 whitespace-pre">
          Clarity AI
        </motion.span>
      </Link>)
    );
  };

  export const LogoIcon = () => {
    return (
      (<Link href="#" className="font-normal flex space-x-2 items-center py-1 relative z-20">
        <div className="flex-shrink-0 font-chillax text-2xl font-semibold text-[#EACAFF] ml-1 mt-5"> Logo </div>
      </Link>)
    );
  };
  
  // Dummy dashboard component with content
  const Dashboard = () => {
    return ((
      <section id="bentoGrid" className="flex h-screen w-screen">
        <div className="grid grid-cols-7 grid-rows-25 h-full w-full gap-6"> 

          <div id="welcomeBar" className="col-span-7 row-span-1 rounded-xl bg-white ">  </div>

          <div id="chatWithClarity" className="col-span-3 row-span-4 rounded-2xl bg-white ">  </div>
          <div id="viewMessages" className="col-span-2 row-span-4 rounded-2xl bg-white ">  </div>
          <div id="viewProfile" className="col-span-2 rounded-2xl bg-blue-500 ">  </div>

          <div id="chatWithClarity" className="col-span-3 row-span-4 rounded-2xl bg-white ">  </div>
          <div id="viewMessages" className="col-span-2 row-span-4 rounded-2xl bg-white ">  </div>
          <div id="viewProfile" className="col-span-2 row-span-4 rounded-2xl bg-blue-500 ">  </div>

        </div>
      </section>
    ));
  };
  