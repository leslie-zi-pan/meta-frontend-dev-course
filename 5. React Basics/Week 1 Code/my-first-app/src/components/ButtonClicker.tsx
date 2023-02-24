import { useState } from "react";
import { ButtonClickerProps } from "../types/types";

const ButtonClicker = (props: ButtonClickerProps) => {
  const { initNumber } = props;

  let [button, buttonState] = useState(initNumber);
  const buttonClick = () => buttonState(button + 1);
  const resetButton = () => buttonState(0);

  return (
    <div>
      <div>{button}</div>
      <button className="btn button" onClick={buttonClick}>
        Add one
      </button>
      <button className="btn button" onClick={resetButton}>
        Reset
      </button>
    </div>
  );
};

export default ButtonClicker;
