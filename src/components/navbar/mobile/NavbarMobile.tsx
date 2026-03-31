import { formatTimeToMobileView } from "@utils";
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
          <img src="/system_icon.svg" alt="system" className="status-icon" />
        </button>
        <img src="/wifi_icon.svg" alt="network_icon" className="status-icon" />
        <img src="/battery_icon.svg" alt="wifi_icon" className="status-icon" />
        <p className="shrink-0 navbar-datetime">{formatTimeToMobileView()}</p>
      </div>
    </nav>
  );
}
