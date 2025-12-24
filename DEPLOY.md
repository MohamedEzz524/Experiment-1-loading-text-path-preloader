# Deployment Guide

## Repository Information

### Suggested Repository Name:
```
loading-text-path-preloader
```
or
```
animated-text-path-loader
```

### Repository Description:
```
Animated text path preloader with expanding letters and orbital text animations built with GSAP
```

## GitHub Pages Deployment Steps

### 1. Create GitHub Repository

1. Go to GitHub and create a new repository
2. Use the suggested name: `loading-text-path-preloader`
3. Add the description: `Animated text path preloader with expanding letters and orbital text animations built with GSAP`
4. **Do NOT** initialize with README, .gitignore, or license (we already have these)

### 2. Configure Vite for Your Repo

If your repo name is different from the default, update `vite.config.js`:

```javascript
// For project pages (repo-name.github.io/repo-name/)
const base = '/your-repo-name/';

// For user/organization pages (username.github.io)
const base = '/';
```

Or set environment variable before building:
```bash
# Windows PowerShell
$env:GITHUB_REPO_NAME="your-repo-name"; npm run build

# Windows CMD
set GITHUB_REPO_NAME=your-repo-name && npm run build

# Linux/Mac
GITHUB_REPO_NAME=your-repo-name npm run build
```

### 3. Install Dependencies & Deploy

```bash
# Install dependencies (including gh-pages)
npm install

# Build and deploy to GitHub Pages
npm run deploy
```

This will:
- Build your project to the `dist` folder
- Deploy it to the `gh-pages` branch
- Make it available at `https://yourusername.github.io/your-repo-name/`

### 4. Enable GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select the `gh-pages` branch
4. Click "Save"
5. Your site will be live in a few minutes!

## Manual Deployment Alternative

If you prefer to deploy manually:

```bash
# Build the project
npm run build

# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit"

# Add your GitHub remote
git remote add origin https://github.com/yourusername/your-repo-name.git

# Push to main branch
git branch -M main
git push -u origin main

# Deploy to gh-pages
npm run deploy
```

## Troubleshooting

- **404 Error**: Make sure the `base` path in `vite.config.js` matches your repo name
- **Assets not loading**: Check that paths in HTML/CSS use relative paths or match the base path
- **Build fails**: Make sure all dependencies are installed with `npm install`

