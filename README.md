# 🚀 Rudra Ka.Patel - Portfolio

A modern, interactive portfolio built with Next.js, featuring AI-powered chatbot and advanced animations.

## ✨ Features

- **AI Chatbot** - Powered by Groq AI for intelligent conversations
- **Contact Form** - Direct email integration with Nodemailer
- **Modern Animations** - Framer Motion for smooth interactions
- **Responsive Design** - Mobile-first approach
- **Performance Optimized** - Next.js 16 with Turbopack

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Add your credentials to .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 🔐 Environment Variables

Create a `.env.local` file with:

```env
# Contact Information
NEXT_PUBLIC_EMAIL=your-email@gmail.com
NEXT_PUBLIC_GITHUB=https://github.com/your-username
NEXT_PUBLIC_LINKEDIN=https://www.linkedin.com/in/your-profile/

# Email Service
EMAIL_USER=your-email@gmail.com
EMAIL_APP_PASSWORD=your_gmail_app_password

# AI Chatbot
GROQ_API_KEY=your_groq_api_key
```

## 📜 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🎨 Tech Stack

- **Next.js 16** - React framework
- **React 19** - UI library
- **Tailwind CSS 4** - Styling
- **Framer Motion** - Animations
- **Groq AI** - Chatbot intelligence
- **Nodemailer** - Email service

## 🚀 Deployment

### Netlify (Recommended)

1. Push code to GitHub
2. Import repository in Netlify
3. Add environment variables
4. Deploy

Build settings:
- Build command: `npm run build`
- Publish directory: `.next`

## 📄 License

This project is open source and available under the MIT License.

---

Built with ❤️ using Next.js and Tailwind CSS
