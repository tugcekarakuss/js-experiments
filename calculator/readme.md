# Calculator App

A simple and stylish calculator application built with HTML, CSS, and JavaScript.  
The app performs basic arithmetic operations with a clean UI and responsive layout.

This project focuses on practicing DOM manipulation, event handling, and basic calculation logic on the client side.

## Features

- Basic arithmetic operations (+, −, ×, ÷)
- Clear (C) button to reset input
- Real-time display updates
- Responsive layout for different screen sizes
- Modern and minimal UI design
- No external libraries

## Preview

<img src="images/project-preview.gif" alt="Calculator App Preview">

## Technologies Used

- HTML
- CSS
- JavaScript

## How It Works

- Button clicks append numbers or operators to the current expression.
- The expression is displayed in real time on the calculator screen.
- Pressing the equals button evaluates the expression and shows the result.
- The clear button resets the calculator to its initial state.
- All interactions are handled on the client side without page reloads.

## Project Structure

```
│── index.html # Calculator structure and buttons
│── style.css # Styling, layout, and responsiveness
└── script.js # Calculator logic and event handling
```


## What I Learned

- Selecting DOM elements using `querySelector`
- Handling user interactions with inline event handlers
- Updating input values dynamically
- Managing application state with JavaScript
- Creating responsive layouts using CSS Grid
- Styling UI components with modern CSS techniques

## How to Run

1. Download or clone the repository
2. Open `index.html` in any modern browser
3. Use the calculator buttons to perform calculations

## Notes

This project was created for learning and practice purposes.  
It can be improved by removing `eval`, adding keyboard support, and handling more complex expressions.
