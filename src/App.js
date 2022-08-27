import { useState } from "react";

import Screen from "./Screen";
import CalcButtons from "./CalcButtons";

export default function App() {
  const [runningTotal, setRunningTotal] = useState(0);

  const btnValues = {
    row0: "Rad | Deg x! ( ) % AC".split(" "),
    row1: "Inv sin ln 7 8 9 ÷".split(" "),
    row2: "π cos log 4 5 6 ×".split(" "),
    row3: "e tan √ 1 2 3 –".split(" "),
    row4: "Ans EXP x^(y) 0 . = +".split(" "),
  };

  return (
    <div className="app">
      <h1>Calculator App</h1>
      <div className="calc">
        <Screen runningTotal={runningTotal} />
        <CalcButtons btnValues={btnValues} />
      </div>
    </div>
  );
}
