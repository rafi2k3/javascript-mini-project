const question=[
    {
         questionn:"What does HTML stand for?",
         answers:[
            {text:"Hyper text markup language", correct:true},
            {text:"Hi -tech mark language", correct:false},
            {text:"Hyperlink Text Markup Language", correct:false},
            {text:"Home Tool Markup Language", correct:false}

         ]
    },
    {
        questionn:" Which technology is primarily responsible for the styling of web pages?",
        answers:[
           {text:"JavaScript", correct:false},
           {text:"HTML", correct:false},
           {text:"CSS", correct:true},
           {text:"Python", correct:false}

        ]
   },
   {
    questionn:"What does CSS stand for?",
    answers:[
       {text:"Creative Style Sheets", correct:false},
       {text:"Cascading Style Sheets", correct:true},
       {text:"Computer Style Sheets", correct:false},
       {text:"Custom Style Sheets", correct:false}

    ]
},
{
    questionn:"What is the purpose of a front-end web development framework like React or Angular?",
    answers:[
       {text:"To manage databases and server-side logic", correct:false},
       {text:"To create a visually appealing user interface", correct:true},
       {text:"To handle server-side routing", correct:false},
       {text:"To interact with web servers", correct:false}

    ]
},
{
    questionn:"Which part of web development is responsible for handling data storage and retrieval?",
    answers:[
       {text:"Front-end development", correct:false},
       {text:" Back-end development", correct:true},
       {text:"Full-stack development", correct:false},
       {text:"Middleware development", correct:false}

    ]
}
]

const questionElement=document.getElementById('question')
const answerButtons=document.getElementById("answer-button")
const nextButton=document.getElementById("next-btn")
let currentQuestionIndex = 0;
let score=0;


function startQuiz(){
    let currentQuestionIndex = 0;
    let score=0;
    nextButton.innerHTML="Next"
    showQuestion()
}
 
function  showQuestion(){
    resetState()
    let currentQuestion =question[currentQuestionIndex] ;
    let questionNo= currentQuestionIndex+1;
    questionElement.innerHTML=questionNo +"."+currentQuestion.questionn;
    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button")
        button.innerHTML = answer.text;
        button.classList.add("btn")
        answerButtons.appendChild(button)
        if(answer.correct){
            button.dataset.correct =answer.correct;
        }
        button.addEventListener("click",selectAnswer)

    });
}
function resetState(){
    nextButton.style.display='none'
    while(answerButtons.firstChild){
     answerButtons.removeChild(answerButtons.firstChild)
 
    }
 }

 function selectAnswer(e){
    const selectedBtn= e.target;
    const iscorrect=selectedBtn.dataset.correct=="true"
    if(iscorrect){
        selectedBtn.classList.add("correct");
        score++
    }else{
        selectedBtn.classList.add("incorrect");
        
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    })
    nextButton.style.display="block";
 }
 function showScore(){
    resetState()
    questionElement.innerHTML=`you scored ${score} out of ${question.length}!`
    nextButton.innerHTML='play again'
    nextButton.style.display="block"

 }




      function handleNextButton(){
        currentQuestionIndex++;
        if(currentQuestionIndex< question.length){
            showQuestion();
        }else{
            showScore()
        }
      }
 nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<question.length){
        handleNextButton();
    }

 })
startQuiz()


