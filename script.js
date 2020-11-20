const questions = [
  {
    answer: 1
  },
  {
    answer: 2
  },
  {
    answer: 0
  },
  {
    answer: 1
  },
  {
    answer: 1
  },
]

let score = 0
let optionsList = document.getElementsByClassName("options-list")

for (let i = 0; i < optionsList.length; i++) {
  let list = optionsList[i].querySelectorAll("li")

  for (let j = 0; j < list.length; j++) {
    let option = list[j]

    option.addEventListener("click", checkAnswer);
  }
}

function updateScore() {
  let scoreDiv = document.getElementById("score");

  scoreDiv.innerHTML = `SCORE: ${score}`;
}

function paintRed(el) {
  el.style.backgroundColor = "red";
}

function paintGreen(el) {
  el.style.backgroundColor = "green";
}

function checkAnswer() {
  let index = Array.prototype.slice.call(this.parentElement.children).indexOf(this)
  let quiz = this.parentElement.parentElement.parentElement
  let quizIndex = Array.prototype.slice.call(quiz.parentElement.children).indexOf(quiz)

  if (questions[quizIndex].userAnswer === undefined) {
    if (questions[quizIndex].answer == index) {
      paintGreen(this)
      score += 1
      updateScore()
    } else {
      let siblings = this.parentElement.children

      paintGreen(siblings[questions[quizIndex].answer])
      paintRed(this)
    }
    questions[quizIndex].userAnswer = index
  }
}
