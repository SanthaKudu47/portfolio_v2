import React, {
  useRef,
  useState,
  type FunctionComponent,
  type JSX,
} from "react";
import "./window-wrapper.css";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/all";
import { LiaWindowCloseSolid } from "react-icons/lia";
import { LiaWindowMaximizeSolid } from "react-icons/lia";
import { IoMdSearch } from "react-icons/io";
import gsap from "gsap";
import TooltipWrapper from "@components/tooltip/wrapper";
import { useAppStore } from "@store";

interface WrapperProps {
  windowId: "terminal" | "bin" | "finder" | "browser" | "gallery" | "contacts";
  title: string;
  Icon: () => JSX.Element;
}

export default function withWindowWrapper<P extends object>(
  Component: React.ComponentType<P>,
) {
  return function ComponentWithWindow({
    windowId,
    title,
    Icon,
    ...props
  }: WrapperProps & P) {
    const [isMaximized, setMaximize] = useState<boolean>(false);
    const windowRef = useRef<HTMLDivElement | null>(null);
    const draggableRef = useRef<globalThis.Draggable | null>(null);
    const closeWindow = useAppStore((state) => state.closeWindow);
    useGSAP(() => {
      const element = windowRef.current;
      if (!element) return;
      const elements = Draggable.create(element, {
        inertia: false,
        onDragEnd: () => {
          console.log(elements);
        },
      });
      draggableRef.current = elements[0];
    }, []);

    function handleWindowClose() {
      closeWindow(windowId);
    }

    function handleWindowMaximize(e: React.MouseEvent<SVGElement, MouseEvent>) {
      const win = windowRef.current;
      if (!win) return;
      if (!isMaximized) {
        gsap.set(win, { x: 0, y: 0, width: "100%", height: "100%" });
      } else {
        gsap.set(win, { x: 0, y: 0, width: "75%", height: "66.666667%" });
      }
      requestAnimationFrame(() => {
        if (draggableRef.current) {
          draggableRef.current.update(true);
        }
      });
      setMaximize(!isMaximized);
    }

    return (
      <div className={`window-container`} ref={windowRef}>
        <div className="window-container-top-bar">
          <div className="top-bar-search-icon">
            <IoMdSearch />
          </div>
          <div className="top-bar-title">
            {Icon ? <Icon /> : null}  <span>{title}</span>
          </div>

          <div className="top-bar-controllers">
            <div className="top-bar-controllers-block">
              <TooltipWrapper text="Maximize" anchor="TOP">
                <LiaWindowMaximizeSolid
                  className="text-lg"
                  onClick={handleWindowMaximize}
                />
              </TooltipWrapper>
            </div>

            <div className="top-bar-controllers-block">
              <TooltipWrapper text="Close" anchor="TOP">
                <LiaWindowCloseSolid
                  className="text-lg"
                  onClick={handleWindowClose}
                />
              </TooltipWrapper>
            </div>
          </div>
        </div>

        <div className="h-full w-full relative">
          <Component {...(props as unknown as P)} />
        </div>
      </div>
    );
  };
}
