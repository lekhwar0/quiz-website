const quizData = [
    {
        question : "Q1: What is the full form of CSS ?",
        a: " Client Side Server",
        b: "Casadding Style Sheet",
        c:" Cascadding Style Sheet",
        d: "Cascading Style Sheets",
        ans:" ans4"

    },
    {
        question: "Q1: What is the full form of HTML?",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c : "HyperText Makeup Language",
        d: "Hypertext Markup Language",
        ans: "ans4"

    },

    {
        question: "Q3: What is the full form of HTTP?",
        a: "Hypertext Transfer Product",
        b: "Hypertext Test Protocol",
        c: "Hey Transfer Protocol",
        d: "Hypertext Transfer Protocol",
        ans: "ans4"
  },
  
  {
        question: "Q4: What is the full form of JS?",
        a: "JavaScript",
        b: "JavaSuper",
        c: "JustScript",
        d: "JordenShoes",
        ans: "ans1"
  }
]

const answers = document.querySelectorAll(".answer");
const questions = document.querySelector(".question");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");
const submit = document.querySelector('#submit');
const showscore = document.getElementById("showscore");
const container = document.querySelector(".container");

let quizquestion = 0;

const loadquizdata = ( ) =>{ 
    const quizList = quizData[quizquestion];
   
    questions.innerHTML = quizList.question;

    option1.innerHTML = quizList.a;
    option2.innerHTML = quizList.b;
    option3.innerHTML = quizList.c;
    option4.innerHTML = quizList.d;

};

loadquizdata();

const getcheckedAnswer = ()=>{

    let answer;
    answers.forEach((curAnswer)=>{
        if(curAnswer.checked){
            answer = curAnswer.id ;
        }

    });

    return answer;
};

const deselectAll = () =>{

    answers.forEach((curAnswer)=>{
        curAnswer.checked=false
    });
}

let score = 0; 
submit.addEventListener('click', () => {
     
        const checkedAnswer = getcheckedAnswer();
        console.log(checkedAnswer);
   
    
    if (checkedAnswer===quizData[quizquestion].ans){
        score++ ;
    };
      
    
    quizquestion++ ;
    
    deselectAll();

    if ( quizquestion < quizData.length){
    
     loadquizdata(); }

    else{
       showscore.innerHTML =  `<h3> Your score is ${score}/${quizData.length} 👏 </h3>
       <button class="btn" onclick = "location.reload()"> Play Again </button>
       `
       showscore.classList.remove("scorearea");
    };
   
    


 
  

});

