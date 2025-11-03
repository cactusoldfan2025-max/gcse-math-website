const questions = [
  { q: "Solve for x: 2x + 5 = 15", a: "5" },
  { q: "Factorize: x² + 5x + 6", a: "(x+2)(x+3)" },
  { q: "Solve: 3x - 4 = 2x + 1", a: "5" },
  { q: "What is the probability of rolling a sum of 7 with two dice?", a: "6/36" },
  { q: "Find the gradient of the line passing through (2,3) and (5,11)", a: "8/3" },
  { q: "Simplify: 4x² - 9 / 2x + 3", a: "(2x-3)" }
];

let current = 0;

function loadQuestion() {
  document.getElementById("question").textContent = questions[current].q;
  document.getElementById("feedback").textContent = "";
  document.getElementById("answer").value = "";
}

function checkAnswer() {
  const ans = document.getElementById("answer").value.trim();
  if(ans === questions[current].a) {
    document.getElementById("feedback").textContent = "Correct!";
  } else {
    document.getElementById("feedback").textContent = `Wrong! Answer: ${questions[current].a}`;
  }
  current = (current + 1) % questions.length;
  setTimeout(loadQuestion, 2000);
}

window.onload = loadQuestion;
