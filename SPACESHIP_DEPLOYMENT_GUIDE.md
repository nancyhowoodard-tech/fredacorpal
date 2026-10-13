# Spaceship Deployment Guide for Fredacorpal™

This guide details how to deploy the **Fredacorpal™ Integrated Services** full-stack TanStack Start application using your **Spaceship** domain and hosting.

Because Fredacorpal is a modern full-stack web application with SSR (Server-Side Rendering), API endpoints (like the AI assistant `/api/support-chat`), and server actions (application & inquiry submission), it requires a Node.js or edge worker runtime.

---

## 🚀 Option 1: Modern Cloud Edge + Spaceship Domain (Recommended & Easiest)

> **Why this is the industry standard:**
>
> - **Cost:** 100% Free tier (Cloudflare Pages or Vercel).
> - **Performance:** Global Edge SSR across 300+ data centers worldwide.
> - **Zero Maintenance:** Auto-deploys in 30 seconds whenever you `git push` to your GitHub repo.
> - **Spaceship's Role:** Spaceship acts as your primary Domain Registrar and DNS Authority.

### Step 1: Connect your GitHub Repo to Cloudflare Pages (or Vercel)

1. Push your latest code to GitHub:
   ```bash
   git add .
   git commit -m "Prepare production deployment"
   git push origin main
   ```
2. Go to **[Cloudflare Dashboard](https://dash.cloudflare.com/)** → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
3. Select your repository: `fredacorpal-nexus`.
4. Configure Build settings:
   - **Framework preset:** `None` (or TanStack Start / Nitro)
   - **Build command:** `npm run build`
   - **Build output directory:** `.output/public`
5. Under **Environment variables**, add:
   - `VITE_APP_URL`: `https://fredacorpal.world`
   - `SUPABASE_URL`: `https://pmzjkqsesiysrqegocuh.supabase.co`
   - `SUPABASE_PUBLISHABLE_KEY`: `sb_publishable_Du68a9AtcGGEkeKGY4_e_w_1paIVxdb`
   - `APPLICATIONS_WEBHOOK_URL`: `https://script.google.com/macros/s/AKfycbzwf_8bP6-T19lbhr8darpKO7oVAm9vosse0QY7j1odwx_yVsdZEHikXWoF3dIUrjJ5kg/exec`
   - `GOOGLE_GENERATIVE_AI_API_KEY`: _(Optional, for Gemini AI support chatbot)_
6. Click **Save and Deploy**. In under 60 seconds, your site is built and live on `<project>.pages.dev`.

### Step 2: Point your Spaceship Domain DNS

1. In Cloudflare Pages, go to **Custom domains** → click **Set up a domain** → type `fredacorpal.world` (and `www.fredacorpal.world`).
2. Log into your **Spaceship** account:
   - Open **Spaceship Launchpad**.
   - Go to **Domain List** → click on your domain (`fredacorpal.world`).
   - Click **Advanced DNS**.
3. Add the following records:
   | Type      | Host  | Value / Target                  | TTL               |
   | :-------- | :---- | :------------------------------ | :---------------- |
   | **CNAME** | `@`   | `<your-project-name>.pages.dev` | Automatic / 1 min |
   | **CNAME** | `www` | `<your-project-name>.pages.dev` | Automatic / 1 min |
4. Save the records. SSL is issued automatically, and your site is live!

---

## 🛠️ Option 2: Direct Hosting on Spaceship Shared Hosting (cPanel Node.js App)

If you have purchased a **Spaceship Web Hosting** package that includes cPanel and want the server files hosted directly inside Spaceship:

### Step 1: Compile the Server for Node.js

Run the specialized Node.js build command in your terminal:

```bash
npm run build:node
```

This packages the standalone Nitro server into the `.output/` folder and configures it to run via `node`.

### Step 2: Access Spaceship cPanel

1. Open **Spaceship Launchpad**.
2. Go to **Hosting Manager** → find your web hosting package → click **cPanel** (or Manage Hosting).

### Step 3: Create the Node.js Application in cPanel

1. In cPanel, scroll to the **Software** section and click **Setup Node.js App** (CloudLinux Passenger).
2. Click **Create Application**.
3. Fill in the fields:
   - **Node.js version:** Select `20.x` or `22.x` (or the highest 18+ version available).
   - **Application mode:** `Production`.
   - **Application root:** Enter `fredacorpal` (or the folder name you prefer).
   - **Application URL:** Select your domain name (`fredacorpal.world`).
   - **Application startup file:** `app.js` _(we have created this entrypoint in the root directory)_.
4. Click **Create**.

### Step 4: Upload the Compiled Files

1. In cPanel, open **File Manager**.
2. Navigate to your Application Root folder (e.g., `/home/username/fredacorpal/`).
3. Upload the following files/folders from your local machine:
   - `.output/` directory (ensure `.output/server` and `.output/public` are uploaded)
   - `app.js` (from the repository root)
   - `package.json`
   - `.env` (contains your production keys and webhook URL)

### Step 5: Configure Environment Variables in cPanel

In the cPanel **Setup Node.js App** dashboard, scroll down to **Environment variables** and add:

- `NODE_ENV`: `production`
- `PORT`: `3000`
- `CONTACT_EMAIL`: `admin@fredacorpal.world`
- `RECRUITMENT_EMAIL`: `admin@fredacorpal.world`
- `INTERNAL_NOTIFICATION_EMAIL`: `nancyhowoodard@gmail.com` (private, internal recipient only)
- `SUPABASE_URL`: `https://pmzjkqsesiysrqegocuh.supabase.co`
- `SUPABASE_PUBLISHABLE_KEY`: `sb_publishable_Du68a9AtcGGEkeKGY4_e_w_1paIVxdb`
- `APPLICATIONS_WEBHOOK_URL`: `https://script.google.com/macros/s/AKfycbzwf_8bP6-T19lbhr8darpKO7oVAm9vosse0QY7j1odwx_yVsdZEHikXWoF3dIUrjJ5kg/exec`
- `GOOGLE_GENERATIVE_AI_API_KEY`: _(Optional, for Gemini AI chat)_

### Step 6: Start / Restart the Application

Click **Restart** at the top of the cPanel Node.js App page.
Navigate to `https://fredacorpal.world` in your browser.

---

## 🔍 Verification & Post-Launch Checklist

Once live:

- [ ] Test the **Navigation & Services**: verify all 10 service pages load with full content and department linkages.
- [ ] Test **Careers & Apply**: click **Apply Now** from any job role and submit a test application; verify it logs to your Google Sheets webhook.
- [ ] Test **Inquiry Form**: submit a contact/hiring form from `/contact`; verify submission feedback is instantaneous.
- [ ] Test **Support Assistant**: open the chatbot widget and click one of the suggested prompts to verify knowledge retrieval.
- [ ] Verify **SSL**: ensure the lock icon appears in the browser bar (`https://`). Spaceship provides free AutoSSL for all domains.
