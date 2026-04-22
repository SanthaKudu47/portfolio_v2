import "./sidebar.css";
import SidePanel from "./sidepanel";
import StorageInfo from "./storageInfo/storageInfo";

function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <span className="sidebar-title">Lumina OS</span>
        <span className="sidebar-subtitle">FILE SYSTEM</span>
      </div>
      <SidePanel />
      <div className="sidebar-bottom">
        <StorageInfo used={128} total={1024} />
      </div>
    </div>
  );
}

export default Sidebar;
