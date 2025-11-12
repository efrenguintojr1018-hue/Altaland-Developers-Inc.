# Altaland Developers Inc. Website: Setup and Deployment Guide

This guide provides all necessary steps to set up, configure, and deploy the Altaland Developers Inc. corporate website.

## Part 1: Local Development Setup

Follow these steps to run the project on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.x or later)
- [npm](https://www.npmjs.com/) (included with Node.js)
- [Git](https://git-scm.com/)

### Step 1: Install Dependencies

First, download the project files. Then, open your terminal, navigate to the project's root directory, and install the required packages.

```bash
# Navigate to your project folder
cd path/to/your/project

# Install dependencies
npm install
```

### Step 2: Run the Development Server

Start the local development server to view the website.

```bash
# Run the development server
npm run dev
```

This command will start the server, typically at `http://localhost:5173`. Open this URL in your browser to see your website in action. The site will automatically reload as you make changes to the code.

---

## Part 2: How to Publish Your Website for Free

This section will guide you through deploying your website to the internet at no cost using **GitHub** and **Vercel**.

### Step 1: Upload Your Project to GitHub

Your code needs to be in a GitHub repository for Vercel to access it.

1.  **Create a GitHub Account:** If you don't have one, sign up for free at [github.com](https://github.com).
2.  **Create a New Repository:**
    *   On your GitHub dashboard, click "**+**" and select "**New repository**".
    *   Name it (e.g., `altaland-website`) and click "**Create repository**".
3.  **Push Your Code:** In your project's terminal, run these commands to upload your code. **Replace the URL** with your repository's URL from GitHub.

    ```bash
    # Initialize Git
    git init -b main
    
    # Add all files to be tracked
    git add .
    
    # Create your first "commit" (a snapshot of your code)
    git commit -m "Initial commit"
    
    # Link to your GitHub repository
    git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
    
    # Push your code to GitHub
    git push -u origin main
    ```

### Step 2: Deploy with Vercel

Vercel will automatically build and host your site from your GitHub repository.

1.  **Sign Up for Vercel:**
    *   Go to [vercel.com](https://vercel.com) and sign up using your GitHub account.
2.  **Import Your Project:**
    *   On your Vercel dashboard, click "**Add New...**" -> "**Project**".
    *   Find your project repository (`altaland-website`) and click "**Import**".
3.  **Deploy:**
    *   Vercel will auto-detect the settings (`Vite`, `npm run build`, `dist` output directory). You don't need to change anything.
    *   Click the "**Deploy**" button.

Vercel will now build and deploy your website. After a minute, it will provide you with a public URL (e.g., `altaland-website.vercel.app`). Your site is now live!

**Automatic Updates:** Every time you push changes to your `main` branch on GitHub, Vercel will automatically redeploy the latest version of your site.

---

### How to Generate a PDF of This Guide

You can easily convert this document (`SETUP.md`) into a PDF.
- **Online:** Use a free online "Markdown to PDF converter".
- **Editor:** If you use VS Code, install an extension like "Markdown PDF" to export it.