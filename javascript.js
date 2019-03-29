var quotes = [
  "It is perilous to study too deeply the arts of the Enemy, for good or for ill. But such falls and betrayals, alas, have happened before.",
  "Go not to the Elves for counsel, for they will say both no and yes.",
  "Faithless is he that says farewell when the road darkens",
  "He that breaks a thing to find out what it is has left the path of wisdom.",
  "Do not meddle in the affairs of Wizards, for they are subtle and quick to anger.",
  "Hill. Yes, that was it. But it is a hasty word for a thing that has stood here ever since this part of the world was shaped.",
  "The praise of the praiseworthy is above all rewards."
];
function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];

  document.getElementById('twitterLink').href = "http://twitter.com/intent/tweet/?text=" + encodeURIComponent(quotes[randomNumber])
}
