const quizData = [
  {
    question: "What is the capital of France ?",
    options: ["London", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
    timeLimit: 20,
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Jupiter", "Mercury"],
    correctAnswer: "Mars",
    timeLimit: 15,
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: [
      "William Shakespeare",
      "Charles Dickens",
      "Jane Austen",
      "Mark Twain",
    ],
    correctAnswer: "William Shakespeare",
    timeLimit: 25,
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Giraffe", "Blue Whale", "Kangaroo"],
    correctAnswer: "Blue Whale",
    timeLimit: 30,
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    correctAnswer: "Carbon Dioxide",
    timeLimit: 18,
  },
];

var score = 0;
var counter = 0;
showQuestions(quizData);

function showQuestions(arrOfQuestion) {
  document.body.innerHTML = "";
  var generalDataContainer = document.createElement("div");
  generalDataContainer.setAttribute("class", "generalDataContainer");

  var questionCount = document.createElement("h3");
  questionCount.setAttribute("class", "questionCount");
  questionCount.innerHTML = `question ${counter + 1} of ${
    arrOfQuestion.length
  }`;

  var timerLimit = arrOfQuestion[counter].timeLimit;
  var timerCounter = document.createElement("h3");
  timerCounter.setAttribute("class", "timerCounter");

  var timerInterval = setInterval(function () {
    if (timerLimit <= 10) {
      timerCounter.innerHTML = `00:${(timerLimit--)
        .toString()
        .padStart(2, "0")}`;
    } else {
      timerCounter.innerHTML = `00:${timerLimit--}`;
    }
    if (timerLimit < 0) {
      clearInterval(timerInterval);
      if (counter < 4) {
        counter++;
        // console.log(counter);
        showQuestions(quizData);
      } else {
        // console.log(score);
        clearInterval(timerInterval);
        if (score >= 3) {
          document.body.innerHTML = `<h1 class='scoreContainer'> Congratulations , Your Score is : ${score}</h1>`;
        } else if (score < 3) {
          document.body.innerHTML = `<h1 class='scoreContainer'> So bad , Your Score is : ${score}</h1>`;
        }
      }
    }
  }, 1000);

  generalDataContainer.append(questionCount, timerCounter);

  var questionContainer = document.createElement("div");
  questionContainer.setAttribute("class", "questionContainer");

  var question = document.createElement("p");
  question.setAttribute("class", "question");
  question.innerHTML = `${arrOfQuestion[counter].question}`;

  questionContainer.append(question);

  var questionAnswers = document.createElement("div");
  questionAnswers.setAttribute("class", "questionAnswers");

  var list = document.createElement("ul");
  var listItem1 = document.createElement("li");
  var inputRadio1 = document.createElement("input");
  inputRadio1.setAttribute("value", `${arrOfQuestion[counter].options[0]}`);
  inputRadio1.setAttribute("type", "radio");
  inputRadio1.setAttribute("name", "answer");
  inputRadio1.setAttribute("id", "answer1");

  var labelAnswer1 = document.createElement("label");
  labelAnswer1.setAttribute("for", "answer1");
  labelAnswer1.innerHTML = `${arrOfQuestion[counter].options[0]}`;

  listItem1.append(inputRadio1, labelAnswer1);

  var listItem2 = document.createElement("li");
  var inputRadio2 = document.createElement("input");
  inputRadio2.setAttribute("value", `${arrOfQuestion[counter].options[1]}`);
  inputRadio2.setAttribute("type", "radio");
  inputRadio2.setAttribute("name", "answer");
  inputRadio2.setAttribute("id", "answer2");

  var labelAnswer2 = document.createElement("label");
  labelAnswer2.setAttribute("for", "answer2");
  labelAnswer2.innerHTML = `${arrOfQuestion[counter].options[1]}`;

  listItem2.append(inputRadio2, labelAnswer2);

  var listItem3 = document.createElement("li");
  var inputRadio3 = document.createElement("input");
  inputRadio3.setAttribute("value", `${arrOfQuestion[counter].options[2]}`);
  inputRadio3.setAttribute("type", "radio");
  inputRadio3.setAttribute("name", "answer");
  inputRadio3.setAttribute("id", "answer3");

  var labelAnswer3 = document.createElement("label");
  labelAnswer3.setAttribute("for", "answer3");
  labelAnswer3.innerHTML = `${arrOfQuestion[counter].options[2]}`;

  listItem3.append(inputRadio3, labelAnswer3);

  var listItem4 = document.createElement("li");
  var inputRadio4 = document.createElement("input");
  inputRadio4.setAttribute("value", `${arrOfQuestion[counter].options[3]}`);
  inputRadio4.setAttribute("type", "radio");
  inputRadio4.setAttribute("name", "answer");
  inputRadio4.setAttribute("id", "answer4");

  var labelAnswer4 = document.createElement("label");
  labelAnswer4.setAttribute("for", "answer4");
  labelAnswer4.innerHTML = `${arrOfQuestion[counter].options[3]}`;

  listItem4.append(inputRadio4, labelAnswer4);

  list.append(listItem1, listItem2, listItem3, listItem4);
  var submitBtn = document.createElement("button");
  submitBtn.setAttribute("id", "submitBtn");
  submitBtn.innerHTML = `Submit`;

  submitBtn.addEventListener("click", function () {
    var timeTakenShow = document.createElement("h2");
    timeTakenShow.setAttribute("class", "timeTaken");
    timeTakenShow.innerHTML = `time taken to answer last question = ${
      arrOfQuestion[counter].timeLimit - timerLimit
    }`;
    if (
      inputRadio1.checked ||
      inputRadio2.checked ||
      inputRadio3.checked ||
      inputRadio4.checked
    ) {
      if (
        inputRadio1.value == arrOfQuestion[counter].correctAnswer &&
        inputRadio1.checked == true
      ) {
        score += 1;
        // console.log(score);
      }
      if (
        inputRadio2.value == arrOfQuestion[counter].correctAnswer &&
        inputRadio2.checked == true
      ) {
        score += 1;
        // console.log(score);
      }
      if (
        inputRadio3.value == arrOfQuestion[counter].correctAnswer &&
        inputRadio3.checked == true
      ) {
        score += 1;
        // console.log(score);
      }
      if (
        inputRadio4.value == arrOfQuestion[counter].correctAnswer &&
        inputRadio4.checked == true
      ) {
        score += 1;
        // console.log(score);
      }
      clearInterval(timerInterval);

      if (counter < 4) {
        var timeTakenToAnswer = arrOfQuestion[counter].timeLimit - timerLimit;
        console.log(timeTakenToAnswer);
        counter++;
        showQuestions(quizData);
        document.body.append(timeTakenShow);
      } else {
        document.body.append(timeTakenShow);
        clearInterval(timerInterval);
        // console.log(score);
        if (score >= 3) {
          document.body.innerHTML = `<h2 class='scoreContainer'> Congratulations , Your Score is : ${score}</h2>`;
          document.body.append(timeTakenShow);
        } else if (score < 3) {
          document.body.innerHTML = `<h2 class='scoreContainer'> So bad , Your Score is : ${score}</h2>`;
          document.body.append(timeTakenShow);
        }
      }
    }
  });
  questionAnswers.append(list, submitBtn);
  document.body.append(
    generalDataContainer,
    questionContainer,
    questionAnswers
  );
}

//
