import type { StateCreator } from "zustand";
import type { NavSlice, SystemSlice } from "./sliceTypes";

export const createNavSlice: StateCreator<NavSlice & SystemSlice, [], [], NavSlice> = (
  set,
) => {
  return {
    isOpen: false,
    toggleIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
  };
};
