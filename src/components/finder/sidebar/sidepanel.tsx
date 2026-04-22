import {
  IoCodeWorkingOutline,
  IoDocumentTextOutline,
  IoPersonOutline,
  IoTrashOutline,
} from "react-icons/io5";
import type { SidePanelItem } from "../types";

const sidePanelData: SidePanelItem[] = [
  { text: "Work", Icon: IoCodeWorkingOutline },
  { text: "About Me", Icon: IoPersonOutline },
  { text: "Resume", Icon: IoDocumentTextOutline },
  { text: "Trash", Icon: IoTrashOutline },
];

export default function SidePanel() {
  return (
    <div className="row-span-6 px-5 border-b-2 border-solid border-b-app-gray-100/20 bg">
      <span className="text-lg">Favorites</span>
      <div className="flex flex-col gap-y-2 py-5 px-3">
        {sidePanelData.map((data, index) => {
          return (
            <div className="flex flex-row items-center gap-x-2 hover:bg-app-white-150 p-2 rounded-sm cursor-pointer">
              <data.Icon />
              <span className="" key={index}>
                {data.text}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
