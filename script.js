var magic8Ball = {
	listOfAnswers: ['It is certain', 'It is decidedly so', 'Without a doubt', 'Yes - definitely', 'You may rely on it', 'As I see it, yes', 'Most likely', 'Outlook good', 'Yes', 'Signs point to yes', 'Reply hazy, try again', 'Ask again later', 'Better not tell you now', 'Cannot predict now', 'Concentrate and ask again', "Don't count on it", 'My reply is no', 'My sources say no', 'Outlook not so good', 'Very doubtful']
};
var random = Math.random();

var randomArray = random * magic8Ball.listOfAnswers.length;

var randomIndex = Math.floor(randomArray);

var randomAnswer = magic8Ball.listOfAnswers[randomIndex];

console.log(randomAnswer);


