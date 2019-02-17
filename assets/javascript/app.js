


$(document).ready(function () {

 
  const promptset = $("#prompt");
  const option0 = $("#optiona");
  const option1 = $("#optionb");
  const option2 = $("#optionc");
  const option3 = $("#optiond");
  const button = $(".button");
  const image = $("#image");
  const timer = $("#timer");
  const pageoptions = $(".options");
  let index;
  let currentquestion;
  let currentanswer;
  let win = 0;
  let loss = 0;
  let clickcount = 3;
  let time;

  var Quiz = [
    { /*One */
      image1: "assets/images/oneunsolved.jpg",
      imagesolution: "assets/images/onesolved.jpg",
      prompt: "On Valentine's Day, who did Trump call a 'poor little Angel' and accuse of being part of the Russian hoax?", 
      options: ["Paul Manafort", "Andrew McCabe", "Peter Strzok", "Sean Hannity"],
      answer: 1,
      
     },
     { /*Two */
      image1: "assets/images/twounsolved.jpg",
      imagesolution: "assets/images/twosolved.jpg",
      prompt: "Steve Bannon said 2019 is going to be the 'nastiest year in American politics' since the Civil War. What nasty thing did Trump say about him in 2018?", 
      options: ["Sloppy", "Stinky", "Stupid", "Sleazy"],
      answer: 0,
      
     }, 
     { /*Three */
      image1: "assets/images/threeunsolved.jpg",
      imagesolution: "assets/images/threesolved.jpg",
      prompt: "This is a favorite rally refrain. Who does Trump call 'Crooked'? ", 
      options: ["Elizabeth Warren", "Nancy Pelosi", "Hillary Clinton", "Ted Cruz"],
      answer: 2,
      
    }, 
    {
      image1: "assets/images/#.jpg",
      imagesolution: "assets/images/#.jpg",
      prompt: "Question 4", 
      options: ["m", "n", "o", "p"],
      answer: 0,
      
    }, 
    {
      image1: "assets/images/#.jpg",
      imagesolution: "assets/images/#.jpg",
      prompt: "Question 5", 
      options: ["q", "r", "s", "t"],
      answer: 1,
      
    }, 
    {
      image1: "assets/images/#.jpg",
      imagesolution: "assets/images/#.jpg",
      prompt: "Question 6", 
      options: ["u", "v", "w", "x"],
      answer: 0,
      
    }, 
    {
      image1: "assets/images/#.jpg",
      imagesolution: "assets/images/#.jpg",
      prompt: "Question 7", 
      options: ["y", "z", "aa", "bb"],
      answer: 2,
      
    }, 
    {
      image1: "assets/images/#.jpg",
      imagesolution: "assets/images/#.jpg",
      prompt: "Question  8", 
      options: ["cc", "dd", "ee", "ff"],
      answer: 3,
    },

    {
      image1: "assets/images/#.jpg",
      imagesolution: "assets/images/#.jpg",
      prompt: "Question  9", 
      options: ["gg", "hh", "ii", "jj"],
      answer: 3,
    },

    {
      image1: "assets/images/#.jpg",
      imagesolution: "assets/images/#.jpg",
      prompt: "Question  10", 
      options: ["kk", "ll", "mm", "nn"],
      answer: 3,
    }];
  
 
 
 
  function pickQuestions() {
      let length = /*Quiz.length; */ 3
      index= Math.floor(Math.random() * length );  // Returns random number
      currentquestion  = Quiz[index];
      setPage();
       
  }

  function setPage() {
    promptset.text(currentquestion.prompt);
    
    option0.text(currentquestion.options[0]);
    option1.text(currentquestion.options[1]);
    option2.text(currentquestion.options[2]);
    option3.text(currentquestion.options[3]); 
    
    image.attr("src", currentquestion.image1);
    
  }
  

function resetGame() {
  clickcount = 0;
 
  pickQuestions();
  setPage();
  time = 15;
  timer.text("15");

console.log("Reset") 
}

function setTimer() {
  clock = setInterval(startCountDown, 1000);
  startCountDown();
}
  function startCountDown()  {
    if (time < 1) {
      clearInterval(clock);
      promptset.text("We can't all be stable geniuses!");
      setTimeout(resetGame, 1000)
    }
    if (time > 0) {
      time--;
    }
    timer.text(time);
  }

function timerOnFirstClick() {
  if (clickcount === 1 )  {
    time = 15;
    setTimer();
  }
}

function setWin() {
  promptset.text("You are correct!");
    image.attr("src", currentquestion.imagesolution);
    win ++
    console.log("Win", win)
   
    setTimeout(resetGame, 2000);
    clearInterval(clock);
}


  
  /*Sets up click events */

 button.click(function(){
   button.addClass("hide");
   timer.toggleClass("hide");
    resetGame();
  });

  pageoptions.click(function(){
    currentvalue = parseInt($(this).attr("value"));
    currentanswer = currentquestion.answer;
    clickcount ++
    timerOnFirstClick();
    console.log (clickcount)
 
console.log(currentanswer, currentvalue)
   
   if (currentvalue === currentanswer) {
    setWin()
    } else {

      if (clickcount < 3) {
        $(this).text("WRONG");
      
      }
        else {
          loss ++
          console.log("Loss", loss)
          image.attr("src", currentquestion.imagesolution);
          promptset.text("We can't all be stable geniuses!");
          setTimeout(resetGame, 3000);
          clearInterval(clock);
          console.log("Trigger Loss")
      }

    }
  
      
    });



  /*End Code */
  });
