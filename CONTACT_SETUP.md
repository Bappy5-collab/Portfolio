# Contact form (SMTP) setup

The contact form sends emails via SMTP using a small Node.js server. Credentials are **never** sent to the browser; only the server uses them.

## 1. Create `.env`

Copy `env.example` to `.env` in the project root:

```bash
cp env.example .env
```

Edit `.env` and set:

- `SMTP_HOST` – e.g. `smtp.gmail.com`
- `SMTP_PORT` – e.g. `465`
- `SMTP_USER` – your email (e.g. Gmail address)
- `SMTP_PASS` – **App Password** (for Gmail: [create one](https://myaccount.google.com/apppasswords))
- `CONTACT_RECEIVER` – email where form submissions go (can be same as `SMTP_USER`)

Do **not** commit `.env`; it is in `.gitignore`.

## 2. Run the contact API

**Development (form + API together):**

```bash
npm run dev:all
```

This starts Vite (frontend) and the contact server (port 3001). The frontend proxies `/api/contact` to the server.

**Or run separately:**

- Terminal 1: `npm run dev` (Vite)
- Terminal 2: `npm run server` (contact API on port 3001)

## 3. Production

Deploy the contact server somewhere (Railway, Render, VPS, etc.) and set the same env vars there.

In your frontend build/deploy, set:

```bash
VITE_CONTACT_API_URL=https://your-contact-api-url.com
```

so the form posts to `https://your-contact-api-url.com/api/contact`.
