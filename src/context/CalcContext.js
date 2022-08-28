import { createContext, useState } from "react";

export const CalcContext = createContext(0);

function CalcContextProvider({ children }) {
  const [calc, setCalc] = useState({
    operator: "",
    num: 0,
    result: 0,
    // input: 0, // to experiment with later
  });

  // stretch goal:
  // const [data, setData] = useState({
  //   operation: [],
  //   formula: [],
  // });

  const providerValue = {
    calc,
    setCalc,
    // data,
    // setData,
  };

  return (
    <CalcContext.Provider value={providerValue}>
      {children}
    </CalcContext.Provider>
  );
}

export default CalcContextProvider;
