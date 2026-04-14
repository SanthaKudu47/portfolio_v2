import { useEffect, useRef, useState } from "react";

import "./type.css";

type TypingTextState = {
  letter: string;
  index: number;
};

export default function TypingText({
  text = "developer",
  speed = 90,
}: {
  text: string;
  speed?: number;
}) {
  const [state, setState] = useState<TypingTextState>({ letter: "", index: 0 });
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (state.index === text.length && timerRef.current != null) {
      clearInterval(timerRef.current);
    }
  }, [state.index]);

  useEffect(() => {
    const timerId = setInterval(() => {
      setState((lastState) => {
        const next = lastState.index + 1;
        return {
          index: next,
          letter: `${lastState.letter}${text[lastState.index]}`,
        };
      });
    }, speed);

    timerRef.current = timerId;

    return () => {
      clearInterval(timerId);
    };
  }, []);
  return (
    <span>
      {state.letter}
      <span className="animate-text-cursor ">|</span>
    </span>
  );
}
