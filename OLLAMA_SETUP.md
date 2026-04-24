# Ollama AI Chatbot Setup Guide

Your chatbot is now powered by **Ollama AI** for intelligent, context-aware responses!

---

## 🚀 Quick Setup (10 minutes)

### Step 1: Install Ollama

**Windows:**
1. Download from: https://ollama.ai/download
2. Run the installer
3. Ollama will start automatically

**Mac:**
```bash
brew install ollama
```

**Linux:**
```bash
curl -fsSL https://ollama.ai/install.sh | sh
```

### Step 2: Download a Model

Open terminal/command prompt and run:

```bash
# Recommended: Llama 3.2 (1B - Fast & Lightweight)
ollama pull llama3.2

# OR other options:
ollama pull mistral        # 7B - More powerful
ollama pull phi3          # 3.8B - Balanced
ollama pull llama3.2:3b   # 3B - Larger Llama variant
```

**Model Comparison:**
- `llama3.2` (1B): ⚡ Fastest, 1GB RAM, great for portfolios
- `phi3` (3.8B): ⚖️ Balanced, 4GB RAM, better reasoning
- `mistral` (7B): 🧠 Most powerful, 8GB RAM, best quality

### Step 3: Verify Ollama is Running

```bash
# Check if Ollama is running
ollama list

# Test the model
ollama run llama3.2
```

Type a test message, then type `/bye` to exit.

### Step 4: Configure Your Portfolio

Your `.env.local` is already configured with:

```env
OLLAMA_API_URL=http://localhost:11434
OLLAMA_MODEL=llama3.2
```

**To use a different model**, change `OLLAMA_MODEL` to:
- `mistral`
- `phi3`
- `llama3.2:3b`

### Step 5: Restart Your Dev Server

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

---

## ✅ Test Your AI Chatbot

1. Open your portfolio website
2. Click the AI chatbot button (bottom right)
3. Ask questions like:
   - "What are Rudra's skills?"
   - "Tell me about the Sign Language project"
   - "What's your experience with AI?"
   - "Can you explain the POS system?"

The AI will give intelligent, context-aware responses! 🤖

---

## 🎯 How It Works

### Architecture:
```
User Message
    ↓
Chatbot.js (Frontend)
    ↓
/api/chat (API Route)
    ↓
Ollama API (Local AI)
    ↓
AI Response
    ↓
Display in Chat
```

### Features:
✅ **Context-aware**: Remembers conversation history  
✅ **Portfolio knowledge**: Trained on your profile, skills, projects  
✅ **Fallback handling**: Graceful errors if Ollama is offline  
✅ **Typing indicator**: Shows when AI is thinking  
✅ **Professional responses**: Maintains techno-futuristic tone  

---

## 🔧 Advanced Configuration

### Change Model:

Edit `.env.local`:
```env
OLLAMA_MODEL=mistral  # Use Mistral instead
```

### Use Remote Ollama:

If you deploy Ollama on a server:
```env
OLLAMA_API_URL=https://your-ollama-server.com
```

### Adjust AI Temperature:

Edit `app/api/chat/route.js`:
```javascript
options: {
  temperature: 0.7,  // 0.0 = focused, 1.0 = creative
  top_p: 0.9,
}
```

---

## 🐛 Troubleshooting

### Error: "AI service unavailable"

**Cause:** Ollama is not running or model not downloaded

**Fix:**
```bash
# Check if Ollama is running
ollama list

# If not, start it
ollama serve

# Download model if missing
ollama pull llama3.2
```

### Error: "Connection refused"

**Cause:** Ollama API URL is incorrect

**Fix:** Verify Ollama is running on `http://localhost:11434`
```bash
curl http://localhost:11434/api/tags
```

### Slow Responses

**Cause:** Model is too large for your hardware

**Fix:** Use a smaller model
```bash
ollama pull llama3.2  # Smallest & fastest
```

### Chatbot gives generic responses

**Cause:** Model needs more context

**Fix:** The portfolio context is already included in `app/api/chat/route.js`. You can edit the `PORTFOLIO_CONTEXT` to add more details.

---

## 📊 Model Performance

| Model | Size | RAM | Speed | Quality |
|-------|------|-----|-------|---------|
| llama3.2 | 1B | 1GB | ⚡⚡⚡ | ⭐⭐⭐ |
| phi3 | 3.8B | 4GB | ⚡⚡ | ⭐⭐⭐⭐ |
| mistral | 7B | 8GB | ⚡ | ⭐⭐⭐⭐⭐ |

**Recommendation:** Start with `llama3.2` for development, upgrade to `mistral` for production if you have the resources.

---

## 🚀 Production Deployment

### Option 1: Deploy Ollama on Server

1. Set up a VPS (DigitalOcean, AWS, etc.)
2. Install Ollama on the server
3. Update `OLLAMA_API_URL` to your server URL

### Option 2: Use Ollama Cloud (Coming Soon)

Ollama is working on cloud hosting. Check: https://ollama.ai

### Option 3: Fallback to Keyword Matching

If Ollama is unavailable, the chatbot automatically falls back to helpful error messages.

---

## 💡 Tips

✅ **Keep Ollama running** in the background while developing  
✅ **Use llama3.2** for fast responses during development  
✅ **Test with different questions** to see AI's understanding  
✅ **Update PORTFOLIO_CONTEXT** in `app/api/chat/route.js` when you add new projects  

---

## 🎉 Benefits Over Keyword Matching

| Feature | Keyword Matching | Ollama AI |
|---------|-----------------|-----------|
| Understanding | ❌ Exact keywords only | ✅ Natural language |
| Context | ❌ No memory | ✅ Remembers conversation |
| Flexibility | ❌ Rigid responses | ✅ Dynamic answers |
| Intelligence | ❌ Pre-programmed | ✅ AI-powered |
| User Experience | ⭐⭐ | ⭐⭐⭐⭐⭐ |

---

**Your AI chatbot is ready!** 🤖✨ 

Once Ollama is installed and running, your portfolio will have an intelligent assistant that can answer ANY question about you!
