// Layout Components
import Navbar from "../components/layout/Navbar"
import LoadingScreen from "../components/layout/LoadingScreen"
import CommandPalette from "../components/layout/CommandPalette"
import ScrollProgress from "../components/layout/ScrollProgress"
import Chatbot from "../components/layout/Chatbot"
import SideDecorations from "../components/layout/SideDecorations"

// Section Components
import Hero from "../components/sections/Hero"
import Skills from "../components/sections/Skills"
import Experience from "../components/sections/Experience"
import Projects from "../components/sections/Projects"
import Contact from "../components/sections/Contact"

// Effect Components
import AdvancedGrid from "../components/effects/AdvancedGrid"
import SimpleParticles from "../components/effects/SimpleParticles"
import EasterEggs from "../components/effects/EasterEggs"

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <AdvancedGrid />
      <SimpleParticles />
      <CommandPalette />
      <ScrollProgress />
      <EasterEggs />
      <Chatbot />
      <SideDecorations />
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  )
}
