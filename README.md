# Bookmark Saver

A simple Bookmark Saver application built with HTML, CSS, and JavaScript. It allows users to save their favorite website links, access them later, and remove bookmarks when they are no longer needed.

## Features

- **Add Bookmarks:** Save a website using its name and URL.
- **URL Validation:** Checks that URLs start with `http://` or `https://`.
- **Display Bookmarks:** Dynamically displays saved bookmarks on the page.
- **Remove Bookmarks:** Remove individual bookmarks from the list.
- **Local Storage:** Saves bookmarks in the browser's local storage so they remain available after refreshing or reopening the page.
- **Open in New Tab:** Opens bookmarked websites in a new browser tab.

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Browser Local Storage

## JavaScript Concepts Practiced

- DOM manipulation using `getElementById()` and `createElement()`
- Event listeners (`click` and `DOMContentLoaded`)
- Input handling and validation
- Conditional statements (`if/else`)
- String methods (`trim()` and `startsWith()`)
- Logical operators (`&&` and `!`)
- Functions and function parameters
- Array methods (`push()`, `forEach()`, and `filter()`)
- JSON methods (`JSON.stringify()` and `JSON.parse()`)
- Browser Local Storage (`getItem()` and `setItem()`)
- Dynamic element creation and removal

## How It Works

1. Users enter a bookmark name and URL.
2. The application validates that both fields are filled in and that the URL starts with `http://` or `https://`.
3. Valid bookmarks are displayed in the bookmark list and saved in Local Storage.
4. When the page loads, previously saved bookmarks are retrieved from Local Storage and displayed.
5. Users can remove individual bookmarks from the list, and the changes are updated in Local Storage.

## What I Learned

Through this project, I practiced working with browser Local Storage to persist data, dynamically creating and managing DOM elements, validating user input, and using array methods to manage stored data.

This project helped me understand how to combine DOM manipulation, event handling, arrays, and Local Storage to build a functional JavaScript application.

Live Link: https://jaima-konia.github.io/Bookmark-Saver/
