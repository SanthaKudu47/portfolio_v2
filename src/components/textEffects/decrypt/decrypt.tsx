import { useEffect, useRef, useState } from "react";

const CHARS = "!<>-_\\/[]{}—=+*^?#________";

export function generateScramble(length: number) {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += CHARS[Math.floor(Math.random() * CHARS.length)];
  }
  return result;
}

type TextAnimState = {
  currentRound: number;
  outPut: string;
};

export default function DecryptedText({
  text = "Developer",
  rounds = 10,
}: {
  text: string;
  rounds: number;
}) {
  const [state, setUpdateState] = useState<TextAnimState>({
    outPut: generateScramble(text.length),
    currentRound: 1,
  });
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (state.currentRound === rounds + 1 && timerRef.current != null) {
      clearInterval(timerRef.current);
    }
  }, [state.currentRound]);

  useEffect(() => {
    const intervalTimer = setInterval(() => {
      setUpdateState((state) => {
        const nextRound = state.currentRound + 1;
        return {
          currentRound: nextRound,
          outPut:
            nextRound === rounds + 1 ? text : generateScramble(text.length),
        };
      });
    }, 90);

    timerRef.current = intervalTimer;

    return () => {
      clearInterval(intervalTimer);
    };
  }, []);

  return <span>{state.outPut}</span>;
}
