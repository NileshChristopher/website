# Deployment Guide

This guide will walk you through deploying your portfolio website to Vercel for free hosting.

## Prerequisites

1. A GitHub account (free)
2. A Vercel account (free)
3. Your domain name (varshabansal.net) - if you want to use a custom domain

## Step 1: Prepare Your Code

1. **Add your profile photo:**
   - Place your profile photo at `public/images/profile-photo.jpg`
   - The image should be square (recommended: 512x512px or larger)
   - Supported formats: JPG, PNG, WebP

2. **Update your content:**
   - Edit `content/bio.md` with your biography
   - Edit `content/clips.json` with your articles
   - Edit `content/appearances.json` with your media appearances
   - Edit `content/ai-x-labor.md` with your AI x Labor project content

3. **Test locally:**
   ```bash
   npm install
   npm run dev
   ```
   Visit http://localhost:3000 to verify everything looks good.

## Step 2: Push to GitHub

1. **Initialize Git repository** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Create a new repository on GitHub:**
   - Go to https://github.com/new
   - Name it something like `varsha-bansal-portfolio`
   - Don't initialize with README (you already have one)
   - Click "Create repository"

3. **Push your code:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/varsha-bansal-portfolio.git
   git branch -M main
   git push -u origin main
   ```

## Step 3: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended)

1. **Sign up/Login to Vercel:**
   - Go to https://vercel.com
   - Sign up with your GitHub account (easiest option)

2. **Import your project:**
   - Click "Add New..." → "Project"
   - Find and select your GitHub repository
   - Click "Import"

3. **Configure the project:**
   - Vercel will auto-detect Next.js settings
   - Framework Preset: Next.js
   - Build Command: `npm run build` (should be auto-filled)
   - Output Directory: `out` (should be auto-filled)
   - Install Command: `npm install` (should be auto-filled)

4. **Deploy:**
   - Click "Deploy"
   - Wait 2-3 minutes for the build to complete
   - Your site will be live at a URL like: `your-project.vercel.app`

### Option B: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```
   - Follow the prompts
   - Choose "Link to existing project" or "Create new project"
   - Accept default settings

## Step 4: Add Custom Domain

1. **In Vercel Dashboard:**
   - Go to your project
   - Click "Settings" → "Domains"
   - Enter your domain: `varshabansal.net`
   - Click "Add"

2. **Configure DNS:**
   Vercel will show you DNS records to add. You'll need to add these at your domain registrar:

   **For root domain (varshabansal.net):**
   - Type: `A`
   - Name: `@` or leave blank
   - Value: `76.76.21.21` (Vercel's IP - check Vercel dashboard for current value)

   **For www subdomain (www.varshabansal.net):**
   - Type: `CNAME`
   - Name: `www`
   - Value: `cname.vercel-dns.com` (check Vercel dashboard for exact value)

3. **Wait for DNS propagation:**
   - This can take a few minutes to 48 hours
   - Usually completes within 1-2 hours
   - Vercel will show "Valid Configuration" when ready

4. **SSL Certificate:**
   - Vercel automatically provisions SSL certificates
   - Your site will be available at https://varshabansal.net

## Step 5: Update Squarespace DNS (If Currently Using)

If your domain is currently pointing to Squarespace, you'll need to:

1. **Cancel Squarespace subscription** (after verifying new site works)
2. **Update DNS records** at your domain registrar to point to Vercel
3. **Wait for DNS propagation**

## Step 6: Verify Everything Works

1. Visit your new site: https://varshabansal.net
2. Check all pages:
   - Homepage
   - About
   - Clips
   - AI x Labor
   - Appearances
3. Test on mobile devices
4. Check all links work correctly

## Continuous Deployment

Once set up, every time you push to GitHub:
- Vercel automatically rebuilds and deploys your site
- Updates go live in 2-3 minutes
- You can preview deployments before making them live

## Updating Your Site

1. **Edit content files:**
   - `content/bio.md`
   - `content/clips.json`
   - `content/appearances.json`
   - `content/ai-x-labor.md`

2. **Commit and push:**
   ```bash
   git add .
   git commit -m "Update content"
   git push
   ```

3. **Vercel automatically deploys** the changes

## Troubleshooting

### Build Fails
- Check Vercel build logs for errors
- Ensure all dependencies are in `package.json`
- Verify Node.js version (Vercel uses Node 18+ by default)

### Images Not Loading
- Ensure profile photo is at `public/images/profile-photo.jpg`
- Check file name matches exactly (case-sensitive)
- Verify image format is supported (JPG, PNG, WebP)

### Domain Not Working
- Wait longer for DNS propagation (can take up to 48 hours)
- Verify DNS records match Vercel's instructions exactly
- Check domain registrar's DNS settings

### Styling Issues
- Clear browser cache
- Check that Tailwind CSS is properly configured
- Verify `globals.css` is imported in `layout.tsx`

## Support Resources

- **Vercel Documentation**: https://vercel.com/docs
- **Next.js Documentation**: https://nextjs.org/docs
- **Vercel Support**: Available in dashboard

## Cost Breakdown

- **Vercel Hosting**: Free (Hobby plan)
- **Custom Domain**: Free (you just pay your domain registrar)
- **SSL Certificate**: Free (automatic)
- **Total Monthly Cost**: $0

**Savings**: $20/month (previously Squarespace) = $240/year saved!

