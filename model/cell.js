import areNeighbors from "./areNeighbors";

class Cell {
  constructor(x, y) {
    this.position = { x, y };
    this.isAlive = false;
    this.previousGenerationIsAlive = false;
  }
  setNeighbors(cells) {
    const neighbors = [];
    for (let i = 0; i < cells.length; i++) {
      if (areNeighbors(this, cells[i])) {
        neighbors.push(cells[i]);
      }
    }
    this.neighbors = neighbors;
  }
  changeGeneration() {
    this.previousGenerationIsAlive = this.isAlive;
  }
  nextGeneration() {
    let aliveNeighbors = 0;
    for (let i = 0; i < this.neighbors.length; i++) {
      this.neighbors[i].previousGenerationIsAlive && aliveNeighbors++;
    }
    if (aliveNeighbors === 3 || aliveNeighbors === 2) {
      this.isAlive = true;
    } else {
      this.isAlive = false;
    }
  }
}

export default Cell;
