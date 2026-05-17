"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import MagneticButton from "../interactions/MagneticButton"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [status, setStatus] = useState({ type: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: "", message: "" })

    try {
      // Using Nodemailer API route
      const response = await fetch('/api/contact', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus({
          type: "success",
          message: "✓ Message sent successfully! Check your email for confirmation. I'll respond within 24 hours."
        })
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        throw new Error(data.error || "Failed to send message")
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: `⚠ Failed to send. Please email me directly at ${process.env.NEXT_PUBLIC_EMAIL}`
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-techno-cyan/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-techno-magenta/10 rounded-full blur-3xl" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left mb-8 sm:mb-10 md:mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="h-[2px] w-10 sm:w-12 bg-techno-cyan"></div>
            <span className="text-techno-cyan font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em]">
              Comm_Channel
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 font-heading tracking-tighter leading-none text-enhanced">
            INITIALIZE<br/>
            <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.5)', WebkitTextStrokeWidth: 'clamp(1px, 0.3vw, 2px)' }}>CONNECTION</span>
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg text-text-secondary max-w-3xl text-enhanced leading-relaxed">
            Ready to collaborate on your next project? Let's create something exceptional together
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative bg-dark-card/30 border-2 border-white/5 p-6 sm:p-8 md:p-12 lg:p-16 overflow-hidden"
        >
          <div className="relative z-10 grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-start">
            <div>
              {/* Availability Indicator */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.4)]" />
                <span className="text-xs font-mono text-green-500 uppercase tracking-widest font-bold">Available for new projects</span>
              </div>

              <p className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl text-white font-heading tracking-tight mb-8 sm:mb-10 leading-tight text-enhanced">
                Have a project in mind? Let's build something <span className="text-techno-cyan">extraordinary</span> together.
              </p>

              <div className="space-y-5 sm:space-y-6 mb-10 sm:mb-12">
                <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`} className="flex items-center gap-3 sm:gap-4 group/link">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border-2 border-white/10 flex items-center justify-center group-hover/link:border-techno-cyan group-hover/link:shadow-glow-cyan transition-all duration-500 flex-shrink-0">
                    <span className="text-2xl sm:text-3xl">📧</span>
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] sm:text-xs font-mono text-text-muted uppercase tracking-widest mb-1">Email_Protocol</div>
                    <div className="text-white group-hover/link:text-techno-cyan transition-colors font-mono text-sm sm:text-base break-all text-enhanced">{process.env.NEXT_PUBLIC_EMAIL}</div>
                  </div>
                </a>

                <a href={process.env.NEXT_PUBLIC_LINKEDIN} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 sm:gap-4 group/link">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border-2 border-white/10 flex items-center justify-center group-hover/link:border-techno-cyan group-hover/link:shadow-glow-cyan transition-all duration-500 flex-shrink-0">
                    <span className="text-2xl sm:text-3xl">💼</span>
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] sm:text-xs font-mono text-text-muted uppercase tracking-widest mb-1">Network_Link</div>
                    <div className="text-white group-hover/link:text-techno-cyan transition-colors font-mono text-sm sm:text-base text-enhanced break-words">linkedin.com/in/rudra-kapatel</div>
                  </div>
                </a>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-6" suppressHydrationWarning>
                {/* Name Input */}
                <div className="relative">
                  <label htmlFor="name" className="block text-[10px] font-mono text-text-muted uppercase tracking-widest mb-2">
                    Name_Input
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    suppressHydrationWarning
                    className="w-full bg-dark-surface/50 border border-white/10 px-4 py-3 text-white font-mono text-sm focus:border-techno-cyan focus:outline-none focus:shadow-glow-cyan transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Input */}
                <div className="relative">
                  <label htmlFor="email" className="block text-[10px] font-mono text-text-muted uppercase tracking-widest mb-2">
                    Email_Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    suppressHydrationWarning
                    className="w-full bg-dark-surface/50 border border-white/10 px-4 py-3 text-white font-mono text-sm focus:border-techno-cyan focus:outline-none focus:shadow-glow-cyan transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Subject Input */}
                <div className="relative">
                  <label htmlFor="subject" className="block text-[10px] font-mono text-text-muted uppercase tracking-widest mb-2">
                    Subject_Line
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    autoComplete="off"
                    suppressHydrationWarning
                    className="w-full bg-dark-surface/50 border border-white/10 px-4 py-3 text-white font-mono text-sm focus:border-techno-cyan focus:outline-none focus:shadow-glow-cyan transition-all duration-300"
                    placeholder="Project Inquiry"
                  />
                </div>

                {/* Message Textarea */}
                <div className="relative">
                  <label htmlFor="message" className="block text-[10px] font-mono text-text-muted uppercase tracking-widest mb-2">
                    Message_Content
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    autoComplete="off"
                    suppressHydrationWarning
                    className="w-full bg-dark-surface/50 border border-white/10 px-4 py-3 text-white font-mono text-sm focus:border-techno-cyan focus:outline-none focus:shadow-glow-cyan transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Status Message */}
                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 border font-mono text-xs ${
                      status.type === "success"
                        ? "border-techno-lime/30 bg-techno-lime/5 text-techno-lime"
                        : "border-red-500/30 bg-red-500/5 text-red-400"
                    }`}
                  >
                    {status.message}
                  </motion.div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  suppressHydrationWarning
                  className="group relative w-full px-10 py-4 font-mono font-bold tracking-widest text-sm transition-all duration-300 overflow-hidden border border-techno-cyan text-techno-cyan disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="absolute inset-0 bg-techno-cyan translate-y-[101%] group-hover:translate-y-0 group-disabled:translate-y-[101%] transition-transform duration-300"></div>
                  <div className="relative z-10 group-hover:text-dark-bg flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></span>
                        SENDING...
                      </>
                    ) : (
                      "SEND_MESSAGE()"
                    )}
                  </div>
                </button>

                {/* Download Resume Button */}
                <MagneticButton
                  href="/Rudra-KaPatel.pdf"
                  className="group relative w-full px-10 py-4 font-mono font-bold tracking-widest text-sm transition-all duration-300 overflow-hidden border border-white/20 text-white text-center block"
                >
                  <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300"></div>
                  <div className="relative z-10 group-hover:text-dark-bg flex items-center justify-center">
                    GET_RESUME()
                  </div>
                </MagneticButton>

                <div className="text-center pt-2">
                  <div className="text-[10px] font-mono text-text-muted uppercase tracking-widest mb-2">Response Protocol</div>
                  <div className="text-[10px] font-mono text-techno-cyan/60">&lt; 24 HOURS ESTIMATED</div>
                </div>
              </form>
            </div>
          </div>

          {/* Background grid for card */}
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
            <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
          </div>

          {/* Data stream overlay */}
          <div className="absolute bottom-4 right-4 font-mono text-[8px] text-techno-cyan/20 leading-none text-right">
            CONNECTION: READY<br />
            STATUS: AVAILABLE
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 sm:mt-20 pt-6 sm:pt-8 border-t border-white/10 text-center"
        >
          <div className="space-y-3 sm:space-y-4">
            <p className="text-text-muted font-mono text-xs sm:text-sm px-4">
              <span className="text-techno-cyan">&lt;</span>
              Crafted with code, creativity, and late-night debugging sessions
              <span className="text-techno-cyan">/&gt;</span>
            </p>
            <p className="text-text-muted text-xs sm:text-sm px-4">
              Made by Rudra • Powered by passion for AI & innovation
            </p>
            <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 border border-white/10 font-mono text-[10px] sm:text-xs text-text-muted">
              <span className="text-techno-cyan">[</span>
              {" "}SYSTEM_VERSION: 2.0.0{" "}
              <span className="text-techno-cyan">]</span>
            </div>
          </div>
        </motion.footer>
      </div>
    </section>
  )
}
