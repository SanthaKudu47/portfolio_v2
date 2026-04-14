import type { StateCreator } from "zustand";
import type { NavSlice, SystemSlice, WindowSlice } from "./sliceTypes";

export  const createWindowSlice: StateCreator<
  WindowSlice & NavSlice & SystemSlice,
  [],
  [],
  WindowSlice
> = (set, get) => {
  return {
    currentIndex: 1000,
    getCurrentIndex: () => {
      return get().currentIndex;
    },
  };
};
