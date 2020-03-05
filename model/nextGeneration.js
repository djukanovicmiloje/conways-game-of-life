import drawCell from "../view/draw";

//ova funkcija pomera za jednu generaciju

const nextGeneration = cells => {
  for (let i = 0; i < cells.length; i++) {
    cells[i].changeGeneration();
  }
  for (let i = 0; i < cells.length; i++) {
    cells[i].nextGeneration();
    drawCell(cells[i]);
  }
};

export default nextGeneration;
