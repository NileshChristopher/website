# Varsha Bansal Portfolio Website

A modern, static portfolio website built with Next.js, TypeScript, and Tailwind CSS. This site replaces the Squarespace subscription with a free, self-hosted solution.

## Features

- **Minimalist Design**: Clean, professional design matching the original Squarespace site
- **Responsive**: Works perfectly on all devices (mobile, tablet, desktop)
- **Fast Loading**: Static site generation for optimal performance
- **Easy Content Updates**: Edit markdown and JSON files to update content
- **Free Hosting**: Deploy to Vercel for free

## Project Structure

```
├── content/           # Content files (markdown and JSON)
│   ├── bio.md
│   ├── clips.json
│   ├── appearances.json
│   └── ai-x-labor.md
├── public/           # Static assets
│   └── images/
│       └── profile-photo.jpg
├── src/
│   ├── app/         # Next.js app router pages
│   ├── components/  # React components
│   └── lib/         # Utility functions
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Add your profile photo:
   - Place your profile photo at `public/images/profile-photo.jpg`
   - Recommended size: 512x512px or larger (square aspect ratio)

3. Update content:
   - Edit `content/bio.md` for your biography
   - Edit `content/clips.json` to add your articles
   - Edit `content/appearances.json` for media appearances
   - Edit `content/ai-x-labor.md` for the AI x Labor page

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `out/` directory.

## Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign up/login
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect Next.js and configure the build
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to link your project

### Adding Custom Domain

1. In your Vercel project settings, go to "Domains"
2. Add your domain: `varshabansal.net`
3. Follow the DNS configuration instructions
4. Update your domain's DNS records as instructed
5. Wait for DNS propagation (usually a few minutes to a few hours)

## Updating Content

### Adding a New Article (Clip)

Edit `content/clips.json`:

```json
{
  "title": "Your Article Title",
  "publication": "Publication Name",
  "url": "https://example.com/article",
  "date": "2024-01-15"
}
```

### Updating Biography

Edit `content/bio.md` using markdown syntax:
- Use `[text](url)` for links
- Use `**text**` for bold
- Use `_text_` for italic

### Adding Appearances

Edit `content/appearances.json`:

```json
{
  "title": "Appearance Title",
  "type": "Podcast / Interview / Panel",
  "url": "https://example.com",
  "date": "2024-01-15"
}
```

## Technology Stack

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Static Export**: Generates static HTML files for fast hosting

## Cost Savings

- **Previous**: $20/month for Squarespace
- **Current**: $0/month with Vercel free tier
- **Annual Savings**: $240/year

## Support

For issues or questions, please check the Next.js documentation or Vercel's deployment guides.

