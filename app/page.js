"use client";
import React from "react";
import './globals.css'; 

import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";


export default function page() {

  return (
    <>
      <section id="Hero"> 
        <BackgroundGradientAnimation>
          <div className="absolute z-50 inset-0 flex items-center justify-center text-center px-4 pointer-events-none">
            <div className="absolute left-3 top-0 text-[#E8DBFF] p-4"> LOGO </div>
            <FloatingNav />
            <div className="flex flex-col space-y-10 text-center items-center">
              <div className="font-chillax font-normal text-[#E8DBFF]"> Get Answers, Connect, and Succeed with </div>
              <div className="font-chillax font-medium text-[#E8DBFF] text-9xl drop-shadow-4xl"> Clarity AI </div>
              <button className="font-chillax font-medium text-[#17125D] bg-[#E8DBFF] rounded-full px-6 py-2 cursor-pointer hover:-translate-y-3 duration-300"> Chat with Clarity </button>
            </div>
          </div>
        </BackgroundGradientAnimation>
      </section>





      

      <section id="Info1" className="flex justify-center items-center w-screen h-screen bg-gradient-to-b from-[#07052D] to-[#2C174C]"> 
      </section>

      <section id="Info2" className="flex justify-center items-center w-screen h-screen bg-[#CCB4FF]">    
      </section>
    </>


  );
}
