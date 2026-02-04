function analyzeSentiment(text) {
    var sentiment = require('sentiment');
    var sentiment = new sentiment();
    var result = sentiment.analyze(text);
    return result;
} 

console.log(analyzeSentiment("I love programming! It's so much fun."));
console.log(analyzeSentiment("HTML,CSS, and JavaScript are the core technologies of the web."));