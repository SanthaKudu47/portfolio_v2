import {
  useEffect,
  useRef,
  useState,
  type FunctionComponent,
  type ReactNode,
} from "react";
import "./window-wrapper.css";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/all";
import { LiaWindowCloseSolid } from "react-icons/lia";
import { LiaWindowMaximizeSolid } from "react-icons/lia";
import { IoMdSearch } from "react-icons/io";
import { WiDayCloudy } from "react-icons/wi";
import gsap from "gsap";

export default function WindowWrapper({ title }: { title: string }) {
  const [lastPos, setPos] = useState<string>("translate3d(0px, 0px, 0px)");
  const [isClosed, setClose] = useState<boolean>(false);
  const [isMaximized, setMaximize] = useState<boolean>(false);
  const windowRef = useRef<HTMLDivElement | null>(null);
  const draggableRef = useRef<globalThis.Draggable | null>(null);
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
    const win = windowRef.current;
    if (!win) return;
    setClose(true);
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
    <div
      className={`window-container ${isClosed ? "hidden" : "block"}  w-3/4 h-4/6 `}
      ref={windowRef}
    >
      <div className="window-container-top-bar">
        <div className="cursor-pointer h-full w-7 flex justify-center items-center">
          <IoMdSearch />
        </div>
        <span>{title}</span>
        <div className="flex flex-row gap-x-1 items-center">
          <div className="cursor-pointer h-full w-7 flex justify-center items-center bg-amber-400 z-50">
            <LiaWindowMaximizeSolid
              className="text-lg"
              onClick={handleWindowMaximize}
            />
          </div>

          <div className="cursor-pointer  h-full w-7 flex justify-center items-center ">
            <LiaWindowCloseSolid
              className="text-lg"
              onClick={handleWindowClose}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-x-1">
        <div className="col-span-1 "></div>
        <div className="col-span-4">{/* <Component /> */}</div>
      </div>
    </div>
  );
}
