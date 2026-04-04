import { useAppStore } from "@store";
import { useEffect, useRef } from "react";
import './tooltip.css'

export default function Tooltip() {
  const toolTipContainer = useRef<HTMLDivElement | null>(null);
  const setContainer = useAppStore((state) => state.setContainer);
  useEffect(() => {
    if (toolTipContainer.current) {
      setContainer(toolTipContainer);
    }
  }, []);
  return (
    <div
      className="tooltip"
      ref={toolTipContainer}
    />
  );
}
