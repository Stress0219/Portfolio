import React from 'react'
import Image from 'next/image'
import matrix from '../public/assets/images/matrix.jpg'
import Link from 'next/link'
import ProjectsItem from './ProjectsItem'

const Projects = () => {
  return (
    <div id="projects" className = "w-full">
        <div className = "max-w-[1240px] mx-auto px-2 py-16">
            <p className = "text-xl tracking-widest uppercase text-[#148102]">Projects</p>
            <h2 className = "py-4">What I&apos;ve Build</h2>
            <div className = "grid md:grid-cols-2 gap-8">
                
            <ProjectsItem title = "matrix-bg" backgroundImg = {matrix} projectUrl = "/projects"/>
            <ProjectsItem title = "matrix-bg" backgroundImg = {matrix} projectUrl = "/projects"/> 
            <ProjectsItem title = "matrix-bg" backgroundImg = {matrix} projectUrl = "/projects"/> 
            <ProjectsItem title = "matrix-bg" backgroundImg = {matrix} projectUrl = "/projects"/> 
            <ProjectsItem title = "matrix-bg" backgroundImg = {matrix} projectUrl = "/projects"/> 
            <ProjectsItem title = "matrix-bg" backgroundImg = {matrix} projectUrl = "/projects"/> 
            
            </div>
        </div>
    </div>
  )
}

export default Projects