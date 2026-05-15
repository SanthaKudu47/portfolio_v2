import type { DirTagTypes, FileInfoType } from "@components/finder/types";
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
  pdfViewer: { isOpened: false, index: 300 },
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
  filePath?: string;
  pdfPath?: string;
  getCurrentIndex: () => number;
  getWindowByName: (name: string) => { isOpened: boolean; index: number };
  getIndexByName: (name: string) => number;
  updateVisibility: (name: string) => void;
  closeWindow: (name: string) => void;
  openWindow: (name: string) => void;
  updateIndex: (index: number) => void;
  setFilePath: (url: string) => void;
  setPdfFilePath: (url: string) => void;
}


export interface DirSlice {
  activeDir: FileInfoType[];
  getCurrentDir: () => FileInfoType[];
  setDir: (tag: DirTagTypes) => void;
}
