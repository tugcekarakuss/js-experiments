# Password Strength Checker

This is a simple password strength checker built with vanilla JavaScript.
It evaluates the strength of a password in real time based on its length
and character composition.

## Preview  
<img src="project-preview.gif" alt="Password Strength Checker Preview">

## Features

- Live password strength evaluation
- Strength levels: Weak, Medium, Strong
- Visual feedback with color changes
- Strength rules based on length and content
- Real-time updates using the input event

## Technologies Used

- HTML
- CSS
- JavaScript (Vanilla)

## Project Structure

index.html  
style.css  
script.js  

## How It Works

- The user types a password into the input field.
- The application checks the password length and content.
- Password strength is determined using simple validation rules:
  - Weak: less than 6 characters
  - Medium: meets basic length requirements
  - Strong: at least 8 characters and contains both letters and numbers
- The strength label updates instantly with a corresponding color.

## How to Run

1. Clone or download the repository.
2. Open `index.html` in a browser.
3. Type a password to see its strength in real time.

## Notes

This project was created during the learning process to practice
real-time input handling, conditional logic, and basic validation
techniques using JavaScript.
