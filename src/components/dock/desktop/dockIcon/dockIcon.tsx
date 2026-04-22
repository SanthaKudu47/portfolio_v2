import { IconMouseHandlerWrapper } from "@components/dock/icons";
import TooltipWrapper from "@components/tooltip/wrapper";
import type { MouseEvent } from "react";

export default function DockIcon({
  text,
  Icon,
  onClick,
}: {
  text: string;
  Icon: React.ComponentType<{
    height?: string;
    width?: string;
    fill?: string;
    mouseEnter: (e: MouseEvent<SVGSVGElement>) => void;
    mouseLeave: (e: MouseEvent<SVGSVGElement>) => void;
  }>;
  onClick?: () => void;
}) {
  return (
    <div className="dock-icon-wrapper">
      <div className="dock-icon-wrapper-bg">
        <button className="p-0 m-0" onClick={onClick}>
          <TooltipWrapper anchor="TOP" text={text}>
            <IconMouseHandlerWrapper Icon={Icon} width="100%" height="100%" />
          </TooltipWrapper>
        </button>
      </div>
    </div>
  );
}
