import { CELL_HEIGHT } from "../model/constants";

const canvas = document.getElementById("gol");
const ctx = canvas.getContext("2d");

const drawCell = cell => {
  if (cell.isAlive) {
    ctx.fillRect(
      CELL_HEIGHT * cell.position.x,
      CELL_HEIGHT * cell.position.y,
      CELL_HEIGHT,
      CELL_HEIGHT
    );
  } else {
    ctx.fillRect(
      CELL_HEIGHT * cell.position.x,
      CELL_HEIGHT * cell.position.y,
      CELL_HEIGHT,
      CELL_HEIGHT / 20
    );

    ctx.fillRect(
      CELL_HEIGHT * cell.position.x,
      CELL_HEIGHT * cell.position.y,
      CELL_HEIGHT / 20,
      CELL_HEIGHT
    );
    ctx.fillRect(
      CELL_HEIGHT * (cell.position.x + 19 / 20),
      CELL_HEIGHT * cell.position.y,
      CELL_HEIGHT / 20,
      CELL_HEIGHT
    );

    ctx.fillRect(
      CELL_HEIGHT * cell.position.x,
      CELL_HEIGHT * (cell.position.y + 19 / 20),
      CELL_HEIGHT,
      CELL_HEIGHT / 20
    );
  }
};

export default drawCell;

export const clearCanvas = () => {
  canvas.width = canvas.width;
};

export const getStartButton = () => document.querySelector(".start");

export const getStopButton = () => document.querySelector(".stop");
