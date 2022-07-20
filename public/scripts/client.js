$(function() {
  // function to prevent cross-site scripting attacks
  const escape = function(str) {
    // eslint-disable-next-line
    let div = document.createElement('div');
    // eslint-disable-next-line
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
  };

  // loops through the array of tweets and creates a tweet element for each
  const renderTweets = function(tweets) {
    for (let individualTweets of tweets) {
      const tweetElement = createTweetElement(individualTweets);
      $('.new-tweet').after(tweetElement);
    }
  };

  // GET tweets from /tweets on server
  const loadTweets = function() {
    $.ajax({
      url: '/tweets',
      type: 'GET',
      dataType: 'json',
      success: function(data) {
        renderTweets(data);
      },
      error: function(error) {
        console.log(error);
      }
    });
  };
  // load tweets on page load
  loadTweets();


  // submit new tweet
  $('#submit-tweet').submit(function(event) {
    event.preventDefault();

    // clean up
    $('#empty-tweet').slideUp();
    $('#long-tweet').slideUp();
    $('new-tweet').slideUp();

    // validation of tweets
    const tweetData = event.target[0].value; // get value from tweet textarea
    if (!tweetData) {
      $('#empty-tweet').css('display', 'flex');
      $('#empty-tweet').slideDown();
      $('.new-tweet').slideDown();
      return;
    }

    if (tweetData.length > 140) {
      $('#long-tweet').css('display', 'flex');
      $('#long-tweet').slideDown();
      $('.new-tweet').slideDown();
      return;
    }
      

    // create ajax POST request to /tweets
    const tweetText = $('#submit-tweet').serialize();
        
    $.ajax({
      url: '/tweets',
      type: 'POST',
      data: tweetText,
      success: function() {
        // clear the form
        $('#tweet-text').val('');
        // render the new tweet in the list
        loadTweets();
      },
      error: function(error) {
        console.log(error);
      }
    });
  });
});