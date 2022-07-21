# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

Fork and clone this repository, then build upon it to practice their HTML, CSS, JS, jQuery and AJAX front-end skills, and their Node, Express back-end skills.

![responsive design](https://media3.giphy.com/media/mDiZD7VUW6GwFevPdi/giphy.gif?cid=790b761160e272e452e23695b76d2d4daa9be4b88194fcba&rid=giphy.gif&ct=g)
![creating tweets on smaller screens](https://media3.giphy.com/media/VvtGz3jm0fKvcS6x3n/giphy.gif?cid=790b761149230b33b91506df719a1584814939082a62d462&rid=giphy.gif&ct=g)
> Page will be responsive and mobile-friendly.

![creating a tweet](https://media2.giphy.com/media/ZT3qb4HKH5RdQcmUJa/giphy.gif?cid=790b761140aa3a5f2bc4b8d7aadfd680a350cfafbd6d5616&rid=giphy.gif&ct=g)
> Tweets are created without refreshing the page.

![Tweet length limit reached](https://media1.giphy.com/media/DfcKeSzOJxgsnDwSDv/giphy.gif?cid=790b7611a18108961117b965752b27fe7eeb84aa57ee7297&rid=giphy.gif&ct=g)
![Tweet Validation](https://media0.giphy.com/media/hFT4PnOk9i4oDoMEwx/giphy.gif?cid=790b76113a94506f4c00807266a5b4b05129e36d3e87ba62&rid=giphy.gif&ct=g)
> Validating tweets before they are created.



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
