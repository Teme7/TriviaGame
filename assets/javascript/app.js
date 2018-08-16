//global variables
var timer;

var qn = $("#quiz");

var game = {
    counter: 120,
    right: 0,
    wrong: 0,

    countdown: function(){
        game.counter--;
        $("#counter-number").html(game.counter);
        if(game.counter === 0){
            console.log("Time is up!");
            game.done();
        }
    },

    start: function(){
        timer = setInterval(game.countdown, 1000);

        $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");

        $("#start").remove();

        for(var q = 0; q < questions.length; q++){
            panel.append("<h2>" + questions[i].question + "</h2>");
            for(var a = 0; a < questions[q].answers.length; a++){
                panel.append("<input type='radio' name='question-" + q + "' value='" + questions[q].answers[a] + "''>" + questions[q].answers[a]);
            }
        }

        panel.append("<button id='done'>I'm So Done!</button>");
    },

    done: function(){

        $.each($("input[name='question-0']:checked"), function(){
            if($(this).val() === questions[0].right){
                game.right++;
            } else{
                game.wrong++;
            }
        });

        this.result();
                
    },

    result: function(){

        clearInterval(timer);

        $("#sub-wrapper h2").remove();

        panel.html("<h2>Finito!!");
        panel.append("<h3>You answered: " this.right + " correctly.</h3>")
        panel.append("<h3>You missed: " this.wrong + " questions.</h3>")
        panel.append("<h3>You skipped: " + (questions.length - (this.right + this.wrong)) + " questions.</h3>");
    }

};

$(document).on('click', "#start", function(){
    game.start();
});

$(document).on('click', "#done", function(){
    game.done();
});