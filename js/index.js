import changeClass from "./changeClass.js";
import { simpleLoop } from "./loopCreator.js";
import reset from "./reset.js";
import { selector } from "./selector.js";
import { startGame, inputsValue } from "./startGame.js";
import { btnsArray } from "./variables.js";

const theForm = selector("#theForm");

const startingScreen = selector("#startingScreen");
const cards = selector("#cards");

const solved = selector("#solved");

const victories = selector("#victories");

let selectedCards = [];
let lengthOfSolved = 0;

let victoriesNum = 0;

theForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  startGame();
});

cards.addEventListener("click", (e) => {
  if (e.target.tagName == "IMG") {
    e.target.parentElement.parentElement.classList.toggle("flip-box-back");
    selectedCards.push(
      e.target.parentElement.nextElementSibling?.firstElementChild
    );
    if (selectedCards.length === 2) {
      if (selectedCards[0].src == selectedCards[1].src) {
        selectedCards.forEach((card) =>
          card.parentElement.parentElement.classList.add("winner")
        );
        lengthOfSolved++;
        solved.innerText = `Solved: ${lengthOfSolved}`;
        selectedCards = [];
        if (lengthOfSolved == inputsValue) {
          setTimeout(() => {
            reset("winner");
            reset("flip-box-back");
            lengthOfSolved = 0;
            solved.innerText = "Solved: 0";
            victories.innerText = `Wins: ${(victoriesNum += 1)}`;
          }, 2000);
        }
        return;
      } else {
        setTimeout(() => reset("flip-box-back"), 1000);
        selectedCards = [];
      }
    }
  }
});

const btns = selector("#btns");
simpleLoop(
  btns,
  "button",
  btnsArray,
  "bg-yellow-500/25 font-bold shadow-yellow-900/50 w-full text-2xl xl:text-3xl p-4 shadow-lg shadow-cyan-500/50 drop-shadow-2xl"
);

btns.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    cards.innerHTML = "";
    if (e.target.innerText == "RESTART") {
      startGame();
    }
    if (e.target.innerText == "HOME") {
      changeClass([gameContainer], [startingScreen]);
    }
  }
});
