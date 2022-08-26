import "./buttons.style.css";

export default function App() {
  const btnValues = {
    row0: "Rad | Deg x! ( ) % AC".split(" "),
    row1: "Inv sin ln 7 8 9 ÷".split(" "),
    row2: "π cos log 4 5 6 ×".split(" "),
    row3: "e tan √ 1 2 3 –".split(" "),
    row4: "Ans EXP x^(y) 0 . = +".split(" "),
  };

  const btnsArray = [];
  for (const row in btnValues) {
    btnsArray.push(
      btnValues[row].map((btn, i) => {
        const number = Boolean(Number(btn) > -1 || btn === ".")
          ? " number"
          : "";
        return (
          <button
            key={row + "-btn" + i}
            id={row + "-btn" + i}
            className={"btn" + number}
          >
            {btn}
          </button>
        );
      })
    );
  }

  console.log("🚀 ~ file: App.js ~ line 11 ~ App ~ btnsArray", btnsArray);

  // notes for styling:
  // "Rad" has the id of row1-btn0,
  // "Deg" is #row1-btn1,
  // "=" has #row4-btn5

  return (
    <div className="app">
      <h1>Calculator App</h1>
      <div className="calc">
        <div className="screen">0</div>
        <div className="buttons"></div>
        {btnsArray.map((row) => (
          <div className="row">{row}</div>
        ))}
      </div>
    </div>
  );
}
