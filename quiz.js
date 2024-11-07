async function loadHeader() {
    const response = await fetch('header.html');
    const headerHTML = await response.text();
    document.getElementById('header-container').innerHTML = headerHTML;
}
loadHeader();


// Adding quiz parts
const questions = [
    {
        question: "What does the CIA stand for in InfoSec?",
        answers: [
            { text: "Concrete International Agency", correct: false},
            { text: "Configure Integrity Access", correct: false},
            { text: "Confidentiality Integrity Availability", correct: true},
            { text: "Confidentiality Integrity Access", correct: false},
        ]
    },
    {
        question: "What does ISMS stand for in InfoSec?",
        answers: [
            { text: "Information Security Monitoring System", correct: false},
            { text: "Information Security Management System", correct: false},
            { text: "Integration Security Monitoring System", correct: true},
            { text: "Integration Security Management System", correct: false},
        ]
    },
    {
        question: "Which of the following is the best practice for securely storing passwords?",
        answers: [
            { text: "Hashing", correct: true},
            { text: "Encryption", correct: false},
            { text: "Plain Text Storage", correct: false},
            { text: "Encoding", correct: false},
        ]
    },
    {
        question: "What is the primary goal of penetration testing?",
        answers: [
            { text: "To deploy security software", correct: false},
            { text: "To identify vulnerabilities before attackers can exploit them", correct: true},
            { text: "To train employees on security policies", correct: false},
            { text: "To enhance network speed", correct: false},
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
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
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
    } else {
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

const isQuizPage =
  document.querySelector("#quiz") || document.querySelector("#next-btn")
    ? true
    : false;



if(isQuizPage){
    nextButton.addEventListener("click", ()=>{
        if(currentQuestionIndex < questions.length){
            handleNextButton();
        } else {
            startQuiz();
        }
    })
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else {
        showScore();
    }
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

if(isQuizPage){
startQuiz();
}
