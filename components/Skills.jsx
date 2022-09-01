import React from 'react'
import Image from 'next/image'
import html from "../public/assets/skills/html.png"
import css from "../public/assets/skills/html.png"
import javascript from "../public/assets/skills/html.png"
import nodejs from "../public/assets/skills/nodejs.jpeg"
import nextjs from "../public/assets/skills/nextjs.png"
import tailwind from "../public/assets/skills/tailwind-css.png"
import reactjs from "../public/assets/skills/react-logo.png"
import laravel from "../public/assets/skills/laravel.png"
import mongodb from "../public/assets/skills/mongodb.png"
import github from "../public/assets/skills/github.png"

const Skills = () => {
  return (
    <div className = "w-full lg:h-screen p-2">
        <div className = "max-w-[1240px] mx-auto flex flex-col justify-center h-full">
            <p className = "text-xl tracking-widest uppercase text-[#148102]">Skills</p>
            <h2 className = "py-4">What I Can Do</h2>
            <div className = "grid md:grid-cols-2 lg:grid-cols-4 gap-8">


            <div className = "p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className = "grid grid-cols-2 gap-4 justify-items-center items-center">
                <div className = "m-auto">
                  <Image src ={html} width = "64px" height = "64px" alt = "/" />
                </div>
                <div className = "flex flex-col items-center justify-center">
                  <h3>HTML</h3>
                </div>
              </div>
            </div>
            <div className = "p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className = "grid grid-cols-2 gap-4 justify-items-center items-center">
                <div className = "m-auto">
                  <Image src ={css} width = "64px" height = "64px" alt = "/" />
                </div>
                <div className = "flex flex-col items-center justify-center">
                  <h3>CSS</h3>
                </div>
              </div>
            </div>
            <div className = "p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className = "grid grid-cols-2 gap-4 justify-items-center items-center">
                <div className = "m-auto">
                  <Image src ={javascript} width = "64px" height = "64px" alt = "/" />
                </div>
                <div className = "flex flex-col items-center justify-center">
                  <h3>JavaScript</h3>
                </div>
              </div>
            </div>
            <div className = "p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className = "grid grid-cols-2 gap-4 justify-items-center items-center">
                <div className = "m-auto">
                  <Image src ={nodejs} width = "64px" height = "64px" alt = "/" />
                </div>
                <div className = "flex flex-col items-center justify-center">
                  <h3>NodeJS</h3>
                </div>
              </div>
            </div>
            <div className = "p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className = "grid grid-cols-2 gap-4 justify-items-center items-center">
                <div className = "m-auto">
                  <Image src ={nextjs} width = "64px" height = "64px" alt = "/" />
                </div>
                <div className = "flex flex-col items-center justify-center">
                  <h3>NextJS</h3>
                </div>
              </div>
            </div>
            <div className = "p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className = "grid grid-cols-2 gap-4 justify-items-center items-center">
                <div className = "m-auto">
                  <Image src ={tailwind} width = "64px" height = "64px" alt = "/" />
                </div>
                <div className = "flex flex-col items-center justify-center">
                  <h3>Tailwind</h3>
                </div>
              </div>
            </div>
            <div className = "p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className = "grid grid-cols-2 gap-4 justify-items-center items-center">
                <div className = "m-auto">
                  <Image src ={reactjs} width = "64px" height = "64px" alt = "/" />
                </div>
                <div className = "flex flex-col items-center justify-center">
                  <h3>React</h3>
                </div>
              </div>
            </div>
            <div className = "p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className = "grid grid-cols-2 gap-4 justify-items-center items-center">
                <div className = "m-auto">
                  <Image src ={laravel} width = "64px" height = "64px" alt = "/" />
                </div>
                <div className = "flex flex-col items-center justify-center">
                  <h3>Laravel</h3>
                </div>
              </div>
            </div>
            <div className = "p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className = "grid grid-cols-2 gap-4 justify-items-center items-center">
                <div className = "m-auto">
                  <Image src ={mongodb} width = "64px" height = "64px" alt = "/" />
                </div>
                <div className = "flex flex-col items-center justify-center">
                  <h3>MongoDB</h3>
                </div>
              </div>
            </div>
            <div className = "p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className = "grid grid-cols-2 gap-4 justify-items-center items-center">
                <div className = "m-auto">
                  <Image src ={github} width = "64px" height = "64px" alt = "/" />
                </div>
                <div className = "flex flex-col items-center justify-center">
                  <h3>Github</h3>
                </div>
              </div>
            </div>
              

            </div>
        </div>
    </div>
  )
}

export default Skills