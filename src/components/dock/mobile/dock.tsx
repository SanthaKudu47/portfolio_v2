import "./dock.css";
import {
  BinIcon,
  BrowserIcon,
  ContactsIcon,
  FolderIcon,
  IconMouseHandlerWrapper,
  ImagesIcon,
  TerminalIcon,
} from "../icons";

export default function DockMobile() {
  return (
    <div className="dock-mobile-container">
      <div className="dock-mobile">
        <div className="dock-mobile-icon-wrapper">
          <div className="dock-mobile-icon-wrapper-bg">
            <IconMouseHandlerWrapper
              Icon={FolderIcon}
              width="100%"
              height="100%"
            />
          </div>
        </div>
        <div className="dock-mobile-icon-wrapper">
          <div className="dock-mobile-icon-wrapper-bg">
            <IconMouseHandlerWrapper
              Icon={BrowserIcon}
              width="100%"
              height="100%"
            />
          </div>
        </div>
        <div className="dock-mobile-icon-wrapper">
          <div className="dock-mobile-icon-wrapper-bg">
            <IconMouseHandlerWrapper
              Icon={ImagesIcon}
              width="100%"
              height="100%"
            />
          </div>
        </div>
        <div className="dock-mobile-icon-wrapper">
          <div className="dock-mobile-icon-wrapper-bg">
            <IconMouseHandlerWrapper
              Icon={ContactsIcon}
              width="100%"
              height="100%"
            />
          </div>
        </div>
        <div className="dock-mobile-icon-wrapper">
          <div className="dock-mobile-icon-wrapper-bg">
            <IconMouseHandlerWrapper
              Icon={TerminalIcon}
              width="100%"
              height="100%"
            />
          </div>
        </div>
        <div className="dock-mobile-icon-wrapper">
          <div className="dock-mobile-icon-wrapper-bg">
            <IconMouseHandlerWrapper
              Icon={BinIcon}
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
