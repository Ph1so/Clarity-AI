"use client";
import React from "react";
import Image from "next/image";
import './globals.css'; 

import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { WobbleCard } from "@/components/ui/wobble-card";


export default function page() {
  const infoCards = [
    {
      title: "academic success",
      info: "Excel with Clarity AI's study tips based on your major."
    },
    {
      title: "tailored tips",
      info: "Get tips tailored to your major and goals."
    },
    {
      title: "university specific Q&A",
      info: "Quick responses to all your questions, anytime you need them."
    },
    {
      title: "artificial intelligence",
      info: "Access university resources powered by AI - all with Clarity's help."
    },
  ];
  const infoCards2 = [
    {
      title: "need a study buddy?",
      info: "Our chatbot can't take notes, but it can offer some solid advice."
    },
    {
      title: "where to study?",
      info: "Easily find nearby study spots and student services."
    },
    {
      title: "need help at 2 AM?",
      info: "Our AI chatbot is your 24/7 counselor, even on weekends."
    },
    {
      title: "campus survival guide?",
      info: "Ask our chatbot anything—from where to eat to how to ace that test."
    },
  ];
  
  return (
    <>
      <section id="Hero"> 
        <BackgroundGradientAnimation>
          <div className="absolute z-50 inset-0 flex items-center justify-center text-center px-4">
            <div className="absolute left-3 top-0 text-[#E8DBFF] p-4"> LOGO </div>
            <FloatingNav />
            <div className="flex flex-col space-y-10 text-center items-center">
              <div className="font-chillax font-normal text-[#E8DBFF]"> Get Answers, Connect, and Succeed with </div>
              <div className="font-chillax font-medium text-[#E8DBFF] text-9xl drop-shadow-4xl"> Clarity AI </div>
              <div className="flex flex-row space-x-6">
                <a href="#Chatbot" className="font-chillax font-medium text-[#E8DBFF] border border-[#E8DBFF] rounded-full px-6 py-2 cursor-pointer hover:-translate-y-3 duration-300 shadow-4xl shadow-[#17125D]"> Learn More </a>
                <a href="" className="font-chillax font-medium text-[#2C174B] bg-[#E8DBFF] rounded-full px-6 py-2 cursor-pointer hover:-translate-y-3 duration-300 shadow-4xl shadow-[#17125D]"> Chat with Clarity </a>
              </div>
            </div>
          </div>
        </BackgroundGradientAnimation>
      </section>

      <section id="Chatbot" className="flex w-screen h-screen bg-gradient-to-b from-[#2C174C] to-[#07052D]">
        <div className="flex flex-col space-y-10 m-24">
          <div className="flex flex-col space-y-5">
            <div className="font-axiforma font-medium text-[#E8DBFF] text-7xl"> Ask & Succeed </div>
            <div className="font-chillax font-normal text-[#E8DBFF] text-md"> Instant answers and personalized insights — by our chatbot, all in one place. Excel with Clarity. </div>
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

      <section id="Connect" className="flex w-screen h-screen bg-[#CCB4FF]">    
        <div className="m-24">
          <div className="flex flex-col space-y-10">
            <div className="flex flex-row space-x-48"> 
              <div className="flex flex-col space-y-11 font-axiforma font-bold text-[#E8DBFF] text-7xl"> 
                <div className="text-shadow-custom">Your</div> 
                <div className="text-shadow-custom">Ultimate</div>
                <div className="text-shadow-custom">Campus Companion</div>
              </div>
              <div className="font-chillax font-normal text-md text-right leading-7"> 
                <div className="mb-6 text-[#2C174B] font-normal"> Clarity AI is like that one friend who always <br/> knows what's up. </div>
                <div className="text-[#2C174B]"> 
                  <div className="font-semibold"> Need quick answers? </div> 
                  <div className="mb-6"> We've got you. </div> 
                </div>
                <div className="text-[#2C174B]"> 
                  <div className="font-semibold"> Want to connect with classmates? </div> 
                  <div className="mb-6"> We've got that too. </div> 
                </div>
                <div className="text-[#2C174B]"> It's like having a cheat code for <br/> university, minus the actual cheating. </div>
              </div>
            </div>
            <button className="font-chillax font-medium w-44 text-[#E8DBFF] bg-[#64409D] rounded-full px-5 py-1 shadow-lg shadow-[#A781E2] border border-t-0 border-[#544072] cursor-pointer hover:-translate-y-3 duration-300"> Join Network </button>
            <div className="flex flex-row space-x-9">
              
              <WobbleCard containerClassName="col-span-1 shadow-2xl shadow-[#A781E2] font-chillax font-normal">
                <div className="text-left text-balance font-semibold tracking-[-0.015em] text-[#2C174B] text-xl"> Connect for Advice </div>
                <p className="mt-4 text-left text-[#2C174B] text-normal"> 
                  Reach out to fellow students for academic guidance or career advice. Tap into the collective wisdom of your campus community. 
                </p>
              </WobbleCard>

              <WobbleCard containerClassName="col-span-1 shadow-2xl shadow-[#A781E2] font-chillax font-normal">
                <div className="text-left text-balance font-semibold tracking-[-0.015em] text-[#2C174B] text-xl"> Build Study Groups </div>
                <p className="mt-4 text-left text-[#2C174B] text-normal"> 
                  Form or join study groups with classmates to collaborate and learn together. Boost your understanding and make studying more enjoyable!
                </p>
              </WobbleCard>

              <WobbleCard containerClassName="col-span-1 shadow-2xl shadow-[#A781E2] font-chillax font-normal">
                <div className="text-left text-balance font-semibold tracking-[-0.015em] text-[#2C174B] text-xl"> Make New Friends </div>
                <p className="mt-4 text-left text-[#2C174B] text-normal"> 
                  Grow your circle by connecting with classmates who share your courses and major. Discover new friends and build your network!                
                </p>
              </WobbleCard>

            </div>
          </div>
        </div>
      </section>


      <section id="About" className="flex w-screen h-screen bg-gradient-to-b from-[#2C174C] to-[#07052D]">   
        <div className="flex flex-col space-y-8">
          <div className="m-24 flex flex-col space-y-10">
            <div className="font-chillax font-medium text-[#E8DBFF] text-8xl"> ABOUT US </div>
            <div className="font-chillax font-light text-[#E8DBFF] text-lg leading-8">
              <p> We're on a mission to make university life a whole lot easier for students like you. <br/>
                  Our journey with Clarity AI started when our team realized how much time we spend hunting for answers <br/>
                  and trying to connect with our classmates. We thought, “Why not create an app that does it all?” And here we are! 
              </p>
              <br/>
              <p> Clarity AI isn't just an app - it's a tool built with students in mind, by students who've been in your shoes. <br/>
                  We are excited to share it with you and can't wait to see how it makes your university experience smoother and more connected.
              </p>
              <br/>
              <p> - The Clarity Squad </p>
            </div>
          </div> 

          <div class="border-t border-[#E8DBFF] w-screen"> </div>
          <div class="font-chillax font-light text-[#E8DBFF] text-lg m-24"> Footer Content </div>
      </div>
      </section>
    </>
  );
}
