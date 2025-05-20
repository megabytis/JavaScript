"use strict";

/*
console.dir(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Hey there me Miku";
console.log(document.querySelector(".message").textContent);
document.querySelector(".number").textContent = "yo";
document.querySelector(".score").textContent = 54;
document.querySelector(".guess").value = 38;
console.log(document.querySelector(".guess").value);
*/

/* confetti start ------------------------------------- */
function createConfetti() {
  const colors = [
    "#ff0000",
    "#ff7300",
    "#fffb00",
    "#48ff00",
    "#00ffd5",
    "#002bff",
    "#7a00ff",
    "#ff00c8",
  ];
  const types = ["", "ribbon", "flower"]; // 3 variants

  for (let i = 0; i < 200; i++) {
    const confetti = document.createElement("div");
    const type = types[Math.floor(Math.random() * types.length)];
    confetti.className = `confetti ${type}`;

    // Random styles
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.animationDuration = `${Math.random() * 2 + 2}s`;
    confetti.style.opacity = Math.random() + 0.5;

    // Random color if not special type
    if (!type) {
      confetti.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
    } else {
      confetti.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
    }

    // Random size and rotation
    confetti.style.transform = `rotate(${Math.random() * 360}deg) scale(${
      Math.random() + 0.5
    })`;

    document.body.appendChild(confetti);

    // Remove after animation
    setTimeout(() => confetti.remove(), 3000);
  }
}
/* confettii end-------------------------------*/

let score = 20;
let highScore = 0;
document.querySelector(".score").textContent = score;
document.querySelector(".highscore").textContent = highScore;

document
  .querySelector(".check")
  .addEventListener("click", function checkingNumber() {
    const guessedNum = Number(document.querySelector(".guess").value);

    if (score <= 0) {
      document.querySelector(".message").textContent = "You lose !";
    } else {
      if (!guessedNum) {
        document.querySelector(".message").textContent = "⛔ No number entered";
      } else if (guessedNum === randomNumber) {
        // winnning message
        document.querySelector(".message").textContent =
          "🎉 You guessed correct & Now PLAY AGAIN";
        highScore += score;
        document.querySelector(".highscore").textContent = highScore;

        // confetti explosion
        createConfetti();

        // resetting the Game
        // after winning calling the randomNumber again & maing score 20 again
        randomNumber = getRandomInt(1, 20);
        score = 20;
        document.querySelector(".score").textContent = score;
      } else if (guessedNum > randomNumber) {
        document.querySelector(".message").textContent = "📈 Too High";
        score--;
        document.querySelector(".score").textContent = score;
      } else if (guessedNum < randomNumber) {
        document.querySelector(".message").textContent = "📉 Too Low";
        score--;
        document.querySelector(".score").textContent = score;
      }
    }
  });

//  Creating PoP-Up modal system -----------------------------
const modal = document.querySelector(".modal");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelector(".help");
const overlay = document.querySelector(".overlay");

// Open popup
btnOpenModal.addEventListener("click", function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

// Close popup on cross button
btnCloseModal.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

// Close popup when clicking on the overlay
overlay.addEventListener("click", function () {
  console.log("Overlay clicked!"); // Debugging
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

// Prevent modal clicks from closing the popup
document
  .querySelector(".modal-content")
  .addEventListener("click", function (e) {
    e.stopPropagation();
  });

// Close popup on Escape key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  }
});

//Play again button
document.querySelector(".again").addEventListener("click", function () {
  // message reset
  document.querySelector(".message").textContent = "Start guessing...";

  //input space reset
  document.querySelector(".guess").value = 0;

  // randomNumber reset
  randomNumber = getRandomInt(1, 20);
  document.querySelector(".score").textContent = "20";
});

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let randomNumber = getRandomInt(1, 10);
