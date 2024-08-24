"use client";
import React from "react";
import './globals.css'; 

import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { FloatingNav } from "@/components/ui/floating-navbar";

export default function page() {

  return (
    <>
      <section id="Hero" className="flex justify-center items-center w-screen h-screen bg-gradient-to-b from-[#07052D] to-[#2C174C]"> 
        <div className="absolute left-3 top-0 text-white p-4"> LOGO </div>
        <FloatingNav />
        <div className="flex flex-col space-y-10 text-center items-center">
          <div className="font-chillax font-normal text-white"> Get Answers, Connect, and Succeed with </div>
          <div className="font-chillax font-medium text-9xl text-white"> Clarity AI </div>
          <button className="font-chillax font-medium text-[#17125D] bg-[#E8DBFF] rounded-full px-6 py-2 cursor-pointer hover:-translate-y-3 duration-300"> Chat with Clarity </button>
        </div>
      </section>
    </>


  );
}
