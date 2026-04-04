import type { Ref, RefObject } from "react";
import type { StateCreator } from "zustand";
type ModeType = "LIGHT" | "DARK";
export interface SystemSlice {
  mode: ModeType;
  tooltipRef: RefObject<HTMLDivElement | null> | null;
  toggleTheme: () => void;
  setMode: (mode: ModeType) => void;
  setContainer: (ref: RefObject<HTMLDivElement | null>) => void;
}
export const createSystemSlice: StateCreator<
  SystemSlice,
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
