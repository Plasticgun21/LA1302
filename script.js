const questions = [
    {
        question: "Im welchem Jahr war die Fussball WM in der Schweiz?",
        answers: [
            { text: "2008", correct: false},
            { text: "1954", correct: true},
            { text: "1970", correct: false},
            { text: "1930", correct: false}
        ]
    },
    {
        question: "Was ist das kleinste Land Europas?",
        answers: [
            { text: "Vaticanstaat", correct: true},
            { text: "Liechtenstein", correct: false},
            { text: "San Marino", correct: false},
            { text: "Monaco", correct: false}
        ] 
    },
    {
        question: "Für was steht das B in BTD 6",
        answers: [
            { text: "Banana", correct: false},
            { text: "Buch", correct: false},
            { text: "Barbara", correct: false},
            { text: "Bloons", correct: true}
        ]
    },
    {
        question: "Was ist das grösste Land Europas?",
        answers: [
            { text: "Deutschland", correct: false},
            { text: "Russland", correct: true},
            { text: "Türkei", correct: false},
            { text: "Ukraine", correct: false}
        ]
    },
    {
        question: "Welcher Kanton in der Schweiz hat die meisten Einwohner",
        answers: [
            { text: "Genf", correct: false},
            { text: "Bern", correct: false},
            { text: "Zürich", correct: true},
            { text: "Aargau", correct: false}
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        button.addEventListener("click", selectAnswer);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML =`You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
} )



startQuiz();
