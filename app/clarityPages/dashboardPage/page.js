"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/dashboard-sidebar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { IconArrowLeft, IconBrandTabler, IconSettings, IconUserBolt, } from "@tabler/icons-react";
import { cn } from "@/lib/utils";


export default function sidebar() {
    const links = [
      {
        label: "Chat with Clarity",
        href: "/clarityPages/chatbotPage",
        icon: (
          <IconBrandTabler className="text-[#EACAFF] ml-2 h-7 w-7 flex-shrink-0" />
        ),
      },
      {
        label: "Messages",
        href: "/clarityPages/messagesPage",
        icon: (
          <IconUserBolt className="text-[#EACAFF] ml-2 h-7 w-7 flex-shrink-0" />
        ),
      },
      {
        label: "Profile Settings",
        href: "/clarityPages/personalProfilePage",
        icon: (
          <IconSettings className="text-[#EACAFF] ml-2 h-7 w-7 flex-shrink-0" />
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
        <div className="flex-shrink-0 font-chillax text-2xl font-semibold text-[#EACAFF] ml-1 mt-5"> CAI </div>
      </Link>)
    );
  };
  
  // Dummy dashboard component with content
  const Dashboard = () => {
    return ((
      <section id="bentoGrid" className="flex h-ful w-full justify-center items-center p-14">
        <div className="grid h-full w-full grid-cols-9 grid-rows-21 gap-7"> 

          <div id="searchArea" className="col-span-3 row-span-10 bg-[#D9D9D9]/10 rounded-2xl flex justify-left pl-14 items-center shadow-3xl shadow-[#000]/100">  
          </div>

          <div id="chatWithClarity" className="col-span-4 row-span-5 bg-[#D9D9D9]/10 rounded-2xl flex justify-left pl-14 items-center shadow-3xl shadow-[#000]/100">  
            <div className="flex flex-col">
              <div className="text-[#EACAFF] font-chillax text-2xl font-medium mb-2"> Chat with Clarity </div>
              <div className="text-[#EACAFF] font-chillax text-lg font-normal mb-6"> Tap to start your <br/> conversation! </div>
              <a href="#" className="font-chillax font-medium text-[#E8DBFF] border border-[#E8DBFF] rounded-full px-8 py-1 cursor-pointer hover:-translate-y-3 duration-300 shadow-4xl shadow-[#17125D]"> New Conversation </a>
            </div>
          </div>

          <div id="viewMessages" className="col-span-2 row-span-5 bg-[#D9D9D9]/10 rounded-2xl flex justify-left pl-14 items-center shadow-3xl shadow-[#000]/100">  
            <div className="flex flex-col">
              <div className="text-[#EACAFF] font-chillax text-2xl font-medium mb-2"> View <br/> Messages </div>
              <div className="text-[#EACAFF] font-chillax text-lg font-normal mb-6"> Access previous <br/> chats. </div>
              <FontAwesomeIcon icon={faArrowRightLong} className="text-[#EACAFF] h-10 w-10 font-chillax font-normal cursor-pointer hover:translate-x-6 duration-300" />
            </div>
          </div>

          

          <div id="viewProfile" className="col-span-2 row-span-5 bg-[#D9D9D9]/10 rounded-2xl flex justify-left pl-14 items-center shadow-3xl shadow-[#000]/100">  
            <div className="flex flex-col">
              <div className="text-[#EACAFF] font-chillax text-2xl font-medium mb-2"> View My <br/> Profile </div>
              <div className="text-[#EACAFF] font-chillax text-lg font-normal mb-6"> Manage <br/> personal info. </div>
              <FontAwesomeIcon icon={faArrowRightLong} className="text-[#EACAFF] h-10 w-10 font-chillax font-normal cursor-pointer hover:translate-x-6 duration-300" />
            </div>
          </div>
          
          <div id="meetFellowStudents" className="col-span-4 row-span-5 bg-[#D9D9D9]/10 rounded-2xl flex justify-left pl-14 items-center shadow-3xl shadow-[#000]/100">  
            <div className="flex flex-col">
              <div className="text-[#EACAFF] font-chillax text-2xl font-medium mb-2"> Meet Fellow Students </div>
              <div className="text-[#EACAFF] font-chillax text-lg font-normal mb-6"> For notes, advice, or <br/> career cheer! </div>
              <a href="#" className="font-chillax font-medium text-[#E8DBFF] border border-[#E8DBFF] rounded-full px-8 py-1 cursor-pointer hover:-translate-y-3 duration-300 shadow-4xl shadow-[#17125D]"> Conect with Classmates </a>
            </div>
          </div>

        </div>
      </section>
    ));
  };
  