import { useEffect, useRef } from "react";
import BgPattern from "../pattern";
import "./background.css";
import { useAppStore } from "@store";

export default function Background({
  setImgStatus,
}: {
  setImgStatus: (val: boolean) => void;
}) {
  const mode = useAppStore((state) => state.mode);
  const bgContainer = useRef<HTMLDivElement | null>(null);
  const lightRef = useRef<HTMLImageElement>(null);
  const darkRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!bgContainer) return;
    if (!bgContainer.current) return;
    if (!lightRef || !darkRef) return;

    const light = lightRef.current;
    const dark = darkRef.current;

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

    Promise.all([light?.decode?.(), dark?.decode?.()]).then(() => {
      setImgStatus(true);
    });

    //clearing
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <>
      <div className="absolute inset-0" ref={bgContainer}>
        <BgPattern
          fill={mode === "DARK" ? "black" : "#ACAAB5"}
          opacity={0.2}
          id="dotGrid1"
        />
        <BgPattern
          fill={mode === "DARK" ? "black" : "white"}
          opacity={1}
          id="dotGrid2"
          cls="mask-dynamic"
        />

        <img
          ref={lightRef}
          src="/images/light.jpg"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            mode === "LIGHT" ? "opacity-100" : "opacity-0"
          }`}
        />

        <img
          ref={darkRef}
          src="/images/dark.jpg"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            mode === "DARK" ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </>
  );
}
