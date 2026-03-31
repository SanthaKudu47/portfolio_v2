import "./modeCardButton.css";
import { useAppStore } from "@store";

export default function ColorModeCardButton({
  text = "Light",
  colorMode,
}: {
  text: string;
  colorMode: "LIGHT" | "DARK";
}) {
  const mode = useAppStore((state) => state.mode);
  const toggleTheme = useAppStore((state) => state.toggleTheme);
  function eventHandler() {
    if (mode === colorMode) return;
    toggleTheme();
  }
  //hover:bg-app-white-300
  const selected = mode === colorMode ? "selected" : "";
  return (
    <button className="btn-wrapper" onClick={eventHandler}>
      <div className={`card ${selected}`}>
        <div
          className={`card-mode ${colorMode === "LIGHT" ? "bg-app-white-100" : "bg-app-darkBlue-700"}`}
        ></div>
        <span className="card-mode-text">{text}</span>
      </div>
    </button>
  );
}
