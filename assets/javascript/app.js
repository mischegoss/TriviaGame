let currentquestion;
let solved = false;
const optiona = $("#optiona")
const optionb = $("#optionb")
const optionc = $("#optionc")
const optiond = $("#optiond")
const pageprompt = $("#prompt")
const options = $(".options")


function Question(prompt, responsea, responseb, responsec, responsed, answer) {
    this.prompt = prompt;
    this.responsea = responsea;
    this.responseb = responseb;
    this.responsec = responsec;
    this.responsed = responsed;
    this.answer = answer;
   
    this.sample = function () {
       this.setQuestion()
       this.setOne()
       this.setTwo()
       this.setThree()
       this.setFour()
       
    
      };
      this.setQuestion = function () {
        pageprompt.text(this.prompt) 
      };

      this.setOne = function () {
        optiona.text(responsea)
        optiona.val(this.responsea) 
        optiona.click(function(){
        let x =optiona.val()
        if (x === answer) {
          console.log("got it")
          console.log(x)
          solved = true;

        } else {
          console.log("Wrong")
        }
          
      
        });
      };

      this.setTwo = function () {
        optionb.text(responseb)
        optionb.val(this.responseb) 
        optionb.click(function(){
        let x =optionb.val()
        if (x === answer) {
          console.log("got it")
          console.log(x)
          solved = true;

        }
          
        
        });
      };

      this.setThree = function () {
        optionc.text(responsec)
        optionc.val(this.responsec) 
        optionc.click(function(){
        let x =optionc.val()
        if (x === answer) {
          console.log("got it")
          console.log(x)
          solved = true;

        } else {
          console.log("wrong")
        }
          
        
        });
      };

      this.setFour = function () {
        optiond.text(responsed)
        optiond.val(this.responsed) 
        optiond.click(function(){
        let x =optionb.val()
        if (x === answer) {
          console.log("got it")
          console.log(x)
          solved = true;

        }
          
        
        });
      };
      
}

let questionone = new Question('question1', 'one', 'two', 'three', 'four', 'one');
let questiontwo = new Question('question2', 'one2', 'two2', 'three2', 'four2', 'two2');
let questionthree = new Question('question3', 'one3', 'two3', 'three3', 'four3', 'three3');
let questionfour = new Question('question4', 'one4', 'two4', 'three4', 'four4', 'four4');
let questionfive = new Question('question5', 'one5', 'two5', 'three5', 'four5', 'one5');
let questionsix = new Question('question6', 'one6', 'two6', 'three6', 'four6', 'two6');
let questionseven = new Question('question7', 'one7', 'two7', 'three7', 'four7', 'three7');
let questioneight = new Question('question8', 'one8', 'two8', 'three8', 'four8', 'four8');
let questionnine = new Question('question9', 'one9', 'two9', 'three9', 'four9', 'one9');
let questionten = new Question('question10', 'one10', 'two10', 'three10', 'four10', 'one10');

let questionarray = ["questionone", "questiontwo", "questionthree", "questionfour", "questionfive", "questionsix", "questionseven", "questioneight", "questionnine", "questionten"]

function startGame() {
      let i = 1; 

      currentquestion = questionarray[i];  
      let call = currentquestion + ".sample()"
      
      eval(call)
      
      }
      
      

    
      
    
  

console.log(questionone, questiontwo, questionarray);


startGame()