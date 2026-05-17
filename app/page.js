"use client"

// Core Components
import Navbar from "../components/layout/Navbar"
import LoadingScreen from "../components/layout/LoadingScreen"
import Hero from "../components/sections/Hero"
import dynamic from "next/dynamic"
import ErrorBoundary from "../components/layout/ErrorBoundary"

// Dynamically import heavy/non-critical components
const CommandPalette = dynamic(() => import("../components/layout/CommandPalette"), { ssr: false })
const ScrollProgress = dynamic(() => import("../components/layout/ScrollProgress"), { ssr: false })
const Chatbot = dynamic(() => import("../components/layout/Chatbot"), {
  ssr: false,
  loading: () => <div className="fixed bottom-6 right-6 w-12 h-12 bg-dark-card animate-pulse rounded-full" />
})
const SideDecorations = dynamic(() => import("../components/layout/SideDecorations"), { ssr: false })

// Effect Components
const AdvancedGrid = dynamic(() => import("../components/effects/AdvancedGrid"), { ssr: false })
const SimpleParticles = dynamic(() => import("../components/effects/SimpleParticles"), { ssr: false })
const EasterEggs = dynamic(() => import("../components/effects/EasterEggs"), { ssr: false })

// Section Components
import About from "../components/sections/About"
import Skills from "../components/sections/Skills"
import Experience from "../components/sections/Experience"
import Education from "../components/sections/Education"
import Projects from "../components/sections/Projects"
import Contact from "../components/sections/Contact"

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <AdvancedGrid />
      <SimpleParticles />
      <CommandPalette />
      <ScrollProgress />
      <EasterEggs />
      <ErrorBoundary>
        <Chatbot />
      </ErrorBoundary>
      <SideDecorations />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <ErrorBoundary>
          <Contact />
        </ErrorBoundary>
      </main>
    </>
  )
}
