import { navLinks } from "@constants";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { formatDateTimeToDesktopView } from "@utils";
import "../navbar.css";
import { useAppStore } from "@store";
import TooltipWrapper from "@components/tooltip/wrapper";

export default function NavbarDesktop() {
  const mode = useAppStore((state) => state.mode);
  const toggleTheme = useAppStore((state) => state.toggleTheme);

  function switchTheme() {
    toggleTheme();
  }

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
      <div className="navbar-status text-app-gray-300">
        <TooltipWrapper anchor="BOTTOM" text="network">
          <img src="/wifi_icon.svg" alt="wifi_icon" className="status-icon" />
        </TooltipWrapper>

        <img src="/battery_icon.svg" alt="wifi_icon" className="status-icon" />
        <>
          <TooltipWrapper anchor="BOTTOM" text="theme">
            <button className="cursor-pointer" onClick={switchTheme}>
              {mode === "DARK" ? (
                <MdDarkMode className="text-app-gray-100" />
              ) : (
                <MdLightMode className="text-app-gray-100" />
              )}
            </button>
          </TooltipWrapper>
        </>

        <p>|</p>
        <TooltipWrapper anchor="BOTTOM" text="date time">
          <p className="shrink-0 navbar-datetime">
            {formatDateTimeToDesktopView()}
          </p>
        </TooltipWrapper>
      </div>
    </nav>
  );
}
