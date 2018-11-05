$(function ready() {
  function resetCharacterCounter() {
    $('.counter').text(140);
  }

  // on input event, edit counter tag
  // callable with return value of current count
  function remainingCharacterCount() {
    const $textArea = $('#composer');
    const characterLimit = 140;
    $textArea.on('input', function count() {
      const tweetLength = $textArea.val().length;
      const counter = characterLimit - tweetLength;
      $textArea.siblings('.counter').text(counter);
      if (counter < 0) {
        $textArea.siblings('.counter').addClass('text-error');
      } else {
        $textArea.siblings('.counter').removeClass('text-error');
      }
    });
    return characterLimit - $('#composer').val().length;
  }

  // composer box transition animation
  function composerTransition() {
    const $composerContainer = $('#submit-form');
    const $composeButton = $('#composer-button');
    // to prevent errors focusing a hidden element
    let hidden = 0;
    $composeButton.on('click', function transition() {
      if (hidden) {
        $composerContainer.slideDown('medium');
        $('#composer').focus();
        hidden -= 1;
      } else {
        $composerContainer.slideUp('medium');
        hidden += 1;
      }
    });
  }

  // create tweets out of object information
  function createTweetElement(tweetObj) {
    // deconstruct new tweet object
    const { user, content, created_at } = tweetObj;
    const { name, avatars, handle } = user;

    // generate an easy to read time since the post was generated
    const timeSincePost = moment(created_at).fromNow();

    // jquery construction of DOM element
    const $article = $('<article>').addClass('tweet-article');
    const $header = $('<header>').addClass('tweet-header group faded');
    const $avatar = $('<img>').addClass('tweet-img float-left').attr('src', avatars.small);
    const $name = $('<h3>').addClass('tweet-name float-left').text(name);
    const $username = $('<p>').addClass('tweet-username float-right').text(handle);
    const $body = $('<p>').addClass('tweet-body').text(content.text);
    const $hr = $('<hr/>').addClass('tweet-rule');
    const $footer = $('<footer>').addClass('tweet-footer group');
    const $time = $('<p>').addClass('footer-text float-left').text(timeSincePost);
    const $footImgs = $('<span>').addClass('footer-img float-right').html('<img src="/images/flag-tweet.png"></img><img src="/images/retweet.png"><img src="/images/heart-tweet.js.png">');

    $($article).append($header, $body, $hr, $footer);
    $($header).append($avatar, $name, $username);
    $($footer).append($time, $footImgs);

    return $article;
  }

  // prepend tweet DOM element
  function renderTweets(tweetArray) {
    tweetArray.forEach((tweet) => {
      $('.tweets').prepend(createTweetElement(tweet));
    });
  }

  // from database
  function loadTweets() {
    $.ajax({
      method: 'GET',
      url: '/tweets',
    }).done(arrayOfTweets => renderTweets(arrayOfTweets));
  }

  // confirm tweet conforms to max length and non empty
  // render error text
  function validTweet() {
    const tweet = $('#composer').val();
    const maxTweetLength = 140;
    if (tweet.length > maxTweetLength) {
      $('.invalid-tweet-error').text('Maximum character length is 140').slideDown('fast');
      return false;
    }
    if (tweet.length === 0) {
      $('.invalid-tweet-error').text('Please enter a message.').slideDown('fast');
      return false;
    }
    return true;
  }

  function clearErrors() {
    $('.invalid-tweet-error').slideUp('fast');
  }

  function tweetListener() {
    $('#submit-form').on('submit', function submit(event) {
      const tweetBody = $(this).serialize();
      event.preventDefault();
      if (!validTweet()) return; // displays error text
      $.ajax({
        method: 'POST',
        url: '/tweets',
        data: tweetBody,
      })
        .then((err) => {
          if (err) { console.log(err); }
          $('#composer').val('');
          loadTweets();
          clearErrors();
          resetCharacterCounter();
        });
    });
  }

  // on input
  remainingCharacterCount();
  // initial get request to db
  loadTweets();
  // on Submit
  tweetListener();
  // on "composer" button click
  composerTransition();
});
