import { create } from "zustand";
import { createNavSlice } from "./navSlice";
import { createSystemSlice } from "./systemSlice";
import type {
  DirSlice,
  NavSlice,
  SystemSlice,
  WindowSlice,
} from "./sliceTypes";
import { createWindowSlice } from "./windowSlice";
import { createDirSlice } from "./dirSlice";

export const useAppStore = create<
  NavSlice & SystemSlice & WindowSlice & DirSlice
>()((...a) => {
  return {
    ...createNavSlice(...a),
    ...createSystemSlice(...a),
    ...createWindowSlice(...a),
    ...createDirSlice(...a),
  };
});
