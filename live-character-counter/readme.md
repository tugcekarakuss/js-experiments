# Live Character Counter

This is a simple live character counter built with vanilla JavaScript.
It counts characters in real time as the user types and provides visual
feedback when approaching or reaching the character limit.

## Preview  
<img src="project-preview.gif" alt="Live Character Counter Preview">

## Features

- Live character counting while typing
- Maximum character limit (20 characters)
- Visual feedback based on character count
  - Grey for safe range
  - Orange when approaching the limit
  - Red when the limit is reached
- Warning message when the limit is reached
- Clean and minimal UI

## Technologies Used

- HTML
- CSS
- JavaScript (Vanilla)

## Project Structure

index.html  
style.css  
script.js  

## How It Works

- The user types text into the textarea.
- Characters are counted instantly using the `input` event.
- The counter updates in real time.
- When the character limit is reached:
  - Input is restricted automatically.
  - The counter turns red.
  - A warning message is displayed.

## How to Run

1. Clone or download the repository.
2. Open `index.html` in a browser.
3. Start typing to see the live character counter in action.

## Notes

This project was created for learning purposes to practice
DOM manipulation, event handling, conditional logic,
and handling user input limits using JavaScript.
