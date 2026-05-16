import type { StateCreator } from "zustand";
import type {
  DirSlice,
  NavSlice,
  NotificationSlice,
  SystemSlice,
  UserSessionSlice,
  WindowSlice,
} from "./sliceTypes";

export const createNotificationSlice: StateCreator<
  NavSlice &
    SystemSlice &
    WindowSlice &
    DirSlice &
    UserSessionSlice &
    NotificationSlice,
  [],
  [],
  NotificationSlice
> = (set, get) => {
  return {
    queue: [],
    current: null,
    isShowing: false,
    addToQueue: (notification) => {
      return set((state) => {
        return { ...state, queue: [...state.queue, notification] };
      });
    },
    processQueue: () =>
      set(function (state) {
        if (state.current) return state;
        if (state.queue.length === 0) return state;
        const currentQ = [...state.queue];
        const first = currentQ.shift();
        return { ...state, queue:currentQ, current: first, isShowing: true };
      }),
    clearQueue: () =>
      set(function (state) {
        return { ...state, queue: [] };
      }),
    removeCurrent: () =>
      set(function (state) {
        return { ...state, current: null, isShowing: false };
      }),
  };
};
