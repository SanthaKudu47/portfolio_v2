import type { StateCreator } from "zustand";
type ModeType = "LIGHT" | "DARK";
export interface SystemSlice {
  mode: ModeType;
  toggleTheme: () => void;
  setMode: (mode: ModeType) => void;
}
export const createSystemSlice: StateCreator<
  SystemSlice,
  [],
  [],
  SystemSlice
> = (set) => {
  return {
    mode: "LIGHT",
    toggleTheme: () =>
      set((state) => ({ mode: state.mode === "LIGHT" ? "DARK" : "LIGHT" })),
    setMode: (mode) => set(() => ({ mode: mode })),
  };
};
