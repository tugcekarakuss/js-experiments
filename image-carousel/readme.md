# Image Carousel

A simple and modern image carousel built with HTML, CSS, and JavaScript.  
Users can navigate between images using previous/next buttons or jump directly to any image using dot navigation.  
All transitions are handled on the client side without page reloads.

## Features

- Next and previous slide navigation
- Clickable dot navigation
- Active slide highlighting
- Smooth CSS transitions
- Fully responsive layout
- Lightweight structure without external libraries

## Preview
<img src="project-preview.gif"  alt="Image Carousel Preview">


## Technologies Used

- HTML
- CSS
- JavaScript

## How It Works

- The first image is shown by default.
- Clicking the next/prev buttons updates the current index.
- When the index exceeds the last image, it loops back to the first.
- The dot elements update according to the active image.
- Clicking any dot switches directly to the corresponding image.

## Project Structure

```
│── index.html # Carousel structure
│── style.css # Styling and animations
└── script.js # Logic, navigation, and event handling
```


## What I Learned

- Selecting DOM elements using `querySelector` and `getElementsByClassName`
- Handling click events with `addEventListener`
- Updating classes dynamically using `classList`
- Managing image indexes and creating looped navigation
- Designing interactive UI components
- Improving project organization and readability

## How to Run

1. Download or clone the repository:
2. Ensure the images are placed in an `images/` folder.
3. Open `index.html` in your browser.
4. Use the controls to navigate through images.

## Notes

This project was created for practice and learning purposes.  
You are free to use, modify, and improve it.
