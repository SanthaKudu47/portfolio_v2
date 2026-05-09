import { useAppStore } from "@store";
import React, { type JSX } from "react";
import { IoMdArrowBack } from "react-icons/io";
interface WrapperProps {
  windowId:
    | "terminal"
    | "bin"
    | "finder"
    | "browser"
    | "gallery"
    | "contacts"
    | "imageViewer"
    | "pdfViewer";
  title: string;
  Icon: () => JSX.Element;
}
export default function withMobileWindowWrapper<P extends object>(
  Component: React.ComponentType<P>,
) {
  return function ({ title, Icon, windowId, ...props }: WrapperProps & P) {
    const closeWindow = useAppStore((state) => state.closeWindow);

    function handleWindowClose() {
      closeWindow(windowId);
    }
    return (
      <div className="relative flex flex-col w-full bg-app-white-200 dark:bg-app-darkBlue-300 z-10 h-full">
        <div className="flex flex-col  w-full relative py-3 dark:bg-app-darkBlue-300 border-solid border-b border-b-app-gray-60 dark:border-b-app-darkBlue-100 ">
          <div className="flex flex-row items-center justify-start gap-x-2 font-inter font-bold dark:text-app-gray-400">
            <span className="px-5 text-xl cursor-pointer flex">
              <button onClick={handleWindowClose}>
                <IoMdArrowBack />
              </button>
            </span>
            <span>
              <Icon />
            </span>
            <span>{title}</span>
          </div>
        </div>

        <Component {...(props as unknown as P)} />
      </div>
    );
  };
}
