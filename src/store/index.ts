import { create } from "zustand";
import { createNavSlice, type NavSlice } from "./navSlice";
import { createSystemSlice, type SystemSlice } from "./systemSlice";

export const useAppStore = create<NavSlice & SystemSlice>()((...a) => {
  return { ...createNavSlice(...a), ...createSystemSlice(...a) };
});
