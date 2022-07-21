# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

This repository is the starter code for the project: Students will fork and clone this repository, then build upon it to practice their HTML, CSS, JS, jQuery and AJAX front-end skills, and their Node, Express back-end skills.

![responsive design](https://media0.giphy.com/media/SABTzBphjBipmEATWn/giphy.gif?cid=790b7611cf479e5db32f190e69aff1b650b416ca135012e0&rid=giphy.gif&ct=g)

![creating a tweet](https://media2.giphy.com/media/ZT3qb4HKH5RdQcmUJa/giphy.gif?cid=790b761140aa3a5f2bc4b8d7aadfd680a350cfafbd6d5616&rid=giphy.gif&ct=g)

![creating tweets on smaller screens](https://media0.giphy.com/media/PY0MD6LxREodQZZmE3/giphy.gif?cid=790b761111b0a644d98a22586aa34b50d030b135d485c7c2&rid=giphy.gif&ct=g)

## Getting Started

1. Clone this repository onto your local device.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm start` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.
5. Render sass files using the `npm run sass` command.

## Dependencies

- Express
- Node 5.10.x or above

## Structure of the project

- `server/index.js`: determines how `index.html` is served by Express. 
- `./lib/in-memory-db`: object with an array of tweets.
- `./lib/data-helpers.js`: provide interface for accessing the in-memory database (tweets). Function accepts `db` as an argument.

## Tools Used

- Flexbox for layout and media queries for responsive design.
- [Sass](https://sass-lang.com/documentation/) for styling.
- [jQuery](https://api.jquery.com/) for DOM manipulation.
- Avatars created by [Freepik - Flaticon](https://www.flaticon.com/free-icons/man)
- Color scheme from [coolors.co](https://coolors.co/palette/264653-2a9d8f-e9c46a-f4a261-e76f51)
