# 🍽️ My Recipe Book

A full-stack recipe browser built with **Next.js 14 (App Router)** and **Node.js + Express.js**, using [TheMealDB](https://www.themealdb.com/api.php) as a data source.

---

## 📁 Project Structure

```
recipe_book/
├── frontend/ ← React + Next.js + TailwindCSS
├── backend/ ← Node.js + Express.js (proxy to TheMealDB)
└── README.md
```

### ✅ Prerequisites

- Node.js (v18+ recommended)
- npm

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/KrisChe8/recipe_book
cd recipe_book
```

### 2. Backend Setup

```bash
cd backend
npm install
npm run dev
```

#### 📦 The backend runs on: http://localhost:5000

According to the task 🛠️ .env (already included)

### 3. Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

#### You need to have 2 terminal windows - to run backend and frontend concurrently

#### 🌐 The frontend runs on: http://localhost:3000

According to the task 🛠️ .env (already included)

## How to Test Locally

If you have not done this yet:

### 1. Start backend:

```bash
cd backend
npm run dev
```

### 2. Start frontend in a separate terminal:

```bash
cd frontend
npm run dev
```

### 3. Visit: http://localhost:3000

ℹ️ If port `3000` is already in use, Next.js will automatically choose another available port (like `3001`, `3002`, etc.).  
📋 After running `npm run dev`, check the terminal log — it will display the exact port:

> ```
> Local: http://localhost:3001
> ```

### ✨ Features

✅ View all recipes

✅ View detailed recipe info

✅ Filter by:

Ingredient

Country

Category

✅ Responsive UI with TailwindCSS

### 📦 Tech Stack

**Frontend:** React, Next.js 14, TailwindCSS, TypeScript

**Backend:** Node.js, Express.js, Axios, TypeScript

**API Source:** [TheMealDB](https://www.themealdb.com/api.php)
