window.initModalLogic = function ({ showAnswerBtn, answerDiv, oohSound, closeBtn, modal }) {
  // Show answer and play ooh sound
  showAnswerBtn.addEventListener("click", function () {
    oohSound.currentTime = 0;
    oohSound.play();
    answerDiv.style.display = "block";
  });

  closeBtn.addEventListener("click", function () {
    microclickSound.currentTime = 0;
    microclickSound.play();
    modal.style.display = "none";
  });

  // Show answer with space or enter
  document.addEventListener("keydown", function (event) {
    if (event.key === " " || event.key === "Enter") {
      oohSound.currentTime = 0;
      oohSound.play();
      answerDiv.style.display = "block";
    }
  });

  // Close modal with button or keys
  closeBtn.onclick = () => (modal.style.display = "none");
  document.addEventListener("keydown", function (event) {
    if (event.key === "x" || event.key === "X" || event.key === "Escape") {
      clickSound.currentTime = 0;
      clickSound.play();
      modal.style.display = "none";
    }
  });
};
