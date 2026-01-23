# Stateful Product Filter Engine

This is a state-driven product filtering application built with vanilla JavaScript.
Users can filter products by category, price range, stock availability, and sort
the results dynamically without reloading the page.

## Preview
<img src="./project-preview.gif" alt="Product Filter Preview">

## Features

- Filter products by multiple categories (checkbox-based)
- Filter products by maximum price using a range slider
- Show only in-stock products
- Sort products by price (ascending / descending)
- Combine multiple filters at the same time
- Dynamic rendering with no page reload
- Centralized state management for all filters

## Technologies Used

- HTML
- CSS
- JavaScript (Vanilla)

## Project Structure

index.html  
style.css  
script.js  

## How It Works

- All filter values are stored in a single `filterState` object.
- User interactions (checkbox, slider, select input) update the state.
- Every state change triggers the `applyFilters()` function.
- Filters are applied step by step:
  - Category filter
  - Price filter
  - Stock availability filter
  - Sorting logic
- The final filtered list is rendered dynamically to the UI.

## How to Run

1. Clone or download the repository.
2. Open `index.html` in a browser.
3. Use the filters to interact with the product list.

## Notes

This project was created for learning purposes to practice:
- State-based UI logic
- Array filtering and sorting
- DOM manipulation
- Event handling
- Building scalable filter logic
- Separating state, logic, and rendering
