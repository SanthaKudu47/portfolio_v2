import { useEffect, useRef, useState } from "react";

import "./type.css";
import { dispatchCustomEvent, registerEventListeners } from "@events/events";

type TypingTextState = {
  letter: string;
  index: number;
};

export default function TypingText({
  text = "developer",
  speed = 90,
  eventName,
  callBack,
  blinking = true,
  textCls = "",
}: {
  text: string;
  speed?: number;
  eventName?: string;
  callBack?: () => void;
  blinking?: boolean;
  textCls: string;
}) {
  const [isBlinking, setBlinking] = useState<boolean>(true);
  const [state, setState] = useState<TypingTextState>({ letter: "", index: 0 });
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (state.index === text.length && timerRef.current != null) {
      clearInterval(timerRef.current);
      if (eventName) dispatchCustomEvent(eventName);
      if (!blinking) setBlinking(false);
    }
  }, [state.index]);

  useEffect(() => {
    const timerId = setInterval(() => {
      console.log("changer");
      setState((lastState) => {
        const next = lastState.index + 1;
        return {
          index: next,
          letter: `${lastState.letter}${text[lastState.index]}`,
        };
      });
    }, speed);

    timerRef.current = timerId;
    if (eventName && callBack) {
      registerEventListeners(eventName, callBack);
    }

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <span className={`${textCls}`}>
      {state.letter}
      <span className={`animate-text-cursor ${!isBlinking ? "hidden" : ""}`}>
        |
      </span>
    </span>
  );
}
