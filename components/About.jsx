import React from 'react'
import contact from "../public/assets/images/contact.jpg"
import Image from "next/image";

const About = () => {
  return (
    <div className = "w-full md:h-screen p-2 flex items-center py-16">
        <div className = "max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
            <div className = "col-span-2">
                <p className = "uppercase text-xl tracking-widest text-[#148102]">About</p>
                <h2 className = "py-4">Who I Am</h2>
                <p className = "py-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, velit.</p>
                <p className = "py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, sunt.</p>
                <p className = "py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, illo.</p>
                <p className = "py-2">Take a look to some of my projects</p>
            </div>
            <div className = "w-full h-auto m-auto shadow-xl shadow-[#035402] rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                <Image className = "rounded-xl" src={contact} alt="/" />
            </div>
        </div>
    </div>
  )
}

export default About