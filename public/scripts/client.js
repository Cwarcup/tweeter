/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(function(){ 
  console.log("Client-side JS loaded");


  // test code
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

  // create and return a new tweet element
  const createTweetElement = function(tweet) {
    const user = tweet.user;
    return (
    `
      <article class="tweet">
        <header>
          <div class="left-content">
            <div>
              <img src=${user.avatars}>
            </div>
            <h4 class="fName">${user.name}</h4>
          </div>
          <p class="username">${user.handle}</p>
        </header>
        <p class="tweet-text">
          ${tweet.content.text}
        </p>
        <footer>
          <data>
            ${tweet.created_at}
          </data>
          <div>
            <i class="tweet-icon fa-solid fa-flag fa-xs"></i>
            <i class="tweet-icon fa-solid fa-retweet fa-xs"></i>
            <i class="tweet-icon fa-solid fa-heart fa-xs"></i>
          </div>
        </footer>
      </article>
    `
    );
  }

  // loops through the array of tweets and creates a tweet element for each
  const renderTweets = function(tweets) {
    for (let individualTweets of tweets) {
      const tweetElement = createTweetElement(individualTweets);
      // append after new tweet section
      $(".new-tweet").after(tweetElement);
    }
  }
  // invoke renderTweets function
  renderTweets(data);


  // jquery to listen for new tweet button click
  // $("section.new-tweet button").on("click", function(event) {
  //   console.log("new tweet button clicked");
  //   event.preventDefault(); // prevents page from refreshing
  //   //  create ajax POST request to /tweets
  //   $.ajax('tweets', { method: 'POST'})
  //   .then(function(data) {
  //     console.log(data);
  //   })
  // })

  $('#submit-tweet').submit(function(event) {
    event.preventDefault();
    console.log("new tweet button clicked");
    // console.log('event: ', event.serialize());
    const tweetText = $('#submit-tweet').serialize()
    console.log(tweetText);
    $.ajax({
      url: '/tweets',
      type: 'POST',
      data: tweetText,
      success: function(data) {
        console.log("data was sent to server");
      },
      error: function(error) {
        console.log(error);
      }

    })
    // $.ajax('/tweets', { method: 'POST'})
    //   .then(function(data) {
    //     console.log(data);
    //   })
  })

});