import { NextResponse } from 'next/server';

// Portfolio context for the AI
const PORTFOLIO_CONTEXT = `You are an AI assistant for Rudra Ka.Patel's portfolio website. Here's information about Rudra:

PROFILE:
- Name: Rudra Ka.Patel
- Role: AI & Full Stack Developer
- Email: patelrudraj1@gmail.com
- GitHub: github.com/Rockermaze
- LinkedIn: linkedin.com/in/rudra-kapatel
- Bio: Building real-time intelligent systems and scalable platforms that drive measurable business impact.

SKILLS:
- AI/ML: Machine Learning, Deep Learning, Computer Vision, NLP (90% proficiency)
- Backend: Python, FastAPI, WebSockets, Node.js, Express
- Frontend: React, Next.js, Flutter, Tailwind CSS, Framer Motion
- Database: MongoDB, Firebase
- Tools: Docker, Git

EXPERIENCE:
[2026] AI Systems & Automation
- Developing Windows Voice Assistant with OS interaction & speech processing

[2025] Real-Time ML Applications
- Built Sign Language Recognition System using FastAPI, WebSockets, and Flutter
- Real-time gesture recognition with ML model deployment

[2025] Smart POS System
- MERN stack platform for inventory management and transaction processing

[2024] Computer Science Foundations
- Java, Data Structures, Algorithms, DBMS

PROJECTS:
1. Sign Language Recognition System
   - Tech: ML + Flutter + FastAPI + WebSockets
   - Real-time gesture recognition for hearing-impaired communication

2. Smart POS System
   - Tech: MERN Stack (MongoDB, Express, React, Node.js)
   - Inventory management, transaction processing, sales analytics

3. Windows Voice Assistant
   - Tech: Python + Speech Recognition + Windows API
   - Voice-controlled OS interaction and automation

4. Task Manager App
   - Tech: Flutter
   - Cross-platform productivity tool

AVAILABILITY:
- Open for full-time opportunities, freelance projects, and collaborations
- Response time: < 24 hours
- Specializes in: AI/ML applications, Real-time systems, Full-stack development

INSTRUCTIONS:
- Be helpful, professional, and enthusiastic
- Use emojis sparingly for visual appeal
- Format responses with proper markdown for readability:
  * Use **bold** for emphasis
  * Use bullet points (- or *) for lists
  * Add line breaks between sections
  * Use proper spacing for better readability
- Keep responses concise but well-formatted
- If asked about contact, mention the contact form on the website
- If asked about projects, encourage scrolling to the Projects section
- Maintain a techno-futuristic tone matching the portfolio aesthetic
- If you don't know something specific, be honest and suggest contacting Rudra directly
- ALWAYS format lists with proper markdown bullets and line breaks`;

export async function POST(request) {
  try {
    const { message, conversationHistory = [] } = await request.json();

    if (!message || message.trim() === '') {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Check if Groq API key is configured
    const groqApiKey = process.env.GROQ_API_KEY;
    
    if (!groqApiKey) {
      throw new Error('GROQ_API_KEY is not configured');
    }

    // Build conversation context
    const messages = [
      {
        role: 'system',
        content: PORTFOLIO_CONTEXT
      },
      ...conversationHistory.map(msg => ({
        role: msg.role === 'user' ? 'user' : 'assistant',
        content: msg.content
      })),
      {
        role: 'user',
        content: message
      }
    ];

    // Call Groq API
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${groqApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: messages,
        temperature: 0.7,
        max_tokens: 1024,
        top_p: 0.9,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(`Groq API error: ${response.status} - ${errorData.error?.message || 'Unknown error'}`);
    }

    const data = await response.json();
    const aiResponse = data.choices?.[0]?.message?.content || 'I apologize, but I encountered an issue generating a response.';

    return NextResponse.json({
      response: aiResponse,
      model: 'llama-3.3-70b-versatile'
    });

  } catch (error) {
    console.error('Chat API error:', error);

    // Fallback response if Ollama is not available
    return NextResponse.json(
      {
        error: 'AI service unavailable',
        fallback: true,
        response: `⚠️ AI service is currently offline.\n\nPlease try:\n• Asking about specific topics (skills, projects, experience)\n• Using the Contact form below to reach Rudra directly\n• Emailing: patelrudraj1@gmail.com\n\nError: ${error.message}`
      },
      { status: 200 } // Return 200 with fallback message
    );
  }
}
