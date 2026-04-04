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
    <div className="dock-container">
      <div className="dock">
        <div className="dock-icon-wrapper">
          <div className="dock-icon-wrapper-bg">
            <IconMouseHandlerWrapper
              Icon={FolderIcon}
              width="100%"
              height="100%"
            />
          </div>
        </div>
        <div className="dock-icon-wrapper">
          <div className="dock-icon-wrapper-bg">
            <IconMouseHandlerWrapper
              Icon={BrowserIcon}
              width="100%"
              height="100%"
            />
          </div>
        </div>
        <div className="dock-icon-wrapper">
          <div className="dock-icon-wrapper-bg">
            <IconMouseHandlerWrapper
              Icon={ImagesIcon}
              width="100%"
              height="100%"
            />
          </div>
        </div>
        <div className="dock-icon-wrapper">
          <div className="dock-icon-wrapper-bg">
            <IconMouseHandlerWrapper
              Icon={ContactsIcon}
              width="100%"
              height="100%"
            />
          </div>
        </div>
        <div className="dock-icon-wrapper">
          <div className="dock-icon-wrapper-bg">
            <IconMouseHandlerWrapper
              Icon={TerminalIcon}
              width="100%"
              height="100%"
            />
          </div>
        </div>
        <div className="dock-icon-wrapper">
          <div className="dock-icon-wrapper-bg">
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
