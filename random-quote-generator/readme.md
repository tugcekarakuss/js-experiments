# 📜 Random Quote Generator  

A simple JavaScript project that displays a random inspirational quote each time the user clicks the button. This mini project focuses on DOM manipulation, event handling, object usage, and dynamic content updates.

## 🖼️ Preview  
<img src="project-preview.gif" height="500px" alt="Background Color Changer Preview">


## 🎯 Purpose of the Project  

The main goal of this project is to practice:

- Selecting and updating DOM elements  
- Handling user interactions through event listeners  
- Working with JavaScript objects  
- Displaying dynamic text content  
- Generating random values using `Math.random()`  


## 🧪 How It Works  

- The project contains a JavaScript object where each key is an author and each value is a quote.  
- When the user clicks the **Generate Quote** button, the `randomQuote()` function is executed.  
- This function:
  - Gets all author names using `Object.keys()`
  - Selects one random author with:  
    ```js
    Math.floor(Math.random() * authors.length)
    ```
  - Retrieves the quote connected to that author  
  - Updates the text on the page using:
    ```js
    document.getElementById("quote").innerHTML = quote  
    document.getElementById("author").innerHTML = author
    ```

- The quote and author change instantly without reloading the page.


## 📂 Project Structure  
```
│── index.html
│── style.css
└── main.js
```


## 📘 What I Learned  

- Selecting DOM elements with `document.querySelector()` and `getElementById()`  
- Updating text dynamically with `.innerHTML`  
- Using objects to store relational data (author → quote)  
- Creating random selections with `Math.random()`  
- Handling click events with `.addEventListener()`  


## ▶️ How to Run  

1. Download or clone the repository.  
2. Open **index.html** in your browser.  
3. Click the **Generate Quote** button to display a random quote.


## 📜 Notes  

This project is part of my JavaScript learning journey and was created for educational purposes only.  
Feel free to use or improve it!
