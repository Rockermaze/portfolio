import './globals.css'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
  preload: true,
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  preload: true,
})

export const metadata = {
  title: "Rudra Ka.Patel | AI & Full Stack Developer",
  description: "Portfolio of Rudra Ka.Patel, a specialist in AI/ML, MERN stack, and intelligent system automation. Building scalable, high-impact technical solutions.",
  keywords: ["Rudra Ka.Patel", "Full Stack Developer", "AI Engineer", "ML Specialist", "Python Developer", "React Developer", "Next.js Portfolio"],
  authors: [{ name: "Rudra Ka.Patel" }],
  openGraph: {
    title: "Rudra Ka.Patel | AI & Full Stack Developer",
    description: "Building next-gen intelligent systems and scalable architecture",
    url: "https://rudra-portfolio.vercel.app",
    siteName: "Rudra Ka.Patel Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rudra Ka.Patel | AI & Full Stack Developer",
    description: "Building next-gen intelligent systems and scalable architecture",
  },
}

export default function RootLayout({ children }) {
  const fontClasses = `${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`
  
  return (
    <html lang="en" className={fontClasses} suppressHydrationWarning>
      <body className="bg-dark-bg text-text-primary overflow-x-hidden font-body antialiased">
        <div className="fixed inset-0 pointer-events-none z-50 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
        {children}
      </body>
    </html>
  )
}