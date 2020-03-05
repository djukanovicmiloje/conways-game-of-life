import Cell from "./cell";
import { NUM_CELLS_X, NUM_CELLS_Y } from "./constants";

const generateCells = () => {
  const cells = [];

  for (let i = 0; i < NUM_CELLS_X; i++) {
    for (let j = 0; j < NUM_CELLS_Y; j++) {
      cells.push(new Cell(i, j));
    }
  }

  return cells;
};

export default generateCells;
