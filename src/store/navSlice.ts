import type { StateCreator } from "zustand";

export interface NavSlice {
  isOpen: boolean;
  toggleIsOpen: () => void;
}
export const createNavSlice: StateCreator<NavSlice, [], [], NavSlice> = (
  set,
) => {
  return {
    isOpen: false,
    toggleIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
  };
};
