$(document).ready(function () {
  const promptset = $("#prompt");
  const option0 = $("#optiona");
  const option1 = $("#optionb");
  const option2 = $("#optionc");
  const option3 = $("#optiond");
  const image = $("#image");
  const pageoptions = $(".options");
  let solved = false;
  let index;
  let currentquestion;
  let currentanswer;
  let optionsvalue;
  
  
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
      answerClick();
     
     
      
  }

  function setPage() {
    promptset.text(currentquestion.prompt);
    
    option0.text(currentquestion.options[0]);
    
    
   
    option1.text(currentquestion.options[1]);
   
    
    option2.text(currentquestion.options[2]);
    
   
    option3.text(currentquestion.options[3]); 
    
   
    image.attr("src", currentquestion.image1);
    
  }

 
  
  function answerClick() {
  pageoptions.click(function(){
  
    currentanswer = currentquestion.answer;
    currentvalue = parseInt($(this).attr("value"));
    console.log(currentanswer, currentvalue)

   /* if (optionsvalue === currentanswer && !solved) {
      console.log ("Win")
      solved = true;
    } else {
      console.log ("Don't Win")
    }

*/
    
  });
  }
  pickQuestions()
  });

  
  
  
      

     

    

     
      
      
     
      
     
      
      

    
      
    
  

