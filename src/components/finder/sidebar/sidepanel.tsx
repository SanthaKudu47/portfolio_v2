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
    <div className=" px-5 md:border-b-2 md:border-solid md:border-b-app-gray-100/20 flex flex-col w-full h-full ">
      <span className="text-lg hidden md:inline">Favorites</span>
      <div className="flex flex-row   md:flex-col md:gap-y-2 md:py-5 md:px-3 w-full justify-evenly">
        {sidePanelData.map((data, index) => {
          return (
            <div className="flex flex-col md:flex-row items-center gap-x-2 hover:bg-app-white-150 p-2 rounded-sm cursor-pointer ">
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
