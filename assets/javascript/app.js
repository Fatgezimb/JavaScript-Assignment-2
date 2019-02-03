//questions

var questions = [
  {
    question:
      "What is the name of the top goal scorer of the top five leagues in 2018?",
    answers: ["Messi", "Ronaldo", "Hazard", "Neymar Jr."],
    correctAnswer: "Messi",
    image: "https://i.giphy.com/media/2HavnYT1BfENa/200w.webp"
  },
  {
    question: "Who is the Top assister in 2018/2019 season so far?",
    answers: ["Messi", "Jordi Alba", "CR7", "Pablo"],
    correctAnswer: "Messi",
    image: ""
  },
  {
    question: "How many goals did Mesii score in 2018?",
    answers: ["51", "42", "63", "54"],
    correctAnswer: "51",
    image: "https://media.giphy.com/media/26FL4BhNXmo8PNLYk/giphy.gif"
  }
  // {
  //   question: "Question 4?",
  //   answers: ["1", "2", "3", "4"],
  //   correctAnswer: "#",
  //   image: "#"
  // },
  // {
  //   question: "Question 5?",
  //   answers: ["1", "2", "3", "4"],
  //   correctAnswer: "#",
  //   image: "#"
  // }
];

// creating variables
var timer = $("#timer");
var i = 0;
var card = $("#card");
hideThings("#time");
var num_correct = 0;
var num_incorrect = 0;
var num_notanswered = 0;
var num = 0;
// showQuestions(questions, num);
// hideThings("#answerChoices")

// This will be the first question

// handle click events
$("#start").click(function(e) {
  //   e.preventDefault();
  i++;
  // console.log("start was pressed: " + i);
  hideThings("#start");
  hideThings("p");
  hideThings(".display-3");
  hideThings(".messi");
  showThings("#time");
  showThings("#anserChoices");
  // ############################################ Change me to 30
  startTimer(5);
  // showQuestions(questions, num);
  console.log(num);
});

// start or stop the timer
function startTimer(i, callback) {
  callback = callback || function() {};
  var int = setInterval(function() {
    $("#timer").html(i);
    // console.log(i);
    // function to see the time is up
    timeOut(i, num);
    i-- || (clearInterval(int), callback());
  }, 1000);
  console.log(num);
  showQuestions(questions, num);
  // num++;
  // console.log("The num is now: " + num);
}

// function to see if the time is up
function timeOut(i, num) {
  // console.log("seconds: "+i);
  // console.log("The question number is -> "+num);
  if (i === 0) {
    console.log("Timeup \nThe question number is -> " + num);
    num++;
    console.log(num);
  }
}

// hide function
function hideThings(ID) {
  $(ID).hide();
  // console.log(ID + " was hidden");
}

// show function
function showThings(ID) {
  $(ID).show();
  // console.log(ID + " was shown");
}

// press start -> start timer -> show question

// Show 1st question function
function showQuestions(list, num) {
  console.log("Show Question function value is " + num);
  for (i in list) {
    if (i == num) {
      // console.log("num and i are equal to -> " + num);
      // console.log(list[i].question);
      console.log(list[num].question)
      questionsAndAnswerChoices(list);
      console.log("Correct Answer: "+list[i].correctAnswer);
    }
  }
}

$("button").click(function (e) { 
  e.preventDefault();
  console.log("Button was clicked")
  isCorrect(list, "need value")
});


function questionsAndAnswerChoices(list) {
  $("#questions").html(list[i].question);
  for (a in list[i].answers) {
    // this is the answer choices
    // console.log(list[i].answers[a]);
    c = list[i].answers[a];
    $("#possibleAnswers").append("<button>" + c + "</button>"+"<br>");

  }
} 

function isCorrect(list) {
  if (list[i].question == list[i].answers) {
    num_correct++;
    console.log("Correct" + num_correct);
  } else {
    num_incorrect;
    console.log("incorrect" + num_incorrect);
  }
}
// Determine if wrong or right

// Time delay

// Show next question + Start timer
