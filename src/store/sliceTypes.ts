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
  setDir: (tag: DirTagTypes) => void;
}

export interface AppNotification {
  id: string; // unique id
  title: string; // short title
  message: string; // main text
  type: "auto" | "interactive"; // controls queue behavior
  duration?: number; // only for auto-dismiss
  icon?: string; // info | warning | ai | etc.

  // optional rich content
  links?: Array<{ label: string; href: string }>;
  actions?: Array<{ label: string; action: string }>;
}

export interface NotificationSlice {
  queue: AppNotification[]; // all pending notifications
  current: AppNotification | null; // the one currently displayed
  isShowing: boolean; // UI uses this to animate in/out
  addToQueue: (notification: AppNotification) => void;
  removeCurrent: () => void;
  processQueue: () => void;
  clearQueue: () => void;
}

export interface UserSessionSlice {
  userType: "visitor" | "recruiter" | null;
  onboardingStep: number; // 0 = not started, 1 = welcome, 2 = mode selected
  onboardingCompleted: boolean; // true after mode selection
  aiAutoOpen: boolean; // open AI after recruiter mode?
  firstVisit: boolean; // show hints only once
  setUserType: (type: "visitor" | "recruiter" | null) => void;
  setOnBoardingStep: (step: number) => void;
  setOnboardingStatus: (state: boolean) => void;
  setAiAutoOpenStatus: (step: boolean) => void;
  setFirstVisitStatus: (step: boolean) => void;
}
