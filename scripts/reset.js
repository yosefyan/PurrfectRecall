import { selector } from "./selector.js";

const cards = selector("#cards");

const reset = (classToRemove) => {
  [...cards.children].forEach((card) => {
    [...card.children].forEach((ca) => {
      ca.classList.remove(classToRemove);
    });
  });
};

export default reset;
