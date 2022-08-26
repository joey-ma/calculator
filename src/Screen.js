import HistoryIcon from "@mui/icons-material/History";

export default function Screen({ runningTotal }) {
  return (
    <div className="screen">
      <HistoryIcon />
      <div className="calculations">{runningTotal}</div>
    </div>
  );
}
