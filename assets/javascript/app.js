//questions

var questions = [
  {
    question:
      "What is the name of the top goal scorer of the top five leagues in 2018?",
    answers: ["Messi", "Ronaldo", "Hazard", "Neymar Jr."],
    correctAnswer: "Messi",
    image: ""
  },
  {
    question: "Question 2?",
    answers: ["1", "2", "3", "4"],
    correctAnswer: "#",
    image: "#"
  },
  {
    question: "Question 3?",
    answers: ["1", "2", "3", "4"],
    correctAnswer: "#",
    image: "#"
  },
  {
    question: "Question 4?",
    answers: ["1", "2", "3", "4"],
    correctAnswer: "#",
    image: "#"
  },
  {
    question: "Question 5?",
    answers: ["1", "2", "3", "4"],
    correctAnswer: "#",
    image: "#"
  }
];

// creating variables
var quiz = $("#quiz-area");
var timer = $("#timer");
var i = 0;
var card = $("#card");
hideThings("#time")

// This will be the first question
var num = 0;
// handle click events
$("#start").click(function(e) {
  //   e.preventDefault();
  i++;
  // console.log("start was pressed: " + i);
  hideThings("#start");
  hideThings("p");
  hideThings(".display-3");
  hideThings(".messi");
  showThings("#time")
  startTimer(30); 
  showQuestions(questions, num);
});

// start or stop the timer
function startTimer(i, callback) {
  callback = callback || function(){};
  var int = setInterval(function() {
      $("#timer").html(i);
      i-- || (clearInterval(int), callback());
  }, 1000);
}



// hide function
function hideThings(ID) {
  $(ID).hide();
  // console.log(ID + " was hidden");
}

// show function
function showThings(ID) {
  $(ID).show();
  console.log(ID + " was shown");
}

// press start -> start timer -> show question

// Show 1st question function
function showQuestions(list, num) {
  for (i in list) {
    if (i == num) {
      // console.log("num and i are equal to -> " + num);
      console.log(list[i].question);
      $("#questions").click(function (e) { 
        e.preventDefault();
        if (list[i].question == list[i].answers) {
          console.log("Correct")
        }
      });
    }
  }
}

// Determine if wrong or right

// Time delay

// Show next question + Start timer
