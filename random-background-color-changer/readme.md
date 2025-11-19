# Random Background Color Changer

A simple JavaScript project that generates a random hex color and applies it to the page background each time the user clicks the button. This project was created as part of my JavaScript learning process, focusing on DOM manipulation, event handling, and basic logic building.

## 🖼️ Preview

<img src="project-preview.gif" height="500px" alt="Background Color Changer Preview">


## 🎯 Purpose of the Project
The goal of this mini project is to practice:
- Selecting and manipulating DOM elements  
- Handling user interactions with event listeners  
- Generating random hex colors using JavaScript  
- Updating content dynamically  
- Understanding loops, indexing and Math functions  


## 🧪 How It Works
- A string of hex characters (`0-9` and `A-F`) is defined in the JavaScript file.  
- Each button click triggers the `changeColor()` function.  
- The function loops 6 times to build a full hex color (e.g. `#A3F45D`).  
- A random index is created on each loop using:  

  ```
  Math.floor(Math.random() * chars.length)
  ```
- The background color of the page updates to the generated hex value.
- The current color value is displayed on the screen
## 📂 Project Structure
```
│── index.html
│── style.css
└── main.js
```

## 📘 What I Learned
- Selecting DOM elements with `document.querySelector()`
- Updating styles dynamically with JavaScript
- Understanding how random hex color generation works
- Using `Math.random()` and `Math.floor()`
- Updating text using `.innerText`
- Connecting JS logic with UI interaction

## ▶️ How to Run
1. Download or clone the project.
2. Open `index.html` in your browser.
3. Click the button to change the background color.

## 📜 Notes
This project is part of my JavaScript Learning Lab and was created only for learning purposes.

