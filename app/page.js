"use client";
import React from "react";
import Image from "next/image";
import './globals.css'; 

import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";


export default function page() {
  const infoCards = [
    {
      title: "academic success",
      info: "Excel with Clarity AI's study tips."
    },
    {
      title: "easy sign-up",
      info: "Sign up, explore in seconds."
    },
    {
      title: "meet your fellows",
      info: "Build connections, grow your network."
    },
    {
      title: "artificial intelligence",
      info: "Access university resources powered by AI - all with Clarity's help."
    },
  ];
  const infoCards2 = [
    {
      title: "university specific Q&A",
      info: "Get instant answers to all campus questions."
    },
    {
      title: "resource finder",
      info: "Easily find nearby study spots and student services."
    },
    {
      title: "connection",
      info: "Connect with peers who share your goals."
    },
    {
      title: "personalized recommendations",
      info: "Get tips tailored to your major and goals."
    },
  ];
  
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

      <section id="Info1" className="flex w-screen h-screen bg-gradient-to-b from-[#07052D] to-[#2C174C]"> 
        <div className="flex flex-col space-y-10 m-24">
          <div className="flex flex-col space-y-5">
            <div className="font-axiforma font-medium text-[#E8DBFF] text-7xl"> Ask, Connect, Succeed </div>
            <div className="font-chillax font-normal text-[#E8DBFF] text-md"> Instant answers, peer connections, and personalized insights — all in one place. </div>
          </div>

          <div className="bg-transparent relative flex flex-col items-center justify-center overflow-hidden">
            <InfiniteMovingCards
              items={infoCards}
              direction="right"
              speed="slow"
            />
          </div>
          <div className="bg-transparent relative flex flex-col items-center justify-center overflow-hidden">
            <InfiniteMovingCards
              items={infoCards2}
              direction="left"
              speed="slow"
            />
          </div>
        </div>
      </section>



      <section id="Info2" className="flex w-screen h-screen bg-[#CCB4FF]">    
        <div className="m-24">

          <div className="flex flex-col space-y-12">
            <div className="flex flex-row space-x-48"> 
              <div className="flex flex-col space-y-11 font-axiforma font-bold text-[#E8DBFF] text-7xl"> 
                <div>Your</div> 
                <div>Ultimate</div>
                <div>Campus Companion</div>
              </div>
              <div className="font-chillax font-normal text-[#E8DBFF] text-md text-right leading-7"> 
                <div className="mb-6 text-[#351D59]"> Clarity AI is like that one friend who always <br/> knows what's up. </div>
                <div className="text-[#351D59]"> 
                  <div className="font-semibold"> Need quick answers? </div> 
                  <div className="mb-6"> We've got you. </div> 
                </div>
                <div className="text-[#351D59]"> 
                  <div className="font-semibold"> Want to connect with classmates? </div> 
                  <div className="mb-6"> We've got that too. </div> 
                </div>
                <div className="text-[#351D59]"> It's like having a cheat code for <br/> university, minus the actual cheating. </div>
              </div>
            </div>
            
            <button className="font-chillax font-medium w-48 text-[#E8DBFF] bg-[#64409D] rounded-full px-6 py-2 cursor-pointer hover:-translate-y-3 duration-300 border border-[#351D59]"> See how it works </button>


          </div>

        </div>
      </section>




      <section id="About" className="flex justify-center items-center w-screen h-screen bg-gradient-to-b from-[#2C174C] to-[#07052D]">    
      </section>
    </>
  );
}
