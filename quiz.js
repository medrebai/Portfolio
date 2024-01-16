const GamingQuestions = [
  {
      q: "What is the main character's name in the game 'The Witcher 3: Wild Hunt'?",
      a: [
          { text: "Geralt of Rivia", isCorrect: true },
          { text: "Ezio Auditore", isCorrect: false },
          { text: "Nathan Drake", isCorrect: false },
          { text: "John Marston", isCorrect: false }
      ]
  },
  {
      q: "Which gaming console is produced by Nintendo?",
      a: [
          { text: "PlayStation", isCorrect: false },
          { text: "Xbox", isCorrect: false },
          { text: "Nintendo Switch", isCorrect: true },
          { text: "Sega Genesis", isCorrect: false }
      ]
  },
  {
      q: "In the game 'Overwatch', what is the name of the character who wields a bow?",
      a: [
          { text: "Tracer", isCorrect: false },
          { text: "Genji", isCorrect: false },
          { text: "Hanzo", isCorrect: true },
          { text: "Widowmaker", isCorrect: false }
      ]
  },
  {
      q: "What is the title of the first mainline Kingdom Hearts game?",
      a: [
          { text: "Kingdom Hearts III", isCorrect: false },
          { text: "Kingdom Hearts: Birth by Sleep", isCorrect: false },
          { text: "Kingdom Hearts", isCorrect: true },
          { text: "Kingdom Hearts II", isCorrect: false }
      ]
  },
  {
      q: "Which game is often credited with popularizing the battle royale genre?",
      a: [
          { text: "Fortnite", isCorrect: false },
          { text: "PUBG (PlayerUnknown's Battlegrounds)", isCorrect: true },
          { text: "Apex Legends", isCorrect: false },
          { text: "Call of Duty: Warzone", isCorrect: false }
      ]
  },
  {
      q: "Who is the protagonist in the game 'Final Fantasy VII'?",
      a: [
          { text: "Cloud Strife", isCorrect: true },
          { text: "Squall Leonhart", isCorrect: false },
          { text: "Tidus", isCorrect: false },
          { text: "Zidane Tribal", isCorrect: false }
      ]
  },
  {
      q: "In the game 'Minecraft', what material is needed to craft a torch?",
      a: [
          { text: "Stone", isCorrect: false },
          { text: "Wood", isCorrect: false },
          { text: "Coal", isCorrect: true },
          { text: "Iron", isCorrect: false }
      ]
  },
  {
      q: "Which game features a character named Kratos?",
      a: [
          { text: "God of War", isCorrect: true },
          { text: "Dark Souls", isCorrect: false },
          { text: "Bloodborne", isCorrect: false },
          { text: "Devil May Cry", isCorrect: false }
      ]
  },
  {
      q: "In 'The Elder Scrolls V: Skyrim', what is the capital city of Skyrim?",
      a: [
          { text: "Whiterun", isCorrect: false },
          { text: "Riften", isCorrect: false },
          { text: "Solitude", isCorrect: true },
          { text: "Windhelm", isCorrect: false }
      ]
  },
  {
      q: "Which game is set in the post-apocalyptic wasteland of the Commonwealth?",
      a: [
          { text: "Fallout 3", isCorrect: false },
          { text: "Fallout: New Vegas", isCorrect: false },
          { text: "Fallout 4", isCorrect: true },
          { text: "Fallout 76", isCorrect: false }
      ]
  }
];

let currQuestion = 0;
let score = 0;

function loadQuestions() {
    const question = document.getElementById("ques");
    const opt = document.getElementById("opt");

    question.textContent = GamingQuestions[currQuestion].q;
    opt.innerHTML = "";

    for (let i = 0; i < GamingQuestions[currQuestion].a.length; i++) {
        const choicesDiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");

        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;

        choiceLabel.textContent = GamingQuestions[currQuestion].a[i].text;

        choicesDiv.appendChild(choice);
        choicesDiv.appendChild(choiceLabel);
        opt.appendChild(choicesDiv);
    }
}

loadQuestions();

function loadScore() {
    const totalScore = document.getElementById("score");
    totalScore.textContent = `You scored ${score} out of ${GamingQuestions.length}`;
}

function nextQuestion() {
    if (currQuestion < GamingQuestions.length - 1) {
        currQuestion++;
        loadQuestions();
    } else {
        document.getElementById("opt").remove();
        document.getElementById("ques").remove();
        document.getElementById("submitBtn").remove(); // Remove the submit button
        loadScore();
    }
}

function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');

    if (selectedAnswer) {
        const selectedValue = parseInt(selectedAnswer.value);

        if (GamingQuestions[currQuestion].a[selectedValue].isCorrect) {
            score++;
            console.log("Correct");
        }

        nextQuestion();
    }
}