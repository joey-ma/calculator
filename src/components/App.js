import "./App.style.css";

import Screen from "./Screen";
import CalcButtons from "./CalcButtons";
import CalcContextProvider from "../context/CalcContext";

export default function App() {
  console.log("current mode:", process.env.NODE_ENV);

  const btnValues = {
    row0: "Rad | Deg x! ( ) % AC".split(" "),
    row1: "Inv sin ln 7 8 9 ÷".split(" "),
    row2: "π cos log 4 5 6 ×".split(" "),
    row3: "e tan √ 1 2 3 –".split(" "),
    row4: "Ans EXP x^(y) 0 . = +".split(" "),
  };

  return (
    <CalcContextProvider>
      <div className="app">
        <h1>Calculator App</h1>
        <div className="calc">
          <Screen />
          <CalcButtons btnValues={btnValues} />
        </div>
      </div>
    </CalcContextProvider>
  );
}
