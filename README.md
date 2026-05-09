# Portfolio Projects Page

## Overview
This is a dynamic portfolio project page built using HTML, CSS, and JavaScript. It displays projects using JavaScript objects and renders them dynamically into the DOM.

## Features
- JavaScript object-based project storage
- Dynamic DOM rendering
- sessionStorage persistence using JSON.stringify() and JSON.parse()
- Responsive grid layout for project cards

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6)

## How It Works
1. Project data is stored as JavaScript objects.
2. Objects are stored in an array.
3. The array is saved into sessionStorage.
4. On page load:
   - If data exists → retrieve it
   - If not → initialize default projects
5. Projects are rendered dynamically into the page.

## Setup Instructions
1. Clone or download this repository
2. Open `index.html` in your browser
3. View dynamically loaded project cards

## Notes
No external dependencies required.
