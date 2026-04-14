import { useEffect, useState } from "react";

export default function useScreenHeight() {
  const [height, setHeight] = useState<number>(window.innerHeight);
  useEffect(() => {
    //update current
    if (height != window.innerHeight) {
      setHeight(innerHeight);
    }
    function handleScreenResize() {
      const viewportHeight = window.innerHeight;
      setHeight(viewportHeight);
    }
    window.addEventListener("resize", handleScreenResize);
    return () => {
      window.removeEventListener("resize", handleScreenResize);
    };
  }, []);
  return height;
}
