import utils from "./utils/basic-calculator";

export default function Button({ row, i, number, btnValue }) {
  // `key` is not a prop. Trying to access it will result in `undefined` being returned.

  const key = row + "-btn" + i;
  const id = row + "-btn" + i;

  let buffer = "0";
  let previousOperator;

  return (
    <button
      key={key}
      id={id}
      className={"btn" + number}
      onClick={(event) => utils.buttonClick(event.target.innerText)}
    >
      {btnValue}
    </button>
  );
}
