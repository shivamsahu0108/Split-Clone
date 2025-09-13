# 🧾 Splitr

**Splitr** is a modern web application that helps you easily split expenses with friends, roommates, or family. Whether you're sharing dinner bills, travel costs, or household expenses, Splitr makes tracking and settling expenses effortless and transparent. 🤝

---

![License](https://img.shields.io/badge/license-MIT-green)
![Build](https://img.shields.io/badge/build-passing-brightgreen)
![Made with Next.js](https://img.shields.io/badge/next.js-13+-black?logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/styling-tailwindcss-blue?logo=tailwindcss)

---

## 📚 Table of Contents

- [🚀 Features](#-features)
- [🛠️ Tech Stack](#-tech-stack)
- [📁 Folder Structure](#-folder-structure)
- [🔧 Environment Variables](#-environment-variables)
- [🔐 Authentication Flow](#-authentication-flow)
- [📬 Email Notifications](#-email-notifications)
- [🎨 Design Philosophy](#-design-philosophy)
- [🏁 Getting Started](#-getting-started)
- [🎈 Usage](#-usage)
- [📡 API / Convex Backend Overview](#-api--convex-backend-overview)
- [📸 Screenshots](#-screenshots)
- [🧪 Testing (optional)](#-testing-optional)
- [🙌 Contributing](#-contributing)
- [📄 License](#-license)
- [❓ FAQ](#-faq)
- [🗺️ Roadmap / TODO](#-roadmap--todo)

---

## 🚀 Features

- 🔐 **Authentication** – Sign in and sign up securely using Clerk.
- 💸 **Expense Management** – Add, edit, categorize, and split expenses.
- 👥 **Group Support** – Create and manage groups for shared expenses.
- 💰 **Debt Settlements** – Settle up with other users and track balances.
- 📊 **Dashboard Overview** – Get a snapshot of all your financial activities.
- 📩 **Email Notifications** – Stay informed through email (powered by Resend).
- ⚙️ **Realtime Backend** – Powered by Convex for live data updates.

---

## 🛠️ Tech Stack

### Frontend
- 🖼️ [Next.js](https://nextjs.org/)
- ⚛️ [React](https://reactjs.org/)
- 🎨 [Tailwind CSS](https://tailwindcss.com/)
- ✨ [shadcn/ui](https://ui.shadcn.com/)

### Backend / Services
- 💾 [Convex](https://www.convex.dev/) – Serverless backend with real-time updates
- 👤 [Clerk](https://clerk.com/) – Authentication and session management
- 🔄 [Inngest](https://www.inngest.com/) – Event-driven background jobs
- 📧 [Resend](https://resend.com/) – Transactional email service
- 🔒 [Zod](https://zod.dev/) – Type-safe schema validation

---

## 📁 Folder Structure

```bash
splitr/
├── 📁 app/                  # Next.js app directory
│   ├── 📊 dashboard/        # Dashboard pages
│   ├── 👥 groups/           # Group-related components & pages
│   └── 💸 expenses/         # Expense-related routes
├── 🧩 components/           # Reusable React components
├── 📚 lib/                  # Utility functions, API handlers, etc.
├── ☁️ convex/               # Convex backend functions and schemas
├── 🖼️ public/               # Static assets
├── 🎨 styles/               # Global styles
├── 🤫 .env.local            # Environment variables (not committed)
└── 📄 README.md             # Project documentation
