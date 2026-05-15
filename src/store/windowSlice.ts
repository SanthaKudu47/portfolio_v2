import type { StateCreator } from "zustand";
import {
  InitialWindowsState,
  type NavSlice,
  type SystemSlice,
  type WindowSlice,
} from "./sliceTypes";

const zIndex = 20;

export const createWindowSlice: StateCreator<
  WindowSlice & NavSlice & SystemSlice,
  [],
  [],
  WindowSlice
> = (set, get) => {
  return {
    windows: InitialWindowsState,
    currentIndex: zIndex,
    
    getCurrentIndex: () => {
      return get().currentIndex;
    },
    getWindowByName: (name) => {
      return get().windows[name];
    },

    getIndexByName: (name) => {
      return get().windows[name].index;
    },

    updateIndex: (index) => set((state) => ({ ...state, currentIndex: index })),

    updateVisibility: (name) =>
      set((state) => ({
        ...state,
        windows: {
          ...state.windows,
          [name]: {
            ...state.windows[name],
            isOpened: !state.windows[name].isOpened,
            index: !state.windows[name].isOpened
              ? state.currentIndex + 1
              : zIndex,
          },
        },
      })),

    closeWindow: (name) =>
      set((state) => ({
        ...state,
        windows: {
          ...state.windows,
          [name]: {
            ...state.windows[name],
            isOpened: false,
            index: zIndex,
          },
        },
      })),

    openWindow: (name) =>
      set((state) => ({
        ...state,
        windows: {
          ...state.windows,

          [name]: {
            ...state.windows[name],
            isOpened: true,
            index: state.currentIndex + 1,
          },
        },
        currentIndex: state.currentIndex + 1,
      })),

    setFilePath: (url) => set((state) => ({ ...state, filePath: url })),
    setPdfFilePath: (url) => set((state) => ({ ...state, pdfPath: url })),
  };
};
