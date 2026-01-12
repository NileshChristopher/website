# Quick Start Guide

## 🚀 Get Your Website Running in 5 Minutes

### 1. Install Dependencies
```bash
npm install
```

### 2. Add Your Profile Photo
- Place your profile photo at: `public/images/profile-photo.jpg`
- Recommended: Square image, 512x512px or larger
- Formats: JPG, PNG, or WebP

### 3. Update Content (Optional)
The site already has your bio content from the Squarespace site. You can update:
- `content/bio.md` - Your biography
- `content/clips.json` - Your published articles
- `content/appearances.json` - Media appearances
- `content/ai-x-labor.md` - AI x Labor project page

### 4. Run Locally
```bash
npm run dev
```
Visit http://localhost:3000 to see your site!

### 5. Build for Production
```bash
npm run build
```
This creates static files in the `out/` directory.

## 📋 Next Steps

1. **Test everything locally** - Make sure all pages work
2. **Push to GitHub** - Create a repository and push your code
3. **Deploy to Vercel** - Follow the instructions in `DEPLOYMENT.md`
4. **Add your domain** - Point varshabansal.net to Vercel
5. **Cancel Squarespace** - Once everything is working!

## 📝 Content Format

### Adding Articles (Clips)
Edit `content/clips.json`:
```json
{
  "title": "Article Title",
  "publication": "Publication Name",
  "url": "https://example.com/article",
  "date": "2024-01-15"
}
```

### Adding Appearances
Edit `content/appearances.json`:
```json
{
  "title": "Appearance Title",
  "type": "Podcast",
  "url": "https://example.com",
  "date": "2024-01-15"
}
```

## 🎨 Design Features

- ✅ Black header with white serif text (matches Squarespace exactly)
- ✅ Responsive hamburger menu on mobile
- ✅ Centered profile photo
- ✅ Clean, minimalist design
- ✅ Serif fonts throughout
- ✅ Professional spacing and layout

## 💰 Cost Savings

- **Before**: $20/month = $240/year
- **After**: $0/month = $0/year
- **Savings**: $240/year! 🎉

## 🆘 Need Help?

- Check `README.md` for detailed documentation
- Check `DEPLOYMENT.md` for deployment instructions
- All content is in the `content/` folder - easy to edit!

