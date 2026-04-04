import { useRef, type MouseEvent, type ReactNode } from "react";
import { useAppStore } from "@store";

interface ToolTipProps {
  text: string;
  anchor: "TOP" | "BOTTOM" | "LEFT" | "RIGHT";
  children?: ReactNode;
}
export default function TooltipWrapper({
  text,
  anchor,
  children,
}: ToolTipProps) {
  const wrapperElement = useRef<HTMLSpanElement | null>(null);
  const toolTipRef = useAppStore((state) => state.tooltipRef);

  function handleMouseEnter(
    event: MouseEvent<HTMLSpanElement, globalThis.MouseEvent>,
  ) {
    if (!wrapperElement.current) return;
    if (!toolTipRef || toolTipRef.current === null) return;

    const targetElement = wrapperElement.current;
    const toolTip = toolTipRef.current as HTMLDivElement;

    //assign text
    toolTip.innerText = text;
    toolTip.style.display = "block";

    //force
    toolTip.getBoundingClientRect();

    const rect = targetElement.getBoundingClientRect();
    const toolTipRect = toolTip.getBoundingClientRect();

    const targetRight = rect.right;
    const targetTop = rect.top;
    const targetLeft = rect.left;
    const targetBottom = rect.bottom;

    const targetCenterY = rect.height / 2;
    const targetCenterX = rect.width / 2;

    const toolTipCenterY = toolTipRect.height / 2;
    const toolTipCenterX = toolTipRect.width / 2;

    const toolTipWidth = toolTipRect.width;
    const toolTipHeight = toolTipRect.height;

    if (anchor === "RIGHT") {
      toolTip.style.left = `${targetRight}px`;
      toolTip.style.top = `${targetTop + (targetCenterY - toolTipCenterY)}px`;
    }

    if (anchor === "LEFT") {
      toolTip.style.left = `${targetLeft - toolTipWidth}px`;
      toolTip.style.top = `${targetTop + (targetCenterY - toolTipCenterY)}px`;
    }

    if (anchor === "TOP") {
      toolTip.style.left = `${targetLeft + targetCenterX - toolTipCenterX}px`;
      toolTip.style.top = `${targetTop - toolTipHeight}px`;
    }

    if (anchor === "BOTTOM") {
      toolTip.style.left = `${targetLeft + targetCenterX - toolTipCenterX}px`;
      toolTip.style.top = `${targetBottom}px`;
    }
  }

  function handleMouseLeave(
    event: MouseEvent<HTMLSpanElement, globalThis.MouseEvent>,
  ) {
    if (!wrapperElement.current) return;
    if (!toolTipRef || toolTipRef.current === null) return;

    const toolTip = toolTipRef.current as HTMLDivElement;
    toolTip.style.display = "none";
  }

  return (
    <span
    className="cursor-pointer"
      ref={wrapperElement}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </span>
  );
}
