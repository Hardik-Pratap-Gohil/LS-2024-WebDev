const questionElem = document.getElementById('question');
const optionA = document.getElementById('optionA');
const optionB = document.getElementById('optionB');
const optionC = document.getElementById('optionC');
const optionD = document.getElementById('optionD');
const feedbackElem = document.getElementById('feedback');

document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        {
            question: "What year did table tennis become an Olympic sport?",
            options: {
                a: "1988",
                b: "1992",
                c: "1996",
                d: "2000"
            },
            correct: "a"
        },
        {
            question: "How many points are required to win a game of table tennis?",
            options: {
                a: "11",
                b: "15",
                c: "21",
                d: "25"
            },
            correct: "a"
        }
    ];

    let currentQuestion = 0;

    function loadQuestion() {
        questionElem.textContent = questions[currentQuestion].question;
        optionA.textContent = questions[currentQuestion].options.a;
        optionB.textContent = questions[currentQuestion].options.b;
        optionC.textContent = questions[currentQuestion].options.c;
        optionD.textContent = questions[currentQuestion].options.d;
        optionA.style.backgroundColor = "#333";
        optionB.style.backgroundColor = "#333";
        optionC.style.backgroundColor = "#333";
        optionD.style.backgroundColor = "#333";
        feedbackElem.textContent = "";
    }

    window.checkAnswer = function(option) {
        if (option === questions[currentQuestion].correct) {
            if (option === "a") {
                optionA.style.backgroundColor = "green";
            } else if (option === "b") {
                optionB.style.backgroundColor = "green";
            } else if (option === "c") {
                optionC.style.backgroundColor = "green";
            } else {
                optionD.style.backgroundColor = "green";
            }
            feedbackElem.textContent = "Correct";
            feedbackElem.style.color = "green";
            setTimeout(() => {
                currentQuestion = (currentQuestion + 1) % questions.length;
                loadQuestion();
            }, 1000); // wait for 1 second before loading the next question
        } else {
            feedbackElem.textContent = "Wrong! Try again";
            feedbackElem.style.color = "red";     
        }
    }

    loadQuestion();  // Initial call to load the first question
});

const player1 = document.querySelector("#player1Score");
let player1Score = parseInt(player1.innerText);
const player2 = document.querySelector("#player2Score");
let player2Score = parseInt(player2.innerText);
const player1Add = document.querySelector("#player1Add");
const player2Add = document.querySelector("#player2Add");
const reset = document.querySelector("#reset");
const select = document.querySelector("select");
let limit = 3;
select.addEventListener("change", function(){
    limit = parseInt(this.value);
})

player1Add.addEventListener("click",function(){
    let currScore = parseInt(player1.innerText)
    currScore += 1;
    if(currScore === limit){
        player1Add.disabled = true;
        player2Add.disabled = true;
        player1.style.color = "green";
        player2.style.color = "red";
    }
    player1.innerText = currScore;
})

player2Add.addEventListener("click",function(){
    let currScore = parseInt(player2.innerText)
    currScore += 1;
    if(currScore ===  limit){
        player1Add.disabled = true;
        player2Add.disabled = true;
        player1.style.color = "red";
        player2.style.color = "green";
    }
    player2.innerText = currScore;
})

reset.addEventListener("click",function(){
    player1Add.disabled = false;
    player2Add.disabled = false;
    player1.style.color = "black";
    player2.style.color = "black";
    player1.innerText = "0";
    player2.innerText = "0";
})
