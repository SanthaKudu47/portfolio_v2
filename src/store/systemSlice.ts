import type { StateCreator } from "zustand";
import type { NavSlice, SystemSlice } from "./sliceTypes";


export const createSystemSlice: StateCreator<
  SystemSlice & NavSlice ,
  [],
  [],
  SystemSlice
> = (set) => {
  return {
    mode: "LIGHT",
    tooltipRef: null,
    toggleTheme: () =>
      set((state) => ({ mode: state.mode === "LIGHT" ? "DARK" : "LIGHT" })),
    setMode: (mode) => set(() => ({ mode: mode })),
    setContainer: (ref) => set(() => ({ tooltipRef: ref })),
  };
};
