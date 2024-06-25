async function getRandomQuote() {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      return { quote: data.content, author: data.author };
    } catch (error) {
      console.error('Error fetching the quote:', error);
      return { quote: "An error occurred. Please try again later.", author: "" };
    }
  }
  
  async function displayRandomQuote() {
    const randomQuote = await getRandomQuote();
    
    document.getElementById('text').innerText = `${randomQuote.quote}`;
    document.getElementById('author').innerText = `${randomQuote.author}`;
    
    updateShareButtons(randomQuote);
  }
  
  function updateShareButtons(quote) {
      const tweetButton = document.getElementById('tweet-quote');
      const tumblrButton = document.getElementById('tumblr-quote');
      const quoteText = encodeURIComponent(`"${quote.quote}" - ${quote.author}`);
      
      tweetButton.setAttribute('href', `https://twitter.com/intent/tweet?text=${quoteText}`);
      tumblrButton.setAttribute('href', `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=${quoteText}`);
  }
  
  document.getElementById('new-quote').addEventListener('click', displayRandomQuote);
  
  document.getElementById('tweet-quote').addEventListener('click', function() {
      const tweetButton = document.getElementById('tweet-quote');
      window.open(tweetButton.getAttribute('href'), '_blank');
  });
  
  document.getElementById('tumblr-quote').addEventListener('click', function() {
      const tumblrButton = document.getElementById('tumblr-quote');
      window.open(tumblrButton.getAttribute('href'), '_blank');
  });
  
  displayRandomQuote();
   