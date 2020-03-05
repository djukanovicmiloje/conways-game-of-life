import { CELL_HEIGHT } from "../model/constants";

const onCanvasClick = e => {
  const x = parseInt(e.clientX / CELL_HEIGHT);
  const y = parseInt(e.clientY / CELL_HEIGHT);
};
