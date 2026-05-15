import type { DirTagTypes } from "../types";
import "./sidebar.css";
import SidePanel from "./sidepanel/sidepanel";
import StorageInfo from "./storageInfo/storageInfo";

function Sidebar({
  setActiveDir,activeDirTag
}: {
  setActiveDir: (param: DirTagTypes) => void;
  activeDirTag:DirTagTypes
}) {
  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <span className="sidebar-title">Lumina OS</span>
        <span className="sidebar-subtitle">FILE SYSTEM</span>
      </div>
      <div className="row-span-8">
        <SidePanel setActiveDir={setActiveDir} activeDirTag={activeDirTag} />
      </div>

      <div className="row-span-2">
        <StorageInfo used={128} total={1024} />
      </div>
    </div>
  );
}

export default Sidebar;
