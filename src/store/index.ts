import { create } from "zustand";
import { createNavSlice } from "./navSlice";
import { createSystemSlice } from "./systemSlice";
import type { NavSlice, SystemSlice, WindowSlice } from "./sliceTypes";
import { createWindowSlice } from "./windowSlice";

export const useAppStore = create<NavSlice & SystemSlice & WindowSlice>()((
  ...a
) => {
  return {
    ...createNavSlice(...a),
    ...createSystemSlice(...a),
    ...createWindowSlice(...a),
  };
});
