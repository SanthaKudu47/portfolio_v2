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
    <div
      className="
        px-5 
        md:border-b-2 md:border-solid md:border-b-app-gray-100/20 
        flex flex-col w-full h-full  
        bg-app-white-100 
        md:bg-app-white-200 
        dark:bg-app-darkBlue-700 
        justify-center md:justify-start 
        border-b-2 border-solid border-b-app-gray-100/20 
        dark:border-b-app-dark-300
      "
    >
      <span className="text-lg hidden md:inline dark:text-app-text-white-100">
        Favorites
      </span>

      <div className="flex flex-row md:flex-col md:gap-y-2 md:py-5 md:px-3 w-full justify-between">
        {sidePanelData.map((data, index) => {
          return (
            <div
              key={index}
              className="
                flex flex-col md:flex-row items-center gap-x-2 
                hover:bg-app-white-150 
                dark:hover:bg-app-darkBlue-200 
                p-2 md:rounded-sm cursor-pointer
              "
            >
              <data.Icon className="text-2xl text-app-gray-500 dark:text-app-gray-300" />

              <span className="hidden md:block dark:text-app-text-white-100">
                {data.text}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

