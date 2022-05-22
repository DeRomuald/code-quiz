// Variables
// Define a set of questions
var questions = [
    {
        q: 'Inside which HTML element do we put the JavaScript?',
        a: '<script>',
        choices: [
            { choice: '<js>' },
            { choice: '<script>' },
            { choice: '<javascript>' },
            { choice: '<scripting>' }]
    },
    {
        q: 'What is the correct JavaScript syntax to change the content of the HTML element below?',
        a: 'document.getElementById("demo").innerHTML = "Hello World!";',
        choices: [
            { choice: 'document.getElementById\n("demo").innerHTML = "Hello World!";' },
            { choice: 'document.getElementByName\n("p").innerHTML = "Hello World!";' },
            { choice: 'document.getElement("p")\n.innerHTML = "Hello World!";' },
            { choice: '#demo.innerHTML = "Hello World!";' }
        ]
    },
    {
        q: 'How do you write "Hello World" in an alert box?',
        a: 'alert("Hello World");',
        choices: [
            { choice: 'alert("Hello World");' },
            { choice: 'msgBox("Hello World");' },
            { choice: 'msg("Hello World");' },
            { choice: 'alertBox("Hello World");' }
        ]
    },
    {
        q: 'How to write an IF statement in JavaScript?',
        a: 'if (i == 5)',
        choices: [
            { choice: 'if (i == 5)' },
            { choice: 'if i = 5' },
            { choice: 'if i = 5 then' },
            { choice: 'if i == 5 then' }
        ]
    },
    {
        q: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
        a: 'if (i != 5)',
        choices: [
            { choice: 'if (i <> 5)' },
            { choice: 'if i =! 5 then' },
            { choice: 'if (i != 5)' },
            { choice: 'if i <> 5' }
        ]
    },
    {
        q: 'How does a FOR loop start?',
        a: 'for (i = 0; i <= 5; i++)',
        choices: [
            { choice: 'for (i <= 5; i++)' },
            { choice: 'for (i = 0; i <= 5; i++)' },
            { choice: 'for (i = 0; i <= 5)' },
            { choice: 'for i = 1 to 5' }
        ]
    },
    {
        q: 'What is the correct way to write a JavaScript array?',
        a: 'var colors = ["red", "green", "blue"]',
        choices: [
            { choice: 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")' },
            { choice: 'var colors = (1:"red", 2:"green", 3:"blue")' },
            { choice: 'var colors = ["red", "green", "blue"]' },
            { choice: 'var colors = "red", "green", "blue"' }
        ]
    },
    {
        q: 'How do you round the number 7.25, to the nearest integer?',
        a: 'Math.round(7.25)',
        choices: [
            { choice: 'round(7.25)' },
            { choice: 'rnd(7.25)' },
            { choice: 'Math.rnd(7.25)' },
            { choice: 'Math.round(7.25)' }
        ]
    },
    {
        q: 'How do you find the number with the highest value of x and y?',
        a: 'Math.max(x, y)',
        choices: [
            { choice: 'top(x, y)' },
            { choice: 'Math.ceil(x, y)' },
            { choice: 'ceil(x, y)' },
            { choice: 'Math.max(x, y)' }
        ]
    },
    {
        q: 'Which event occurs when the user clicks on an HTML element?',
        a: 'onclick',
        choices: [
            { choice: 'onmouseclick' },
            { choice: 'onclick' },
            { choice: 'onmouseover' },
            { choice: 'onchange' }
        ]
    },
    {
        q: 'Which operator is used to assign a value to a variable?',
        a: '=',
        choices: [
            { choice: '*' },
            { choice: '=' },
            { choice: '-' },
            { choice: 'x' }
        ]
    },
];



// header elements - view high scores and timer
var viewHighScoresEl = document.getElementById("view-high-scores");
var timerEl = document.getElementById("timer");

// first container when page is opened
var starterContainerEl = document.getElementById("starter-container");

// question container with answers
var questionContainerEl = document.getElementById("question-container");
var questionEl = document.getElementById("question");
var answerButtonsEl = document.getElementById("answer-buttons");

// end of quiz container with scores and intials
var endContainerEl = document.getElementById("end-container");
var scoreBannerEl = document.getElementById("score-banner");
var initialsFormEl = document.getElementById("initials-form");


// high score container
var highScoreContainerEl = document.getElementById("high-score-container");
var highScoreListEl = document.getElementById("high-score-list");
// +two more buttons look in the buttons section

// correct/incorrect answers container
var correctAnswerEl = document.getElementById("correct");
var wrongAnswerEl = document.getElementById("wrong");

// Buttons
var buttonStartGameEl = document.getElementById("start-game");
var buttonGoBackEl = document.getElementById("go-back");
var buttonClearHighScoreEl = document.getElementById("clear-high-scores");

// high Score Array
var highScores = [];

var shuffledQuestions;
var questionIndex = 0;
var score = 0;
var timeLeft;
var gameOver;

// sets timer to 0 before the start of quiz.
timerEl.innerHTML = 0;

// Functions
//to remove all containers from display
var cleanScreen = function () {
    starterContainerEl.className = 'hide';
    questionContainerEl.className = 'hide';
    endContainerEl.className = 'hide';
    highScoreContainerEl.className = 'hide';
    correctAnswerEl.className = 'hide';
    wrongAnswerEl.className = 'hide';
};


var randomIndexOfArray = function (array) {
    return Math.floor(Math.random() * array.length);
};

// timer function
var setTime = function () {
    timeLeft = questions.length * 6; // every question has 6 sec to chose the answer.
   
   
    var timerCheck = setInterval(function () {
        timerEl.textContent = timeLeft;
        timeLeft--;
        if (gameOver) {
            clearInterval(timerCheck);
        }
        if (timeLeft < 0) {
            showScore();
            console.log("i am from set time ()");
            timerEl.textContent = 0;
            clearInterval(timerCheck);
        }
    }, 1000);
};
var restartGame = function () {
    cleanScreen();
    starterContainerEl.classList.remove('hide');
    scoreBannerEl.removeChild(scoreBannerEl.lastChild);
    questionIndex = 0;
    gameOver = "";
    timerEl.textContent = 0;
    score = 0;
    questionContainerEl.removeChild
};
//   WHEN I click the start button - I am presented with a question
var startGame = function () {
    cleanScreen();
    questionContainerEl.classList.remove("hide"); 
    setTime();
    setQuestion();
};
var answerCheck = function (event) {
    var selectedAnswer = event.target.textContent;
    if (questions[questionIndex].a === selectedAnswer) {    
        answerCorrect();
        score += 10;
    }
    else {      
        answerWrong();
        score -= 5;      
        timeLeft -= 10;  
    }
    
    if (questionIndex + 1 < questions.length) { 
        questionIndex++;
        setQuestion();
    }
    else {
        gameOver = true;
        showScore();
        
    }
};

var setQuestion = function () {
    resetAnswers();
    displayAnswers(questions[questionIndex]);
};


var resetAnswers = function () {
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild);
    }
};

//display question information (including answer buttons)
var displayAnswers = function () {
    questionEl.textContent = questions[questionIndex].q; 
    for (var i = 0; i < questions[questionIndex].choices.length; i++) {
        var answerButton = document.createElement("button");
        answerButton.classList.add('btn');
        answerButton.classList.add('answer-btn');
        answerButton.textContent = questions[questionIndex].choices[i].choice;
       
        answerButton.addEventListener('click', answerCheck);
        answerButtonsEl.appendChild(answerButton);
    }
    
};

// score display
var showScore = function () {
    cleanScreen();
    endContainerEl.classList.remove("hide");
    var scoreDisplay = document.createElement('p');
    scoreDisplay.textContent = "Your final score is: " + score + "!";
    scoreBannerEl.appendChild(scoreDisplay)

};

// return sorted array
var sortedArray = function (a, b) {
    return (b.score - a.score);
};
//  high score values
var createHighScore = function (event) {
    event.preventDefault();
    var initials = document.getElementById("initials").value;
    if (!initials) {
        alert("Enter your initials!");
        return;
    }

    initialsFormEl.reset();
 
    var initialScore = {
        initials: initials,
        score: score
    }
   
    highScores.push(initialScore);
    highScores.sort(sortedArray);
    

  
    while (highScoreListEl.firstChild) {
        highScoreListEl.removeChild(highScoreListEl.firstChild);
    }
    

     for (var i = 0; i < highScores.length; i++) {
        var highScoreEl = document.createElement('li');
        highScoreEl.className = 'high-score';
        highScoreEl.textContent = highScores[i].initials + " : " + highScores[i].score;
        highScoreListEl.appendChild(highScoreEl);
        console.log(highScoreEl);
    }
    

    saveHighScore();
   
    displayHighScores(); 
    

};

var displayHighScores = function () {
    cleanScreen();
    highScoreContainerEl.classList.remove("hide");  
    gameOver = true;
};
var clearHighScores = function () {
    highScores = [];
    while (highScoreListEl.firstChild) {
        highScoreListEl.removeChild(highScoreListEl.firstChild);
    }
    localStorage.clear(highScores);
}

var answerCorrect = () => {
    if (correctAnswerEl.className === "hide") {
        correctAnswerEl.classList.remove("hide");
        wrongAnswerEl.classList.add("hide");
    }
};
var answerWrong = () => {
    if (wrongAnswerEl.className === "hide") {
        wrongAnswerEl.classList.remove("hide");
        correctAnswerEl.classList.add("hide");
    }
};

// local storage
var saveHighScore = function () {
    localStorage.setItem("highScores", JSON.stringify(highScores));
};

var loadHighScore = function () {
    var loadedHighScores = localStorage.getItem("highScores");
    if (!loadedHighScores) {
        return false;
    }
    loadedHighScores = JSON.parse(loadedHighScores);
    loadedHighScores.sort(sortedArray);
    for (var i = 0; i < loadedHighScores.length; i++) {
        var highScoreEl = document.createElement("li");
        highScoreEl.className = "high-score";
        highScoreEl.textContent = loadedHighScores[i].initials + " : " + loadedHighScores[i].score;
        highScoreListEl.appendChild(highScoreEl);
        highScores.push(loadedHighScores[i]);
    }
};
// send all score to localStorage;
loadHighScore();
// Add event Listeners
viewHighScoresEl.addEventListener("click", displayHighScores);
buttonStartGameEl.addEventListener("click", startGame);
initialsFormEl.addEventListener("submit", createHighScore)
// buttonSubmitScoreEl.addEventListener("click", () => { console.log("Did you press submit button?") });
buttonGoBackEl.addEventListener("click", restartGame);
buttonClearHighScoreEl.addEventListener("click", clearHighScores);