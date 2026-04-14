import type { RefObject } from "react";

type ModeType = "LIGHT" | "DARK";

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
  currentIndex: number;
  getCurrentIndex: () => number;
}
