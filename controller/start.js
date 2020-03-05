import { getStartButton, getStopButton } from "../view/draw";
import { gameLoop } from "../model/init";

const initButtons = () => {
  const onStartClick = () => {
    const interval = gameLoop();
    const onStopClick = () => {
      clearInterval(interval);
    };
    getStopButton().addEventListener("click", () => onStopClick());
  };

  getStartButton().addEventListener("click", () => onStartClick());
};

export default initButtons;
