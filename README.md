# 🍋 Lemonade Stand – React App

This is a simple React application built as part of a school assignment.
In **part 2**, the app has been upgraded to use **Redux Toolkit** for global state management instead of the 'useState' hook. 

---

## App functionality 

The app tracks the current **profit** using a global Redux store.
Selling a cup of lemonade increases the profit by $5.
Buying more lemons decreases the profit by $2.

The UI updates dynamically when the profit changes. 
Profit is visually highlighted: 

- Green when positive
- Red when negative
- Neutral when zero

---

## Technologies used

- React 
- Redux Toolkit
- React Redux
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

npm install 

4. Start the development server: 

npm run dev

Open the app in your browser using the URL shown in the terminal
(usually http://localhost:5173).

---