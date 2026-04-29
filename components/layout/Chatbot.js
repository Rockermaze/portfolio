"use client"

import { useState, useEffect, useRef, Component } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ReactMarkdown from "react-markdown"

// Error Boundary for Chatbot
class ChatbotErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Chatbot Error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="fixed bottom-6 right-6 z-[100]">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.reload()}
            className="w-14 h-14 bg-red-500/90 border border-red-400/50 flex items-center justify-center shadow-lg group relative overflow-hidden backdrop-blur-sm"
          >
            <span className="relative z-10 text-white font-mono text-xs font-bold">
              ⚠️
            </span>
          </motion.button>
        </div>
      )
    }

    return this.props.children
  }
}

function ChatbotContent() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: "bot", text: "⚡ SYSTEM_INITIALIZED\n\n**Powered by Groq AI** 🚀\n\nHello! I'm Rudra's AI assistant. I can answer questions about his skills, projects, experience, and more.\n\nWhat would you like to know?" }
  ])
  const [inputValue, setInputValue] = useState("")
  const [isMounted, setIsMounted] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const scrollRef = useRef(null)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, isTyping])

  const handleSendMessage = async (e) => {
    e.preventDefault()
    if (!inputValue.trim() || isTyping) return

    const userMsg = { role: "user", text: inputValue }
    const currentInput = inputValue
    
    setMessages(prev => [...prev, userMsg])
    setInputValue("")
    setIsTyping(true)

    try {
      // Build conversation history for context - include the current message
      const conversationHistory = [
        ...messages.slice(1).map(msg => ({
          role: msg.role === 'user' ? 'user' : 'assistant',
          content: msg.text
        })),
        {
          role: 'user',
          content: currentInput
        }
      ]

      // Call AI API
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: currentInput,
          conversationHistory: conversationHistory.slice(0, -1) // Don't duplicate the current message
        }),
      })

      const data = await response.json()

      if (data.response) {
        const botMsg = { role: "bot", text: data.response }
        setMessages(prev => [...prev, botMsg])
      } else if (data.error) {
        const errorMsg = { 
          role: "bot", 
          text: data.fallback 
            ? data.response 
            : "⚠️ I'm having trouble connecting. Please try again or use the Contact form below."
        }
        setMessages(prev => [...prev, errorMsg])
      }
    } catch (error) {
      console.error('Chat error:', error)
      const errorMsg = { 
        role: "bot", 
        text: "❌ CONNECTION_ERROR\n\nI'm having trouble processing your request. Please try:\n• Refreshing the page\n• Using the Contact form below\n• Emailing directly: patelrudraj1@gmail.com"
      }
      setMessages(prev => [...prev, errorMsg])
    } finally {
      setIsTyping(false)
    }
  }

  if (!isMounted) {
    return null
  }

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 w-[90vw] sm:w-96 md:w-[450px] lg:w-[500px]"
          >
            <div className="bg-black/80 backdrop-blur-xl border border-techno-cyan/30 h-[450px] flex flex-col shadow-2xl overflow-hidden rounded-lg">
              {/* Header */}
              <div className="p-4 border-b border-white/20 flex justify-between items-center bg-black/40">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-techno-cyan animate-pulse shadow-glow-cyan" />
                  <span className="font-mono text-xs font-bold tracking-widest text-white">
                    RK_ASSISTANT v1.0
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Messages Container */}
              <div
                ref={scrollRef}
                className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide bg-black/20"
              >
                {messages.map((msg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: msg.role === 'user' ? 10 : -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`
                      max-w-[85%] p-3 font-mono text-xs leading-relaxed
                      ${msg.role === 'user'
                        ? 'bg-techno-cyan/20 border border-techno-cyan/40 text-white rounded-l-lg rounded-tr-lg shadow-lg'
                        : 'bg-black/40 border border-white/20 text-white/90 rounded-r-lg rounded-tl-lg shadow-lg'}
                    `}>
                      {msg.role === 'bot' && (
                        <span className="text-techno-cyan mr-2 font-semibold">[AI]:</span>
                      )}
                      {msg.role === 'bot' ? (
                        <div className="inline">
                          <ReactMarkdown
                            className="inline font-mono text-xs leading-relaxed"
                            components={{
                              p: ({node, ...props}) => <span className="inline" {...props} />,
                              strong: ({node, ...props}) => <strong className="font-bold text-white" {...props} />,
                              em: ({node, ...props}) => <em className="italic" {...props} />,
                              ul: ({node, ...props}) => <ul className="list-disc ml-4 my-1 space-y-0.5 block" {...props} />,
                              ol: ({node, ...props}) => <ol className="list-decimal ml-4 my-1 space-y-0.5 block" {...props} />,
                              li: ({node, ...props}) => <li className="text-xs" {...props} />,
                              h1: ({node, ...props}) => <div className="text-xs font-bold mb-1 mt-2 block" {...props} />,
                              h2: ({node, ...props}) => <div className="text-xs font-bold mb-1 mt-2 block" {...props} />,
                              h3: ({node, ...props}) => <div className="text-xs font-bold mb-1 mt-1 block" {...props} />,
                              code: ({node, inline, ...props}) => 
                                inline 
                                  ? <code className="bg-techno-cyan/20 px-1 rounded text-xs" {...props} />
                                  : <code className="block bg-black/50 p-2 rounded my-1 text-xs" {...props} />,
                            }}
                          >
                            {msg.text}
                          </ReactMarkdown>
                        </div>
                      ) : (
                        <span className="whitespace-pre-wrap">{msg.text}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
                
                {/* Typing Indicator */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex justify-start"
                  >
                    <div className="bg-black/40 border border-white/20 rounded-r-lg rounded-tl-lg shadow-lg p-3">
                      <div className="flex items-center gap-1">
                        <span className="text-techno-cyan font-mono text-xs font-semibold">[AI]:</span>
                        <div className="flex gap-1 ml-2">
                          <motion.div
                            className="w-2 h-2 bg-techno-cyan rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                          />
                          <motion.div
                            className="w-2 h-2 bg-techno-cyan rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                          />
                          <motion.div
                            className="w-2 h-2 bg-techno-cyan rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Input */}
              <form
                onSubmit={handleSendMessage}
                className="p-4 border-t border-white/20 flex gap-2 bg-black/30"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  disabled={isTyping}
                  placeholder={isTyping ? "AI is thinking..." : "ENTER_QUERY..."}
                  className="flex-1 bg-black/50 border border-white/20 rounded p-2 font-mono text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-techno-cyan focus:bg-black/60 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <button
                  type="submit"
                  disabled={isTyping || !inputValue.trim()}
                  className="bg-techno-cyan text-black px-4 rounded font-mono text-[10px] font-bold hover:shadow-glow-cyan hover:bg-techno-cyan/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isTyping ? "..." : "EXEC"}
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-black/90 border border-techno-cyan/50 flex items-center justify-center shadow-glow-cyan group relative overflow-hidden backdrop-blur-sm"
      >
        <div className="absolute inset-0 bg-techno-cyan translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        <span className="relative z-10 text-techno-cyan group-hover:text-black font-mono text-xl font-bold">
          {isOpen ? "✕" : "AI"}
        </span>

        {/* Pulse rings */}
        {!isOpen && (
          <motion.div
            className="absolute inset-0 border border-techno-cyan/30"
            animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </motion.button>
    </div>
  )
}

export default function Chatbot() {
  return (
    <ChatbotErrorBoundary>
      <ChatbotContent />
    </ChatbotErrorBoundary>
  )
}
