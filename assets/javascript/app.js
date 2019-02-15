$(document).ready(function () {
  
  let index;
  
  
  var Quiz = [
    {
      image1: "assets/images/#.jpg",
      imagesolution: "assets/images/#.jpg",
      prompt: "Question1", 
      options: ["a", "b", "c", "d"],
      answer: 1,
      
     },
     {
      image1: "assets/images/#.jpg",
      imagesolution: "assets/images/#.jpg",
      prompt: "Question 2", 
      options: ["e", "f", "g", "h"],
      answer: 2,
      
     }, 
     {
      image1: "assets/images/#.jpg",
      imagesolution: "assets/images/#.jpg",
      prompt: "Question 3", 
      options: ["i", "j", "k", "l"],
      answer: 3,
      
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
      let length = Quiz.length;
      index= Math.floor(Math.random() * length );  // Returns random number between 0 and 9
      currentquestion  = Quiz[index];
      console.log( currentquestion);
  }

  pickQuestions()
  });
  
  
      

     

    

     
      
      
     
      
     
      
      

    
      
    
  

