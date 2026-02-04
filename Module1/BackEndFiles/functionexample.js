function analyzeSentiment(text) {
    const sentiment = require('sentiment');
    const sentimentAnalyzer = new sentiment();
    const result = sentimentAnalyzer.analyze(text);
    return result;
} 

console.log(analyzeSentiment("I love programming! It's so much fun."));
console.log(analyzeSentiment("HTML,CSS, and JavaScript are the core technologies of the web."));