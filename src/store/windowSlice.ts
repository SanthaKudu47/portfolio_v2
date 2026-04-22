import type { StateCreator } from "zustand";
import {
  InitialWindowsState,
  type NavSlice,
  type SystemSlice,
  type WindowSlice,
} from "./sliceTypes";

export const createWindowSlice: StateCreator<
  WindowSlice & NavSlice & SystemSlice,
  [],
  [],
  WindowSlice
> = (set, get) => {
  return {
    windows: InitialWindowsState,
    currentIndex: 1000,
    getCurrentIndex: () => {
      return get().currentIndex;
    },
    getWindowByName: (name) => {
      return get().windows[name];
    },

    updateVisibility: (name) =>
      set((state) => ({
        ...state,
        windows: {
          ...state.windows,
          [name]: {
            ...state.windows[name],
            isOpened: !state.windows[name].isOpened,
            index: 0,
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
            index: 0,
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
            index: 0,
          },
        },
      })),
  };
};
