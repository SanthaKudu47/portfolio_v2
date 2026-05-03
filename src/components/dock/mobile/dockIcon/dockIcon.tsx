import { IconMouseHandlerWrapper } from "@components/dock/icons";
import { useAppStore } from "@store";

export default function DockMobileIcon({ Icon,id }: { Icon: React.ComponentType<any>;id:string; }) {
     const openWindowByName = useAppStore((state) => state.openWindow);
  return (
    <div className="dock-mobile-icon-wrapper"  onClick={() => openWindowByName(id)}>
      <div className="dock-mobile-icon-wrapper-bg">
        <IconMouseHandlerWrapper Icon={Icon} width="100%" height="100%" />
      </div>
    </div>
  );
}
