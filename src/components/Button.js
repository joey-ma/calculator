import { useContext, useState } from "react";
import { CalcContext } from "../context/CalcContext";
import utils from "../utils/basic-calculator";

export default function Button({ row, i, number, btnValue }) {
  // `key` is not a prop. Trying to access it will result in `undefined` being returned.
  const key = row + "-btn" + i;
  const id = row + "-btn" + i;

  const { calc, setCalc } = useContext(CalcContext);

  const app = utils(calc, setCalc);

  const handleButton = (value) => {
    const results = {
      AC: app.handleAC,
      ".": app.handleDecimal,
      "÷": app.handleBasicOperators,
      "×": app.handleBasicOperators,
      "–": app.handleBasicOperators,
      "+": app.handleBasicOperators,
      "=": app.handleEquals,
      "%": app.handlePercent,
    };
    if (results[value]) {
      return results[value](value);
    } else {
      return app.handleButtonClick(value);
    }
  };

  return (
    <button
      key={key}
      id={id}
      className={"btn" + number}
      onClick={(event) => handleButton(event.target.innerText)}
    >
      {btnValue}
    </button>
  );
}
