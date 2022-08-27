import Button from "./Button";

import "./buttons.style.css";

export default function CalcButtons({ btnValues }) {
  const btnsArray = [];
  for (const row in btnValues) {
    btnsArray.push(
      btnValues[row].map((btnValue, i) => {
        const number = Boolean(Number(btnValue) > -1 || btnValue === ".")
          ? " number"
          : "";

        return (
          <Button
            key={row + "-Btn" + i + "-"}
            row={row}
            btnValue={btnValue}
            i={i}
            number={number}
          />
        );
        // return <Button props={props} value={btn} />;
      })
    );
  }

  return (
    <div className="buttons">
      {btnsArray.map((row, i) => (
        <div key={"row" + i} className="row">
          {row}
        </div>
      ))}
    </div>
  );
}
