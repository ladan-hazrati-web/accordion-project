const questionItems = document.querySelectorAll(".question-item");
const answerBoxes = document.querySelectorAll(".answer-box");

questionItems.forEach((item) => {
  item.addEventListener("click", () => {
    const answerHeight = item
      .querySelector(".answer-text")
      .getBoundingClientRect().height;
    const answerBox = item.querySelector(".answer-box");
    if (item.classList.contains("showAnswer")) {
      resetAnswer();
    } else {
      resetAnswer();
      answerBox.style.height = `${answerHeight}px`;
      item.classList.add("showAnswer");
    }
  });
});

const resetAnswer = () => {
  answerBoxes.forEach((answer) => {
    answer.parentElement.classList.remove("showAnswer");
    answer.style.height = 0;
  });
};
