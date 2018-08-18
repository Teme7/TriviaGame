//global variables
// $("#start").on('click', function(){
//     console.log("OUCH!")
//     alert("Stop hitting me!!")
// });

$("#start").on('click', function(){
    $("#quizBlock").remove();
    for(var i = 0; i < questions.length; i++){
        $("#quizBlock").append('<h2>'+ questions[i].question+'</h2>');
        for(var s = 0; s < questions[i].solution.length; s++){
            $("#quizBlock").append("<input type='radio' name='question-" + i + "'value='" + questions[i].solution[s] + "'>" + questions[i].solution[s]);
        }
    }
});

// $(document).on('click', "#finish", function(){
//     game.end();
// });

// var timer;

// var qn = $("#quizBlock");

// ****TRY TO SEPARATE THE QN, CHOICES, AND SOLN ARRAYS!!******

var questions = [{
    question: "What was the first full length CGI movie?",
    choices: ["A Bug's Life", "Monsters Inc.", "Toy Story", "The Lion King"],
    solution: "Toy Story"
},

{
    question: "Which NBA team won the most titles in the 90s?",
    choices: ["New York Knicks", "Portland Trailblazers", "Los Angeles Lakers", "Chicago Bulls"],
    solution: "Chicago Bulls",
    
}];

var game = {
    right: 0,
    wrong: 0,
    counter: 10,

    countdown: function(){
        game.counter--;
        $("#decrement").html(game.counter);
        if(game.counter === 0){
            console.log("Game over!");
            game.end();
        }
    },

    start: function(){

        timer = setInterval(game.countdown, 1000);

        $("#sub-wrapper").prepend("<h2>Beat the clock... <span id='decrement'>10</span></h2>");

        $("#start").remove();

        for(var q = 0; q < questions.length; q++){
            qn.append("<h2>" + questions[q].question + "</h2>");
            for(var a = 0; a < questions[q].choices.length; a++){
                qn.append("<input type='radio' name='question-" + q + "' value='" + questions[q].choices[a] + "''>" + questions[q].choices[a]);
            }
        }

        qn.append("<button id='finish'>I'm So Done!</button>");
    },

    end: function(){
        //checks if user chose the correct answer
        $.each($("input[name='question-0']:checked"), function(){
            if($(this).val() === questions[0].right){
                game.right++;
            } else{
                game.wrong++;
            }
        });

        $.each($("input[name='question-0']:checked"), function(){
            if($(this).val() === questions[1].right){
                game.right++;
            } else{
                game.wrong++;
            }
        });

        $.each($("input[name='question-0']:checked"), function(){
            if($(this).val() === questions[2].right){
                game.right++;
            } else{
                game.wrong++;
            }
        });

        $.each($("input[name='question-0']:checked"), function(){
            if($(this).val() === questions[3].right){
                game.right++;
            } else{
                game.wrong++;
            }
        });

        $.each($("input[name='question-0']:checked"), function(){
            if($(this).val() === questions[4].right){
                game.right++;
            } else{
                game.wrong++;
            }
        });

        $.each($("input[name='question-0']:checked"), function(){
            if($(this).val() === questions[5].right){
                game.right++;
            } else{
                game.wrong++;
            }
        });

        $.each($("input[name='question-0']:checked"), function(){
            if($(this).val() === questions[6].right){
                game.right++;
            } else{
                game.wrong++;
            }
        });

        $.each($("input[name='question-0']:checked"), function(){
            if($(this).val() === questions[7].right){
                game.right++;
            } else{
                game.wrong++;
            }
        });

        $.each($("input[name='question-0']:checked"), function(){
            if($(this).val() === questions[8].right){
                game.right++;
            } else{
                game.wrong++;
            }
        });

        $.each($("input[name='question-0']:checked"), function(){
            if($(this).val() === questions[9].right){
                game.right++;
            } else{
                game.wrong++;
            }
        });

        $.each($("input[name='question-0']:checked"), function(){
            if($(this).val() === questions[10].right){
                game.right++;
            } else{
                game.wrong++;
            }
        });

        $.each($("input[name='question-0']:checked"), function(){
            if($(this).val() === questions[11].right){
                game.right++;
            } else{
                game.wrong++;
            }
        });

        $.each($("input[name='question-0']:checked"), function(){
            if($(this).val() === questions[12].right){
                game.right++;
            } else{
                game.wrong++;
            }
        });

        $.each($("input[name='question-0']:checked"), function(){
            if($(this).val() === questions[13].right){
                game.right++;
            } else{
                game.wrong++;
            }
        });

        $.each($("input[name='question-0']:checked"), function(){
            if($(this).val() === questions[14].right){
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

        qn.html("<h2>Finito!!");
        qn.append("<h3>You answered: " + this.right + " correctly.</h3>")
        qn.append("<h3>You missed: " + this.wrong + " questions.</h3>")
        qn.append("<h3>You skipped: " + (questions.length - (this.right + this.wrong)) + " questions.</h3>");
    }

};

$("#start").on('click', function(){
    game.start();
});

// $(document).on('click', "#start", function(){
//     game.start();
// });

$("#finish").on('click', function(){
    game.end();
});

// $(document).on('click', "#finish", function(){
//     game.end();
// });