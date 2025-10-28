# SyntaxilitY Starter UI Kit

A modern, minimal, and scalable **Next.js Starter Kit** built for real-world SaaS & AI-driven applications.  
This kit streamlines authentication, UI theming, state management, database integration, and API structure — so you can **build fast and ship faster**.

## Features

| Feature | Description |
|--------|-------------|
| **Clerk Authentication** | Secure user authentication with customizable UI modals. |
| **Dark/Light Theme** | Theme switching powered by `Skiper UI` with persistence. |
| **Custom UI Components** | Clean, minimal UI built using **HeroUI** and Tailwind. |
| **Prisma ORM** | Database models and client setup ready for PostgreSQL. |
| **Zustand Store** | Lightweight and scalable global state management. |
| **Middleware + Proxy Setup** | Secure routes & API proxy for server communication. |
| **Environment Configuration** | `.env` readiness for backend-service keys. |
| **API Response Handler** | Standardized and unified API response wrapper. |
| **API Provider Handler** | Abstracted data fetch layer for UI components. |

---

## Tech Stack

- **Next.js 14+ / App Router**
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Clerk Authentication**
- **Prisma ORM**
- **HeroUI Components**
- **Zustand State Store**
- **Skiper UI Theme System**

---

## Project Structure

```
src/
├─ app/                # App routes and layout
├─ components/         # UI components
├─ store/              # Zustand global state stores
├─ lib/                # Helpers, config, API handlers
├─ prisma/             # Prisma schema & client
````

---

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/TariqMehmood1004/SyntaxilitY-Starter-Kit-Nextjs-Reactjs.git
cd SyntaxilitY-Starter-Kit-Nextjs-Reactjs
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server
```bash
npm run dev
```