$(document).ready(function(){
	// Hide default answer on page load
	$("#answer").hide();
	
    var magic8Ball = {
        listOfAnswers: ['It is certain', 'It is decidedly so', 'Without a doubt', 'Yes - definitely', 'You may rely on it', 'As I see it, yes', 'Most likely', 'Outlook good', 'Yes', 'Signs point to yes', 'Reply hazy, try again', 'Ask again later', 'Better not tell you now', 'Cannot predict now', 'Concentrate and ask again', "Don't count on it", 'My reply is no', 'My sources say no', 'Outlook not so good', 'Very doubtful']
    };


// Randomly choose answer from array then display it on page 
    magic8Ball.askQuestion = function(question){
        // Randomly choose answer then assign to answer variable
        var random = Math.random();
        var randomArray = random * magic8Ball.listOfAnswers.length;
        var randomIndex = Math.floor(randomArray);
        var answer = this.listOfAnswers[randomIndex];

        //Change displayed answer to randomly chosen answer from array
        $("#answer").text(answer);
        //Switch ball image to answer side
        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
        //Shake Magic 8-ball
        $("#8ball").effect("shake");
        // Fade in answer over 4 seconds
        $("#answer").fadeIn(4000);

        // Log question and answer to console
        console.log(question);
        console.log(answer);
    };
    
    // Prompt user for new question then run answer function
    var onClick = function() {
        // Hide answer on screen
        $("#answer").hide();
        //Switch ball image to question side
        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");

        // Delay prompt so image has time to change
        setTimeout(function(){
            // show prompt
            var question = prompt("ASK A YES/NO QUESTION!");
            magic8Ball.askQuestion(question);}
        , 500);
    };


    // Run question prompt on button click
    $("#questionButton").click(onClick);






});