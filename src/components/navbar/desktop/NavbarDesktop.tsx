import { navLinks } from "@constants";
import { formatDateTimeToDesktopView } from "@utils";
import "../navbar.css";
import { useInitTheme } from "@hooks/theme";

export default function NavbarDesktop() {
  useInitTheme();
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="/images/os_logo.svg" className="navbar-logo" />
        <p className="navbar-title">Lumina OS</p>
        <ul className="navbar-links">
          {navLinks.map((linkData) => (
            <li className="float-left mx-2" key={linkData.id}>
              {linkData.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-status">
        <img src="/wifi_icon.svg" alt="wifi_icon" className="status-icon" />
        <img src="/battery_icon.svg" alt="wifi_icon" className="status-icon" />
        <img
          src="/color_mode_icon.svg"
          alt="color_mode"
          className="status-icon"
        />
        <p>|</p>
        <p className="shrink-0 navbar-datetime">
          {formatDateTimeToDesktopView()}
        </p>
      </div>
    </nav>
  );
}
