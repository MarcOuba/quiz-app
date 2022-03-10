const quizData=[
    {
    question:'How old is Marc?',
    a:'10',
    b:'20',
    c:'17',
    d:'22',
    correct:'b'
},{
    question:'What is the most used programming language in 2019?',
    a:'javascript',
    b:'java',
    c:'c#',
    d:'python',
    correct:'a',

},{
    question:'Who is the president of US?',
    a:'Donald Trump',
    b:'Barrack Obama',
    c:'Ivan Salmado',
    d:'Michel Aoun',
    correct:'a'


},{
    question:"What does HTML stands for?",
    a:'Hypertext Markup Language',
    b:'Hello to my lovers',
    c:'JSON Obcject Notation',
    d:'Helicopters terminals Motorboats Lamborghini',
    correct:'a'
},
{
    question:'What year was Javascript launched?',
    a:'2020',
    b:'1994',
    c:'1999',
    d:'none of the above',
    correct:'d'
},
{
  question:'What is the latest version of PS?',
    a:'PS2',
    b:'PS3',
    c:'PS5',
    d:'PS4',
    correct:'c'
},{
  question:'What is the keyboard command to copy the selected content?',
    a:'ctrl+v',
    b:'ctrl+a',
    c:'ctrl+c',
    d:'alt+c',
    correct:'c'
},{
  question:'What is the hardest language?',
    a:'chinese',
    b:'espagnol',
    c:'English',
    d:'Mandarin',
    correct:'d'
},{
  question:'Which one is a real operating system?',
  a:'Microsoft Teams',
  b:'Microsoft office',
  c:'Linux',
  d:'Cygwin',
  correct:'c'
},{
  question:'What is 4*4+2*4+3?',
  a:'168',
  b:'27',
  c:'30',
  d:'106',
  correct:'b'
}
];

const questionEl=document.getElementById('question');
const a_text  =document.getElementById('a_text');
const b_text =document.getElementById('b_text');
const c_text =document.getElementById('c_text');
const d_text =document.getElementById('d_text');

let currentQuiz=0;
let score=0;
var quiz=document.getElementById("quiz");
loadQuiz();


function loadQuiz(){
    
   
    
      
const currentQuizData=quizData[currentQuiz];
questionEl.textContent=currentQuizData.question;
a_text.textContent=currentQuizData.a;
b_text.textContent=currentQuizData.b;
c_text.textContent=currentQuizData.c;
d_text.textContent=currentQuizData.d;  

if(isOneChecked())
{
var value;
var check = document.getElementsByTagName('input');

    for (var i=0; i<check.length; i++) {
      if (check[i].checked) 
      {
        value=check[i].id;
      } 
    }
    if(value==quizData[currentQuiz].correct){
        score++;
    } 
currentQuiz++;
quizEnd();
const currentQuizData=quizData[currentQuiz];
questionEl.textContent=currentQuizData.question;
a_text.textContent=currentQuizData.a;
b_text.textContent=currentQuizData.b;
c_text.textContent=currentQuizData.c;
d_text.textContent=currentQuizData.d;  
removeChecks();


}
  
    
}




function isOneChecked() {
    
    var check = document.getElementsByTagName('input');
    for (var i=0; i<check.length; i++) {
      if (check[i].type == 'radio' && check[i].checked) 
      {
        return true;
      } 
    }
    return false;
  }

  function removeChecks() {
    
    var check = document.getElementsByTagName('input');
    for (var i=0; i<check.length; i++) {
      if (check[i].type == 'radio' && check[i].checked) 
      {
        check[i].checked=false;
      } 
    }
  }
  function quizEnd(){
      if(currentQuiz>=quizData.length){
quiz.innerHTML=` <h2> You answered the  questions and got a score of ${score} / ${quizData.length}.</h2><button onclick="location.reload()">Restart the quiz</button>`;
      }
  }
