import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ProjectsItem = ({title,backgroundImg,projectUrl}) => {
  return (
    <div>
        <div className = "relative flex items-center justify-center h-auto w-full shadow-xl shadow-[#003e00] rounded-xl p-4 group hover:bg-gradient-to-r from-[#003e00] to-[#148102]">
                    <Image className = "rounded-xl group-hover:opacity-25" src={backgroundImg} alt="/"/>
                    <div className = "hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                        <h3 className = "text-2xl tracking-wider text-center text-white">{title}</h3>
                        <p className = "pb-4 pt-2 text-white text-center">React JS</p>
                        <Link href = {projectUrl}>
                            <p className = "text-center py-3 rounded-lg bg-[#333] text-[#148102] font-bold text-lg cursor-pointer">More Info</p>
                        </Link>
                    </div>
                </div>
    </div>
  )
}

export default ProjectsItem