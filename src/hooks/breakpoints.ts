import { useState, useEffect } from "react";

// Tailwind's official breakpoints (px)
const breakpoints = {
  xs: 0, // custom
  sm: 640, // 40rem
  md: 768, // 48rem
  lg: 1024, // 64rem
  xl: 1280, // 80rem
  "2xl": 1536, // 96rem
};

const getBreakpoint = (width: number) => {
  if (width >= breakpoints["2xl"]) return "2xl";
  if (width >= breakpoints.xl) return "xl";
  if (width >= breakpoints.lg) return "lg";
  if (width >= breakpoints.md) return "md";
  if (width >= breakpoints.sm) return "sm";
  return "xs";
};

export function useBreakpoint() {
  const [bp, setBp] = useState(() => {
    if (typeof window === "undefined") return "xs";
    return getBreakpoint(window.innerWidth);
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    let frame: number;

    const handleResize = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setBp(getBreakpoint(window.innerWidth));
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(frame);
    };
  }, []);

  return {
    breakpoint: bp,
    isXs: bp === "xs",
    isSm: bp === "sm",
    isMd: bp === "md",
    isLg: bp === "lg",
    isXl: bp === "xl",
    is2xl: bp === "2xl",
    isMobile: bp === "xs" || bp === "sm",
    isTablet: bp === "md",
    isDesktop: bp === "lg" || bp === "xl" || bp === "2xl",
  };
}
