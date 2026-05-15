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
import type { DirTagTypes, SidePanelItem } from "@components/finder/types";

const sidePanelData: SidePanelItem[] = [
  { text: "Work", Icon: TfiSplitVAlt, tag: "work" },
  { text: "About Me", Icon: IoPersonOutline, tag: "about" },
  { text: "Resume", Icon: TfiWrite, tag: "resume" },
  { text: "Trash", Icon: TfiTrash, tag: "trash" },
];

export default function SidePanel({
  setActiveDir,
  activeDirTag,
}: {
  setActiveDir: (param: DirTagTypes) => void;
  activeDirTag: DirTagTypes;
}) {
  return (
    <div className="sidepanel-container">
      <span className="sidepanel-title">Favorites</span>

      <div className="sidepanel-items-container">
        {sidePanelData.map((data, index) => {
          return (
            <button onClick={() => setActiveDir(data.tag)}>
              <div
                key={index}
                className={`sidepanel-item text-app-gray-500  dark:hover:text-app-darkBlue-200  ${activeDirTag === data.tag ? "dark:bg-gray-100 bg-gray-200 dark:text-app-darkBlue-200" : "dark:text-app-gray-400"}`}
              >
                <data.Icon className="sidepanel-item-icon" />
                <span className="sidepanel-item-text">{data.text}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
