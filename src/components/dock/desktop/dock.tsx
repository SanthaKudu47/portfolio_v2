import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "./dock.css";
import {
  BinIcon,
  BrowserIcon,
  ContactsIcon,
  FolderIcon,
  ImagesIcon,
  TerminalIcon,
} from "../icons";
import { clamp } from "@utils";
import { useAppStore } from "@store";
import DockIcon from "./dockIcon/dockIcon";

const dockItems = [
  { id: "finder", text: "Finder", icon: FolderIcon },
  { id: "browser", text: "Browser", icon: BrowserIcon },
  { id: "gallery", text: "Gallery", icon: ImagesIcon },
  { id: "contacts", text: "Contacts", icon: ContactsIcon },
  { id: "terminal", text: "Terminal", icon: TerminalIcon },
  { id: "bin", text: "Bin", icon: BinIcon },
];

export default function Dock() {
  const openWindowByName = useAppStore((state) => state.openWindow);
  const dockRef = useRef<HTMLDivElement | null>(null);
  gsap.registerPlugin(useGSAP);

  useGSAP(
    () => {
      const dock = !dockRef.current ? null : dockRef.current;
      if (!dock) return;
      function animateIcons(currentX: number) {
        if (!dockRef.current) return;
        const containerLeft = dockRef.current.getBoundingClientRect().left;
        const icons = dockRef.current.querySelectorAll(
          ".dock-icon-wrapper-bg",
        ) as NodeListOf<HTMLDivElement>;
        icons.forEach((icon) => {
          const divLeftX = icon.getBoundingClientRect().left;
          const divWidth = icon.getBoundingClientRect().width;
          const divCenterX = divLeftX + divWidth / 2;
          const v = Math.abs(currentX - (divCenterX - containerLeft));
          const effectArea = 60;
          const power = 1 - clamp(v / effectArea, 0, 1);

          gsap.to(icon, {
            scale: 1 + 0.5 * power,
            bottom: 15 * power,
            duration: 0.2,
            ease: "power1.out",
            overwrite: "auto",
          });
        });
      }

      function resetIconAnimations() {
        if (!dockRef.current) return;
        const icons = dockRef.current.querySelectorAll(
          ".dock-icon-wrapper-bg",
        ) as NodeListOf<HTMLDivElement>;
        icons.forEach((icon) => {
          gsap.to(icon, {
            scale: 1,
            bottom: 0,
            duration: 0.2,
            ease: "power1.in",
          });
        });
      }

      function handleMouseMove(event: MouseEvent) {
        if (!dockRef.current) return;
        const containerLeft = dockRef.current.getBoundingClientRect().left;
        const currentX = event.clientX - containerLeft;
        animateIcons(currentX);
      }

      function handleMouseLeave(event: MouseEvent) {
        resetIconAnimations();
      }

      //event handler
      dock.addEventListener("mousemove", handleMouseMove);
      dock.addEventListener("mouseleave", handleMouseLeave);

      //clear
      return () => {
        dock.removeEventListener("mousemove", handleMouseMove);
        dock.removeEventListener("mouseleave", handleMouseLeave);
      };
    },
    { scope: dockRef },
  );

  return (
    <div className="dock-container animate-dockIn opacity-0">
      <div className="dock relative" ref={dockRef}>
       
        {dockItems.map((item) => (
          <DockIcon
            key={item.id}
            text={item.text}
            Icon={item.icon}
            onClick={() => openWindowByName(item.id)}
          />
        ))}
      </div>
    </div>
  );
}
