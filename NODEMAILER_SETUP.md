# Nodemailer Email Setup Guide

Your contact form now uses **Nodemailer** to send emails. Follow these steps to get your Gmail App Password.

---

## 🚀 Quick Setup (5 minutes)

### Step 1: Enable 2-Factor Authentication on Gmail

1. Go to your Google Account: https://myaccount.google.com/
2. Click **Security** in the left sidebar
3. Under "How you sign in to Google", click **2-Step Verification**
4. Follow the prompts to enable 2FA (if not already enabled)

### Step 2: Generate Gmail App Password

1. Go to: https://myaccount.google.com/apppasswords
   - Or: Google Account → Security → 2-Step Verification → App passwords
2. In the "Select app" dropdown, choose **Mail**
3. In the "Select device" dropdown, choose **Other (Custom name)**
4. Type: `Portfolio Contact Form`
5. Click **Generate**
6. **Copy the 16-character password** (it looks like: `abcd efgh ijkl mnop`)

### Step 3: Add to Environment Variables

1. Open `.env.local` file in your project root
2. Replace `your_gmail_app_password_here` with the password you copied:

```env
EMAIL_USER=patelrudraj1@gmail.com
EMAIL_APP_PASSWORD=abcd efgh ijkl mnop
```

**Important:** Remove the spaces from the app password, so it becomes: `abcdefghijklmnop`

### Step 4: Restart Your Development Server

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

---

## ✅ Test Your Contact Form

1. Go to your website's contact section
2. Fill out the form with a test email
3. Submit the form
4. Check:
   - ✉️ Your inbox (`patelrudraj1@gmail.com`) - You should receive the contact message
   - ✉️ Sender's inbox - They should receive an auto-reply confirmation

---

## 📧 What Happens When Someone Contacts You?

### Email to YOU:
- **Subject:** Portfolio Contact: [Their Subject]
- **Content:** Formatted message with their name, email, subject, and message
- **Reply-To:** Set to sender's email (you can reply directly)

### Email to SENDER:
- **Subject:** Message Received - Rudra Ka.Patel
- **Content:** Professional confirmation that you'll respond within 24 hours
- **Includes:** Links to your GitHub and LinkedIn

---

## 🔒 Security Notes

- ✅ App passwords are safer than your actual Gmail password
- ✅ `.env.local` is in `.gitignore` (never committed to GitHub)
- ✅ Server-side only (EMAIL_* variables don't have NEXT_PUBLIC prefix)
- ✅ You can revoke app passwords anytime from Google Account settings

---

## 🐛 Troubleshooting

### Error: "Invalid login"
- Make sure 2FA is enabled on your Google account
- Double-check the app password (no spaces)
- Ensure EMAIL_USER matches the Gmail account that generated the app password

### Error: "Failed to send email"
- Check your internet connection
- Verify the app password is correct
- Make sure you restarted the dev server after adding credentials

### Emails not arriving
- Check spam/junk folders
- Verify EMAIL_USER is correct in `.env.local`
- Test with a different email address

---

## 🎯 Benefits Over Formspree

✅ **Dual emails:** You get the message + sender gets confirmation  
✅ **Professional auto-reply:** Better user experience  
✅ **Unlimited emails:** No monthly limits  
✅ **Full control:** Custom email templates  
✅ **Free forever:** No paid plans needed  

---

## 📝 Need Help?

If you encounter issues:
1. Check the browser console for errors
2. Check the terminal/server logs
3. Verify all environment variables are set correctly
4. Make sure the dev server was restarted after adding credentials

---

**Ready to go!** 🚀 Your contact form will now send professional emails to both you and your visitors.
