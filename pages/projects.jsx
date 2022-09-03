import React from 'react'
import Image from 'next/image'
import matrix from "../public/assets/images/matrix.jpg"
import { RiRadioButtonFill } from "react-icons/ri"
import Link from 'next/link'

const projects = () => {
  return (
    <div className = "w-full">
        <div className = "w-screen h-[30vh] lg:h-[40vh] relative">
            <div className = "absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10"/>
            <Image className = "absolute z-1" layout = "fill" objectFit="cover" src={matrix} alt="/" />
            <div className = "absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2">
              <h2 className = "py-2">Matrix BG</h2>
              <h3>React JS / Tailwind CSS</h3>
            </div>
        </div>

        <div className = "max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
          <div className = "col-span-4">
              <p>Project</p>
              <h2>Overview</h2>
              <p>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Labore autem consectetur placeat corporis impedit, 
                 maiores voluptates ipsam vero deleniti explicabo perferendis
                 delectus ipsum magni doloribus sed temporibus vel incidunt? Eligendi?
              </p>
              <button className = "px-8 py-2 mt-4 mr-8">Demo</button>
              <button className = "px-8 py-2 mt-4">Code</button>
          </div>
          <div className = "col-span-4 md:col-span-1 shadow-xl shadow-[#035402] rounded-xl p-4">
            <div className = "p-2">
                <p className = "text-center font-bold pb-2">Technologies</p>
                <div className = "grid grid-cols-3 md:grid-cols-1">
                  <p className = "text-[#148102] py-2 flex items-center">
                    <RiRadioButtonFill className = "pr-1"/>React
                  </p>
                  <p className = "text-[#148102] py-2 flex items-center">
                    <RiRadioButtonFill className = "pr-1"/>Tailwind-CSS
                  </p>
                  <p className = "text-[#148102] py-2 flex items-center">
                    <RiRadioButtonFill className = "pr-1"/>JavaScript
                  </p>
                  <p className = "text-[#148102] py-2 flex items-center">
                    <RiRadioButtonFill className = "pr-1"/>MongoDB
                  </p>
                  <p className = "text-[#148102] py-2 flex items-center">
                    <RiRadioButtonFill className = "pr-1"/>Google API
                  </p>
                </div>
            </div>

          </div>
          <Link href = "/#projects">
            <p className = "underline cursor-pointer">Back</p>
          </Link>

        </div>

    </div>
  )
}

export default projects