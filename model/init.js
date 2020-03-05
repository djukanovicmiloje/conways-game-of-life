import generateCells from "./generateCells";
import nextGeneration from "./nextGeneration";
import test, { clearCanvas } from "../view/draw";
import initButtons from "../controller/start";

const cells = generateCells();

for (let i = 0; i < cells.length; i++) {
  cells[i].setNeighbors(cells);
}

// cells[25].isAlive = true;
// cells[24].isAlive = true;
// cells[26].isAlive = true;

export const gameLoop = () => {
  return setInterval(() => {
    clearCanvas();
    console.log("ide");
    nextGeneration(cells);
  }, 1000);
};

initButtons();
