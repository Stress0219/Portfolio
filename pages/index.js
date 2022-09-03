import Head from 'next/head'
import Image from 'next/image'
import { Input } from 'postcss'
import Main from '../components/Main'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Joan Dev| Full Stack Developer</title>
        <meta name="description" content="Joan-Dev Author:Joan Kevin Comas Castillo I am a web developer this is my portfolio, Soy un desarrollador web fullstack este es mi portafolio donde enseño algunos de mis trabajos,This is my portfolio where I show some of my projects to the world" />
        <link rel="shortcut icon" href="/fav.ico"/>
      </Head>
      <Main/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}
