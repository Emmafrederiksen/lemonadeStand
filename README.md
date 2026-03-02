# 🍋 Lemonade Stand – React + Redux Web App

This project is a React application built as part of a school assignment.
The application evolves across multiple parts and demonstrates global state management, routing, and API integration.

---

## Features

### Home Page

- Displays the current profit
- Profit is managed globally using Redux Toolkit
- Sell lemonade (+$5)
- Buy lemons (-$2)
- Dynamic UI updates
- Profit color changes:
  - 🟢 Green when positive
  - 🔴 Red when negative
  - ⚪ Neutral when zero


### Shop Page (API Integration)

- Fetches lemon-related drinks from:
```bash
https://www.thecocktaildb.com/api/json/v1/1/search.php?s=lemon
```
- Displays drinks in a responsive grid layout
- Each drink includes:
  - Name
  - Image
  - “Add to Cart” button
- Clicking “Add to Cart” updates the global Redux state


### Cart Page

- Displays all added drinks
- Quantity management:
  - ➕ Increase quantity
  - ➖ Decrease quantity
  - 🗑 Remove product
- Checkout summary section:
  - Displays total number of selected items
  - Fully managed using Redux global state

---

## State Management

This project uses **Redux Toolkit** for global state management.

### profitSlice

Handles:

- Current profit
- Increase/decrease logic

### cartSlice

Handles:

- Cart items
- Quantity Logic
- Add / Remove functionality

Global state is accessed using:

- useSelector
- useDispatch 

---

## Project Structure

```
src/
│
├── assets/
│
├── components/
│   ├── drinkCard/
│   │   ├── DrinkCard.jsx
│   │   └── DrinkCard.css
│   │
│   ├── layout/
│   │   ├── Layout.jsx
│   │   └── Layout.css
│   │
│   ├── lemonadeStand/
│   │   ├── LemonadeStand.jsx
│   │   └── LemonadeStand.css
│   │
│   └── navbar/
│       ├── Navbar.jsx
│       └── Navbar.css
│
├── pages/
│   ├── Home.jsx
│   ├── Shop.jsx
│   ├── Shop.css
│   ├── Cart.jsx
│   └── Cart.css
│
├── redux/
│   ├── cartSlice.js
│   ├── profitSlice.js
│   └── store.js
│
├── styles/
│   ├── globals.css
│   └── variables.css
│
├── App.jsx
├── main.jsx
```
---

## Technologies used

- React 
- Redux Toolkit
- React Redux
- React Router
- Vite
- Javascript
- CSS 

---

## Purpose of the assignment

The goal of this assignment is to understand:

- The difference between local state and global state
- How to use Redux Toolkit for state management
- How to connect React components using useSelector and useDispatch
- How React updates the UI based on global state changes

---

## How to run the project

Make sure you have **Node.js** installed.

1. Clone the repository:
```bash
git clone https://github.com/DIT_GITHUB_NAVN/lemonadeStand.git
```

2. Navigate to the project folder:
```bash
cd lemonadeStand
```

3. Install dependencies: 
```bash
npm install 
```

4. Start the development server: 
```bash
npm run dev
```

Open the app in your browser using the URL shown in the terminal
(usually http://localhost:5173).

---