export default function (calc, setCalc) {
  return {
    handleAC: () => {
      setCalc({ operator: "", num: 0, result: 0 });
    },
    handleButtonClick: (value) => {
      const numberString = value.toString();

      let numberValue;
      if (numberString === "0" && calc.num === 0) {
        numberValue = "0";
      } else {
        numberValue = Number(calc.num + numberString);
      }
      setCalc({
        ...calc,
        num: numberValue,
      });
    },
    handleDecimal: (value) => {
      setCalc({
        ...calc,
        num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
      });
    },
    handleBasicOperators: (value) => {
      setCalc({
        operator: value,
        result: !calc.result && calc.num ? calc.num : calc.result,
        num: 0,
      });
    },
    handleEquals: () => {
      if (calc.result && calc.num) {
        const math = (a, b, operator) => {
          const result = {
            "+": (a, b) => a + b,
            "–": (a, b) => a - b,
            "×": (a, b) => a * b,
            "÷": (a, b) => a / b,
          };
          return result[operator](a, b);
        };
        setCalc({
          result: math(calc.result, calc.num, calc.operator),
          operator: "",
          num: 0,
        });
      }
    },
    handlePercent: () => {
      setCalc({
        num: calc.num / 100,
        result: calc.result / 100,
        operator: "",
      });
    },
    handleInvert: () => {
      setCalc({
        num: calc.num ? calc.num * -1 : 0,
        result: calc.result ? calc.result * -1 : 0,
        operator: "",
      });
    },
  };
}
