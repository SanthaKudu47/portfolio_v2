import { useAppStore } from "@store";
import { useEffect, useState } from "react";

type ModeType = "LIGHT" | "DARK";

const MODE: { light: "LIGHT"; dark: "DARK" } = {
  light: "LIGHT",
  dark: "DARK",
};
function getModeFromLocalStorage(): ModeType {
  let mode: ModeType = MODE.light;
  try {
    const storedMode = localStorage.getItem("mode");
    if (storedMode) mode = storedMode as ModeType;
  } catch (error) {
    console.log("Failed to get from localStorage.Set to default");
  }
  return mode;
}

function setModeOnLocalStorage(value: string) {
  try {
    localStorage.setItem("mode", value);
  } catch (error) {
    console.log("Failed to set theme info.");
  }
}

export function useInitTheme() {
  const setMode = useAppStore((state) => state.setMode);
  //this effect runs one time and update zustand
  useEffect(() => {
    const storedMode = getModeFromLocalStorage();
    setMode(storedMode);
  }, []);
}

//update root element if mode changes
export function useUpdateTheme() {
  const mode = useAppStore((state) => state.mode);

  useEffect(() => {
    const root = document.getElementById("html");
    if (!root) return;
    if (mode === MODE.dark) {
      if (!root.classList.contains("dark")) root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    setModeOnLocalStorage(mode);
  }, [mode]);
}
