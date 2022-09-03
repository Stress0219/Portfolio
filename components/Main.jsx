import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

export default function Main() {
  return (
    <div id="main" className = "w-full h-screen text-center">
        <div className = "max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
          <div>
            <p className = "uppercase text-sm tracking-widest text-[#148102]">
              LET&apos;S BUILD SOMETHING TOGETHER
            </p>
            <h1 className = "py-3">
              Hi,I&apos;m <span className="text-[#148102]">Joan</span>
            </h1>
            <h1 className = "py-1">
              A Full-Stack Developer
            </h1>
            <p className = "py-4 max-w-[70%] m-auto">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque deleniti quas nemo?.
            </p>
            <div className = "flex items-center justify-between max-w-[330px] m-auto py-4">
                <div className = "rounded-full shadow-lg shadow-[#003e00] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <FaLinkedinIn/>
                </div>
                <div className = "rounded-full shadow-lg shadow-[#003e00] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <FaGithub/>
                </div>
                <div className = "rounded-full shadow-lg shadow-[#003e00] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <AiOutlineMail/>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}
