//using selectors inside the element

const questions = document.querySelectorAll(".question");
questions.forEach((q) => {
  const btn = q.querySelector(".question-btn");
  btn.addEventListener("click", function () {
    q.classList.toggle("show-text");
  });
});

// traversing the dom

// const btns = document.querySelectorAll(".question-btn");
// btns.forEach((btn) => {
//   btn.addEventListener("click", function (e) {
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show-text");
//   });
// });
