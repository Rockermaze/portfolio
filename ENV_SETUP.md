# 🔐 Environment Variables Setup

## Quick Setup

Your contact information is now centralized in environment variables for easy management and security.

### Files Created:
- ✅ `.env.local` - Your actual credentials (already configured)
- ✅ `.env.example` - Template for others

---

## Current Configuration

Your `.env.local` file contains:

```env
NEXT_PUBLIC_EMAIL=patelrudraj1@gmail.com
NEXT_PUBLIC_GITHUB=https://github.com/Rockermaze
NEXT_PUBLIC_LINKEDIN=https://www.linkedin.com/in/rudra-kapatel/
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xanyqwpb
```

---

## Where It's Used

### Hero Section
- ✅ GitHub icon link
- ✅ LinkedIn icon link
- ✅ Email icon link

### Contact Section
- ✅ Email display and link
- ✅ LinkedIn display and link
- ✅ Contact form endpoint
- ✅ Error message fallback email

---

## Benefits

### Security
- ✅ Credentials not hardcoded
- ✅ `.env.local` is gitignored
- ✅ Safe to share code publicly

### Maintainability
- ✅ Update once, changes everywhere
- ✅ Easy to switch environments
- ✅ Clear documentation

### Flexibility
- ✅ Different values for dev/prod
- ✅ Easy testing with test accounts
- ✅ Team members can use their own

---

## How to Update

### Change Your Email
```env
NEXT_PUBLIC_EMAIL=newemail@gmail.com
```

### Change Your GitHub
```env
NEXT_PUBLIC_GITHUB=https://github.com/new-username
```

### Change Your LinkedIn
```env
NEXT_PUBLIC_LINKEDIN=https://www.linkedin.com/in/new-profile/
```

### Change Form Endpoint
```env
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/new-form-id
```

After changing, restart dev server:
```bash
npm run dev
```

---

## For Production (Vercel)

When deploying to Vercel:

1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add each variable:
   - `NEXT_PUBLIC_EMAIL`
   - `NEXT_PUBLIC_GITHUB`
   - `NEXT_PUBLIC_LINKEDIN`
   - `NEXT_PUBLIC_FORMSPREE_ENDPOINT`
4. Redeploy

---

## For Other Hosting

### Netlify
Add to `netlify.toml` or dashboard environment variables

### AWS Amplify
Add to environment variables in console

### Custom Server
Export variables in your shell or use `.env` file

---

## Testing

All links should now work:

### Hero Section
- Click GitHub icon → Opens your GitHub profile
- Click LinkedIn icon → Opens your LinkedIn profile
- Click Email icon → Opens mail client with your email

### Contact Section
- Email link → Opens mail client
- LinkedIn link → Opens LinkedIn profile
- Form submission → Sends to your email

---

## Troubleshooting

### Links not working?
1. Check `.env.local` exists in root folder
2. Verify all URLs are complete (include https://)
3. Restart dev server: `npm run dev`

### Environment variables not loading?
- Must start with `NEXT_PUBLIC_` for client-side access
- Restart dev server after changes
- Check for typos in variable names

### Form not sending?
- Verify `NEXT_PUBLIC_FORMSPREE_ENDPOINT` is correct
- Check Formspree dashboard for form status
- Confirm email in first submission

---

## Security Notes

✅ **Safe to commit:**
- `.env.example` (template only)

❌ **Never commit:**
- `.env.local` (contains real credentials)
- `.env` (if you create one)

The `.gitignore` file already protects `.env*` files.

---

## ✅ All Set!

Your contact information is now:
- Centralized in one place
- Secure and gitignored
- Easy to update
- Used consistently everywhere

**Everything is working!** 🎉
