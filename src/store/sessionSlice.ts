import type { StateCreator } from "zustand";
import type {
  DirSlice,
  NavSlice,
  SystemSlice,
  UserSessionSlice,
  WindowSlice,
} from "./sliceTypes";

export const createSessionSlice: StateCreator<
  NavSlice & SystemSlice & WindowSlice & DirSlice & UserSessionSlice,
  [],
  [],
  UserSessionSlice
> = (set, get) => {
  return {
    userType: null,
    onboardingCompleted: false,
    onboardingStep: 0,
    aiAutoOpen: false,
    firstVisit: true,
    setUserType: (type: "visitor" | "recruiter" | null) =>
      set(function (state) {
        return { ...state, userType: type };
      }),
    setOnBoardingStep: (step: number) =>
      set(function (state) {
        return { ...state, onboardingStep: step };
      }),
    setOnboardingStatus: (status: boolean) =>
      set(function (state) {
        return { ...state, onboardingCompleted: status };
      }),
    setAiAutoOpenStatus: (status: boolean) =>
      set(function (state) {
        return { ...state, aiAutoOpen: status };
      }),
    setFirstVisitStatus: (status: boolean) =>
      set(function (state) {
        return { ...state, firstVisit: status };
      }),
  };
};
