import { formatTimeToMobileView } from "@utils";
import { IoSettingsSharp } from "react-icons/io5";
import { FaWifi } from "react-icons/fa";
import { MdBatteryCharging80 } from "react-icons/md";
import "../navbar.css";
import { useAppStore } from "@store";
export default function NavBarMobile() {
  const toggleMenu = useAppStore((state) => state.toggleIsOpen);
  return (
    <nav className="navbar z-10">
      <div className="navbar-brand">
        <img src="/images/os_logo.svg" className="navbar-logo" />
        <p className="navbar-title">Lumina OS</p>
      </div>
      <div className="navbar-status">
        <button onClick={toggleMenu}>
          <IoSettingsSharp className="status-icon"/>
        </button>
        <FaWifi className="status-icon" />
        <MdBatteryCharging80 className="status-icon" />
        <p className="shrink-0 navbar-datetime">{formatTimeToMobileView()}</p>
      </div>
    </nav>
  );
}
