// responsible for counting characters in the compose box

$(document).ready(function() {

  // count characters in compose box
  $('#tweet-text').on('input', function() {

    // current length of tweet
    const count = this.value.length
    
    // display updated count
    $('.counter').text(140 - count)

    if (count >= 140) {
      $('.counter').css('color', 'red')
    } else {
      $('.counter').css('color', '#545149')
    }
  })
});