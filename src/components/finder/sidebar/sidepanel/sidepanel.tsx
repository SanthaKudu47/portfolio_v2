import {
  IoCodeWorkingOutline,
  IoDocumentTextOutline,
  IoPersonOutline,
  IoTrashOutline,
} from "react-icons/io5";

import "./sidepanel.css"; // Import the new CSS file
import type { SidePanelItem } from "@components/finder/types";

const sidePanelData: SidePanelItem[] = [
  { text: "Work", Icon: IoCodeWorkingOutline },
  { text: "About Me", Icon: IoPersonOutline },
  { text: "Resume", Icon: IoDocumentTextOutline },
  { text: "Trash", Icon: IoTrashOutline },
];

export default function SidePanel() {
  return (
    <div className="sidepanel-container">
      <span className="sidepanel-title">Favorites</span>

      <div className="sidepanel-items-container">
        {sidePanelData.map((data, index) => {
          return (
            <div key={index} className="sidepanel-item">
              <data.Icon className="sidepanel-item-icon" />

              <span className="sidepanel-item-text">{data.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
