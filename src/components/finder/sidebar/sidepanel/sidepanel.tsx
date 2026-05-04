import {
  IoCodeWorkingOutline,
  IoDocumentTextOutline,
  IoPersonOutline,
  IoTrashOutline,
} from "react-icons/io5";

import { TfiSplitVAlt } from "react-icons/tfi";
import { TfiWrite } from "react-icons/tfi";
import { TfiTrash } from "react-icons/tfi";

import "./sidepanel.css"; // Import the new CSS file
import type { SidePanelItem } from "@components/finder/types";

const sidePanelData: SidePanelItem[] = [
  { text: "Work", Icon: TfiSplitVAlt },
  { text: "About Me", Icon: IoPersonOutline },
  { text: "Resume", Icon: TfiWrite },
  { text: "Trash", Icon: TfiTrash },
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
