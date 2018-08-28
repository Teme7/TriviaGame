// $("#start").on('click', function(){
//     console.log("OUCH!")
//     alert("Stop hitting me!!")
// });

$("#start").on('click', function(){
    game.start();
    // $("#quizBlock").remove();

    // for(var i = 0; i < questions.length; i++){
    //     $("#quizBlock").append('<h2>'+ questions[i].question+'</h2>');

    //     for(var s = 0; s < questions[i].solution.length; s++){
    //         $("#quizBlock").append("<input type='radio' name='question-" + i + "'value='" + questions[i].solution[s] + "'>" + questions[i].solution[s]);
    //     }
    // }
});

// $(document).on('click', "#finish", function(){
//     game.end();
// });

// var timer;

// var qn = $("#quizBlock");

var questions = [{
    question: "Deiphnophobia is the fear of_________.",
    choices: ["Police sirens", "Car door dents", "Dinner conversations", "Cellphone battery depletion"],
    solution: "Dinner conversations"
},
{
    question: "The first item sold on eBay was a___________. A collector of this exact thing bought it for $14.83.",
    choices: ["Concert ticket stub", "Broken laser pointer", "Used Toyota air filter", "Ink-stained sweater"],
    solution: "Broken laser pointer"
},
{
    question: "What is the collective name for a  group of lions?",
    choices: ["A herd", "A streak", "A pride", "A cackle"],
    solution: "A pride"
},
{
    question: "How many legs does a lobster have?",
    choices: ["10", "8", "12", "None, they are called tentacles/arms."],
    solution: "10"
},
{
    question: "What color are zebras?",
    choices: ["White with black stripes", "Black with white stripes", "Depends on the species", "None of the above"],
    solution: "Black with white stripes"
},
{
    question: "What is the biggest animal that has ever lived?",
    choices: ["Blue whale", "African elephant", "Apatosaurus (aka brontosaurus)", "Spinosaurus"],
    solution: "Blue whale"
},
{
    question: "The very first webcam wathched a ________ so researchers at Cambridge could monintor the situation without leaving their desks.",
    choices: ["Thanksgiving turkey", "Rising tide", "Meter maid", "Coffee pot"],
    solution: "Coffee pot"
},
{
    question: "What animal lives the longest?",
    choices: ["Ocean quahog (clam)", "Red sea urchin", "Galapagos tortois", "Rougheye rockfish"],
    solution: "Ocean quahog (clam)"
},
{
    question: "What are female elephants called?",
    choices: ["Mares", "Sows", "Cows", "Dams"],
    solution: "Cows"
},
{
    question: "Which of the following animals sleep standing up?",
    choices: ["Gorillas", "Flamingos", "Camels", "Ravens"],
    solution: "Flamingos"
},
{
    question: "What is the fastest water animal?",
    choices: ["Porpoise", "Sailfish", "Flying fish", "Tuna"],
    solution: "Sailfish"
},
{
    question: "Between 1900 and 1920, _______ was an Olympic event.",
    choices: ["Egg on Spoon", "Tug of War", "Suck Race", "Three-Legged Race"],
    solution: "Tug of War"
},
{
    question: "In colonial America, _________ was not a delicacy. It was actually os cheap and plentiful that it was often served to prisoners.",
    choices: ["Caviar", "Foie gras", "Lobster", "Truffles"],
    solution: "Lobster"
},  
{
    question: "What are the male honey bees called that are the only members of the colony allowed to mate with the queen?",
    choices: ["Anthophila", "Drones", "Kings", "Carpenter bee"],
    solution: "Drones"
},
{
    question: "Which large mammal's tail is so strong it can stand on it and lift its hind legs off the ground?",
    choices: ["Crocodile", "Chimpanzee", "Kangaroo", "Spider monkey"],
    solution: "Kangaroo"

}];

var game = {
    right: 0,
    wrong: 0,
    counter: 10,

    countdown: function(){
        game.counter--;
        $("#decrement").html(game.counter);
        if(game.counter <= 0){
            console.log("Game over!");
            game.end();
        }
    },

    start: function(){

        timer = setInterval(game.countdown, 1000);

        $("#miniWrapper").prepend("<h2>Beat the clock... <span id='decrement'>10</span></h2>");

        $("#start").remove();

        for(var q = 0; q < questions.length; q++){
            $("#miniWrapper").append("<h2>" + questions[q].question + "</h2>");
            for(var a = 0; a < questions[q].choices.length; a++){
                $("#miniWrapper").append("<input type='radio' name='question-" + q + "' value='" + questions[q].choices[a] + "''>" + questions[q].choices[a]);
            }
        }

        $("#miniWrapper").append("</br></br><button id='finish'>Finito!</button>");
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

        $.each($("input[name='question-1']:checked"), function(){
            if($(this).val() === questions[1].right){
                game.right++;
            } else{
                game.wrong++;
            }
        });

        $.each($("input[name='question-2']:checked"), function(){
            if($(this).val() === questions[2].right){
                game.right++;
            } else{
                game.wrong++;
            }
        });

        $.each($("input[name='question-3']:checked"), function(){
            if($(this).val() === questions[3].right){
                game.right++;
            } else{
                game.wrong++;
            }
        });

        $.each($("input[name='question-4']:checked"), function(){
            if($(this).val() === questions[4].right){
                game.right++;
            } else{
                game.wrong++;
            }
        });

        $.each($("input[name='question-5']:checked"), function(){
            if($(this).val() === questions[5].right){
                game.right++;
            } else{
                game.wrong++;
            }
        });

        $.each($("input[name='question-6']:checked"), function(){
            if($(this).val() === questions[6].right){
                game.right++;
            } else{
                game.wrong++;
            }
        });

        $.each($("input[name='question-7']:checked"), function(){
            if($(this).val() === questions[7].right){
                game.right++;
            } else{
                game.wrong++;
            }
        });

        $.each($("input[name='question-8']:checked"), function(){
            if($(this).val() === questions[8].right){
                game.right++;
            } else{
                game.wrong++;
            }
        });

        $.each($("input[name='question-9']:checked"), function(){
            if($(this).val() === questions[9].right){
                game.right++;
            } else{
                game.wrong++;
            }
        });

        $.each($("input[name='question-10']:checked"), function(){
            if($(this).val() === questions[10].right){
                game.right++;
            } else{
                game.wrong++;
            }
        });

        $.each($("input[name='question-11']:checked"), function(){
            if($(this).val() === questions[11].right){
                game.right++;
            } else{
                game.wrong++;
            }
        });

        $.each($("input[name='question-12']:checked"), function(){
            if($(this).val() === questions[12].right){
                game.right++;
            } else{
                game.wrong++;
            }
        });

        $.each($("input[name='question-13']:checked"), function(){
            if($(this).val() === questions[13].right){
                game.right++;
            } else{
                game.wrong++;
            }
        });

        $.each($("input[name='question-14']:checked"), function(){
            if($(this).val() === questions[14].right){
                game.right++;
            } else{
                game.wrong++;
            }
        });

        $.each($("input[name='question-15']:checked"), function(){
            if($(this).val() === questions[15].right){
                game.right++;
            } else{
                game.wrong++;
            }
        });

        this.result();
                
    },

    result: function(){
        //stop the timer 
        clearInterval(timer);

        $("#miniWrapper h2").remove();

        $("#miniWrapper").html("<h2>Finito!!</h2>");
        $("#miniWrapper").append("<h3>You answered: " + this.right + " correctly.</h3>")
        $("#miniWrapper").append("<h3>You missed: " + this.wrong + " questions.</h3>")
        $("#miniWrapper").append("<h3>You skipped: " + (questions.length - (this.right + this.wrong)) + " questions.</h3>");
    }

};

// $(document).on('click', "#start", function(){
//     game.start();
// });

$("#finish").on('click', function(){
    game.end();
});

// $(document).on('click', "#finish", function(){
//     game.end();
// });