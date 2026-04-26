import type { RefObject } from "react";

type ModeType = "LIGHT" | "DARK";

type WindowsType = { [key: string]: { isOpened: boolean; index: number } };
export const InitialWindowsState: WindowsType = {
  terminal: { isOpened: false, index: 300 },
  finder: { isOpened: false, index: 300 },
  browser: { isOpened: false, index: 300 },
  gallery: { isOpened: false, index: 300 },
  contacts: { isOpened: false, index: 300 },
  bin: { isOpened: false, index: 300 },
  imageViewer: { isOpened: false, index: 300 },
};

export interface SystemSlice {
  mode: ModeType;
  tooltipRef: RefObject<HTMLDivElement | null> | null;
  toggleTheme: () => void;
  setMode: (mode: ModeType) => void;
  setContainer: (ref: RefObject<HTMLDivElement | null>) => void;
}

export interface NavSlice {
  isOpen: boolean;
  toggleIsOpen: () => void;
}

export interface WindowSlice {
  windows: WindowsType;
  currentIndex: number;
  getCurrentIndex: () => number;
  getWindowByName: (name: string) => { isOpened: boolean; index: number };
  updateVisibility: (name: string) => void;
  closeWindow: (name: string) => void;
  openWindow: (name: string) => void;
}
