$(function(){ 
  console.log("Client-side JS loaded");

  // function to prevent cross-site scripting attacks
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

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
            <h4 class="fName">${escape(user.name)}</h4>
          </div>
          <p class="username">${escape(user.handle)}</p>
        </header>
        <p class="tweet-text">
          ${escape(tweet.content.text)}
        </p>
        <footer>
          <data>
            ${timeago.format(tweet.created_at)}
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

  
  // GET tweets from server
  const loadTweets = function() {
    $.ajax({
      url: '/tweets',
      type: 'GET',
      dataType: 'json',
      success: function(data) {
        renderTweets(data)
      },
      error: function(error) {
        console.log(error);
      }
    })
  }
  // load tweets on page load
  loadTweets();

  const errorMessage = function(message) {
    return (
      `
      <div class="error-message">
        <div class="error-message-icon">
          <i class="fa-close fa-solid"></i>
        </div>
        <p>${message}</p>
      </div>
      `
    )
  }

  // create a new tweet
    // jquery to listen for new tweet button click
    $('#submit-tweet').submit(function(event) {
      event.preventDefault();

      // get value from tweet textarea
      const potentialTweet = $('#tweet-text').val();
      // validation 
      if (potentialTweet.length > 140) {
        $('.new-tweet').before(errorMessage("Tweet is too long!"))

      } else if (potentialTweet.length === 0 || potentialTweet === "" ) {
        const error = errorMessage("Tweet is empty!");
        $('.new-tweet').before(errorMessage("You can't tweet nothing!"))

      } else {

        // data from new-tweet form
        const tweetText = $('#submit-tweet').serialize()
        
        // create ajax POST request to /tweets
        $.ajax({
          url: '/tweets',
          type: 'POST',
          data: tweetText,
          success: function(data) {
            console.log("data was sent to server");
            // clear the form
            $('#tweet-text').val('');
            // render the new tweet in the list
            loadTweets();
          },
          error: function(error) {
            console.log(error);
          }
        })
      }
    })
});