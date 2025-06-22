# FourbTech — Next.js + Clerk + ShadCN UI Starter

A modern fullstack web application boilerplate built with:

- **Next.js 15 App Router**
- **Clerk** for authentication (Sign In / Sign Up / User management)
- **ShadCN UI** for beautiful, accessible UI components
- **Tailwind CSS** for styling
- **TypeScript** for type safety

---

## 🚀 Features

- ✅ Full authentication system using Clerk (Sign in, Sign up, Sign out, User profile)
- 🎨 Component library via ShadCN UI
- ⚡ App Router (Next.js 15+) with middleware-based route protection
- 🌙 Theme support with Tailwind CSS
- 🔐 Protected routes using Clerk middleware
- 🧱 Clean, scalable folder structure
- 🧑‍💻 Developer-friendly setup with hot reload

---

## 📁 Folder Structure

app/
├── (auth)/ # Auth routes (sign-in, sign-up)
│ ├── layout.tsx # Auth layout (centered form)
│ ├── sign-in/
│ │ └── page.tsx
│ └── sign-up/
│ └── page.tsx
├── layout.tsx # Root layout with ClerkProvider
├── page.tsx # Home page (public or private)
middleware.ts # Clerk auth middleware
public/
styles/
components/ # Reusable UI components

---

## 🧰 Tech Stack

| Tech        | Purpose                        |
| ----------- | ------------------------------ |
| Next.js     | React Framework                |
| Clerk       | Authentication & user sessions |
| ShadCN UI   | UI Components (based on Radix) |
| TailwindCSS | Utility-first styling          |
| TypeScript  | Static typing                  |

---

## 🔧 Installation & Setup

1. **Clone the repository**

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo

## Install dependencies
npm install
# or
yarn install

## Set up environment variables
CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
CLERK_SECRET_KEY=your-clerk-secret-key
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key

## Run the app
npm run dev
# or
yarn dev


## 🔐 Authentication
Clerk handles:
    Sign In / Sign Up
    Session management
    JWT and server-side auth
    Protected routes with middleware


## 🧪 Development Notes
UI components are built with ShadCN UI
Auth routes are wrapped in (auth)/layout.tsx to center forms
Global layout (app/layout.tsx) wraps all pages with <ClerkProvider>

## 📦 Planned Features
 Dashboard with protected routes
 Custom theme toggle (light/dark mode)
 Profile page using Clerk's UserProfile
 API routes with authentication
 Form handling and validation

## 📝 License
This project is licensed under the MIT License.

## 💬 Feedback & Contributions
Found a bug or have a feature request?
Feel free to open an issue or submit a PR!

## 👨‍💻 Author
Built with 🔥 for FourbTech by Sakib Ahmed