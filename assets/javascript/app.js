let currentquestion;

function Question(prompt, responsea, responseb, responsec, responsed) {
    this.prompt = prompt;
    this.responsea = responsea;
    this.responseb = responseb;
    this.responsec = responsec;
    this.responsed = responsed;
    this.responses = [ responsea, responseb, responsec, responsed]
    this.sample = function () {
        console.log(this.prompt)
      };

}

let questionone = new Question('question1', 'one', 'two', 'three', 'four');
let questiontwo = new Question('question2', 'one2', 'two2', 'three2', 'four2');
let questionthree = new Question('question3', 'one3', 'two3', 'three3', 'four3');
let questionfour = new Question('question4', 'one4', 'two4', 'three4', 'four4');
let questionfive = new Question('question5', 'one5', 'two5', 'three5', 'four5');
let questionsix = new Question('question6', 'one6', 'two6', 'three6', 'four6');
let questionseven = new Question('question7', 'one7', 'two7', 'three7', 'four7');
let questioneight = new Question('question2', 'one2', 'two2', 'three2', 'four2');
let questionnine = new Question('question9', 'one9', 'two9', 'three9', 'four9');
let questionten = new Question('question10', 'one10', 'two10', 'three10', 'four10');

let questionarray = ["questionone", "questiontwo", "questionthree", "questionfour", "questionfive", "questionsix", "questionseven", "questioneight", "questionnine", "questionten"]

function startGame() {
    for (i = 0; i < questionarray.length; i++) { 

      currentquestion = questionarray[i];  
      let call = currentquestion + ".sample()"
      eval(call)
      }
    }

console.log(questionone, questiontwo, questionarray);


startGame()