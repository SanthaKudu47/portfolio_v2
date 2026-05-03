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
    <div className="dock-mobile-container">
      <div className="dock-mobile">
        {dockMobileItems.map((item) => (
          <DockMobileIcon key={item.id} Icon={item.icon} id={item.id} />
        ))}
      </div>
    </div>
  );
}
