import HistoryIcon from "@mui/icons-material/History";
import { useContext } from "react";
import { CalcContext } from "../context/CalcContext";

export default function Screen() {
  const { calc } = useContext(CalcContext);

  function accessHistory() {
    // stretch goal
    console.log("accessing history");
  }

  return (
    <div className="screen">
      <HistoryIcon onClick={accessHistory} className="history-icon" />
      <div className="calculations">{calc.num ? calc.num : calc.result}</div>
    </div>
  );
}
