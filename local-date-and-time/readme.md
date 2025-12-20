# Local Date & Time

A simple and minimal web application that displays the **current local date and time**.  
The project focuses on clean UI, readable code structure, and correct time/date formatting using vanilla JavaScript.

---

## Live Demo

🔗 https://local-date-and-time.netlify.app/

---

## Preview

<img src="images/project-preview.png" alt="Local Date and Time Preview">

---

## Features

- Displays current local time in **12-hour format (AM / PM)**
- Displays current date with:
  - Day name
  - Correct ordinal suffix (st, nd, rd, th)
  - Month name
- Time updates every second
- Date updates automatically without page reload
- Minimal and clean user interface
- Fully responsive layout

---

## Technologies Used

- HTML
- CSS
- JavaScript

---

## How It Works

- The current date and time are retrieved using the JavaScript `Date` object.
- Time is formatted into a 12-hour format with AM / PM.
- Minutes and hours are padded for consistent display.
- The date includes the day name, month name, and correct ordinal suffix.
- Time updates every second using `setInterval`.
- Date updates automatically to ensure accuracy over long sessions.

---

## Project Structure

```
│── index.html # Page structure
│── style.css # Styling and layout
│── script.js # Time and date logic
│── images/ # Project assets
```

---

## Design

- UI/UX design created by me
- The design process was planned and structured using Figma

🔗 **Figma Design:**  

https://www.figma.com/community/file/1583234516118868337/cozy-snowman-clock

---

## What I Learned

- Working with the JavaScript `Date` object
- Formatting time and date manually
- Handling intervals with `setInterval`
- DOM manipulation with `querySelector`
- Separating time and date logic
- Improving small utility-style projects

---

## How to Run

1. Download or clone the repository.
2. Open `index.html` in your browser.
3. The local date and time will be displayed automatically.

---

## Notes

This project was fully **designed and coded by me** for practice and learning purposes.  
You are free to use, modify, and improve it.
