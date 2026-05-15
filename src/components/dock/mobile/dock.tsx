import "./dock.css";
import {
  BrowserIcon,
  ContactsIcon,
  FolderIcon,
  ImagesIcon,
  TerminalIcon,
} from "../icons";

import DockMobileIcon from "./dockIcon/dockIcon";

const dockMobileItems = [
  { id: "finder", icon: FolderIcon },
  { id: "browser", icon: BrowserIcon },
  { id: "gallery", icon: ImagesIcon },
  { id: "contacts", icon: ContactsIcon },
  { id: "terminal", icon: TerminalIcon },
];

export default function DockMobile() {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-1">
      <div className=" bg-white/10 flex flex-row justify-evenly rounded-2xl  backdrop-opacity-10 backdrop-blur-3xl py-2">
      {dockMobileItems.map((item) => (
        <DockMobileIcon key={item.id} Icon={item.icon} id={item.id} />
      ))}
    </div>
    </div>
    
  );
}

// export default function DockMobile() {
//   return (
//     <div className="w-full absolute flex flex-row justify-evenly bottom-0 py-3 bg-app-white-150/10 dark:bg-app-darkBlue-500/30  backdrop-opacity-10">
//       {dockMobileItems.map((item) => (
//         <div
//           className="backdrop-blur-3xl backdrop-opacity-10 bg-app-darkBlue-300 dark:bg-app-white-300 w-14 h-14 rounded-sm flex flex-row justify-center items-center p-2"
//           key={`mobile-app-icon-${item.id}`}
//         >
//           <item.icon />
//         </div>
//       ))}
//     </div>
//   );
// }
