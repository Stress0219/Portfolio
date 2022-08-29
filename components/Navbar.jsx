import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai/index";
import {FaGithub, FaLinkedinIn} from "react-icons/fa/index"

export default function Navbar() {
  const [nav, setNav] = useState(false)

  const handleNav = () =>{
    setNav(!nav)
  }

  return (
    <div className="fixed w-full h-20 shadow-xl shadow-[#035402] z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image
          src="/../public/assets/navlogo.png"
          width="150"
          height="90"
          alt="/"
        />
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Home
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                About
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Skills
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={26} />
          </div>
        </div>
      </div>

      <div className={ nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/60" : "" }>
        <div className={ nav ? "fixed top-0 left-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#0b6a02] p-10 ease-in duration-500" 
                      : "fixed top-0 left-[-200%] p-10 ease-in duration-500" }>
          <div>
            <div className="flex w-full items-center justify-between">
              <Image src = "/../public/assets/navlogo.png" width="100" height="80" alt = "/" />
              <div onClick={handleNav} className="rounded-full shadow-lg shadow-[#003e00] p-3 mx-0 cursor-pointer">
                <AiOutlineClose/>
              </div>
            </div>
            <div className="border-b border-[#148102] my-4">
              <p className="w-[85%] md:w-[90%] py-4">Let's build something Amazing! together</p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/ ">
              <li className = "py-3 text-sm">Home</li>
              </Link>
              <Link href="/ ">
              <li className = "py-3 text-sm">About</li>
              </Link>
              <Link href="/ ">
              <li className = "py-3 text-sm">Skills</li>
              </Link>
              <Link href="/ ">
              <li className = "py-3 text-sm">Projects</li>
              </Link>
              <Link href="/ ">
              <li className = "py-3 text-sm">Contact</li>
              </Link>
            </ul>
            <div className="sm:pt-5 md:pt-32">
              <p className="uppercase tracking-widest text-[#a9ff84]">Let's Connect</p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-[#003e00] p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn/>
                </div>
                <div className="rounded-full shadow-lg shadow-[#003e00] p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub/>
                </div> 
                <div className="rounded-full shadow-lg shadow-[#003e00] p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail/>
                </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
