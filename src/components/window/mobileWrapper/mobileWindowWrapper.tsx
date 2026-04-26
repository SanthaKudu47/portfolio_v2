import React, { type JSX } from "react";
import { IoMdArrowBack } from "react-icons/io";
interface WrapperProps {
  title: string;
  Icon: () => JSX.Element;
}
export default function withMobileWindowWrapper<P extends object>(
  Component: React.ComponentType<P>,
) {
  return function ({ title, Icon, ...props }: WrapperProps & P) {
    return (
      <div className="relative flex flex-col w-full bg-app-white-150">
        <div className="flex flex-col  w-full relative mt-10 ">
          <div className="flex flex-row items-center justify-start gap-x-2 py-4">
            <span className="px-5 text-xl">
              <IoMdArrowBack />
            </span>
            <span>
              <Icon />
            </span>
            <span>{title}</span>
          </div>
          <div className="flex flex-row font-inter font-bold"></div>
        </div>

        <Component {...(props as unknown as P)} />
      </div>
    );
  };
}
