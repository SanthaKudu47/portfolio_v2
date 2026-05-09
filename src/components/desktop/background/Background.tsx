import { useEffect, useRef } from "react";
import BgPattern from "../pattern";
import "./background.css";

export default function Background() {
  const bgContainer = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!bgContainer) return;
    if (!bgContainer.current) return;

    const element = bgContainer.current;

    function handleMouseMove(e: MouseEvent) {
      const root = document.getElementById("root") as HTMLDivElement;
      const rect = element.getBoundingClientRect();
      // Calculate position relative to container
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      root.style.setProperty("--mouse-x", `${x}px`);
      root.style.setProperty("--mouse-y", `${y}px`);
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <>
      
      <div className="absolute inset-0" ref={bgContainer}>
        <BgPattern fill="#ACAAB5" opacity={0.2} id="dotGrid1" />
        <BgPattern
          fill="#5EB4FF"
          opacity={1}
          id="dotGrid2"
          cls="mask-dynamic"
        />
      </div>
    </>
  );
}
