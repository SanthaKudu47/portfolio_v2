import type { StateCreator } from "zustand";
import type {
  DirSlice,
  NavSlice,
  SystemSlice,
  WindowSlice,
} from "./sliceTypes";
import { dirData } from "@components/finder/dirData";

export const createDirSlice: StateCreator<
  NavSlice & SystemSlice & WindowSlice & DirSlice,
  [],
  [],
  DirSlice
> = (set, get) => {
  return {
    activeDir: dirData.home,
    setDir: (tag) => {
      return set((state) => {
        return { ...state, activeDir: dirData[tag] };
      });
    },
  };
};
