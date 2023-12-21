import getData from "./getRequest.js";
import { selector } from "./selector.js";
import randomArray from "./randomArray.js";
import changeClass from "./changeClass.js";
import { imgsLoop } from "./loopCreator.js";

const theInput = selector("#theNum");
let inputsValue;

const startGame = async () => {
  inputsValue = theInput.value || 2;
  let checker = inputsValue < 2 ? 2 : inputsValue > 100 ? 100 : inputsValue;
  const res = await getData(checker);
  total.innerText = `TOTAL CARDS: ${checker}`;
  const copyArray = await res.data?.map((da) => da.url);
  let randomArr = randomArray([...copyArray, ...copyArray]);
  if (res.status == 200) {
    changeClass([startingScreen], [gameContainer]);
    imgsLoop(
      cards,
      randomArr,
      "img",
      "min-w-full h-full rounded-lg",
      false
    );
  }
};

export { startGame, inputsValue };
