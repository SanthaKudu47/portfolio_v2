import BatteryChargeIcon from "@components/icons/battery_charge";
import WifiIcon from "@components/icons/wifi";
import { MdOutlineClose } from "react-icons/md";
import { useAppStore } from "@store";
import "./navbarMenu.css";
import ColorModeCardButton from "./cardButton/modeCardButton";
import { useUpdateTheme } from "@hooks/theme";

export default function NavbarMenu() {
  const isOpened = useAppStore((state) => state.isOpen);
  const togglePanel = useAppStore((state) => state.toggleIsOpen);
  useUpdateTheme();

  function handlePopup() {
    togglePanel();
  }

  return (
    <>
      {isOpened ? (
        <div className="backdrop">
          <div className="popupPanel">
            <div className="popupPanel-header">
              <p className="popupPanel-header-title">System Control</p>
              <MdOutlineClose
                onClick={handlePopup}
                className="popupPanel-header-close-button"
              />
            </div>

            <div className="popupPanel-body">
              <div className="popupPanel-section">
                <p className="popupPanel-section-title">STATUS</p>
                <div className="popupPanel-status-row">
                  <div className="popupPanel-status-card">
                    <div>
                      <WifiIcon width="25" height="20" />
                    </div>
                    <div className="popupPanel-status-text">
                      <div className="popupPanel-status-label">NETWORK</div>
                      <div className="popupPanel-status-value">Lumina_5G</div>
                    </div>
                  </div>

                  <div className="popupPanel-status-card">
                    <div>
                      <BatteryChargeIcon width="22" height="25" />
                    </div>
                    <div className="popupPanel-status-text">
                      <div className="popupPanel-status-label">BATTERY</div>
                      <div className="popupPanel-status-value">85%</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="popupPanel-section">
                <p className="popupPanel-section-title">APPEARANCE</p>
                <div className="popupPanel-status-row">
                  <ColorModeCardButton text="Light" colorMode="LIGHT" />
                  <ColorModeCardButton text="Dark" colorMode="DARK" />
                </div>
              </div>
            </div>

            <div className="popupPanel-footer">
              <p className="popupPanel-footer-text">
                STYLE SETTINGS MIRROR LUMINA DESKTOP CONFIG
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
