import TypingText from "@components/textEffects/type/type";
import { useGSAP } from "@gsap/react";
import { useRef, useState, type JSX } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import gsap from "gsap";
import { dispatchCustomEvent } from "@events/events";
import { MdOutlineReplay } from "react-icons/md";

import "./commandBlock.css";

type CommandOptionsType = {
  command: string;
  eventName: string;
  blinking: boolean;
  cls: string;
  prefix: string;
  onComplete?: () => void;
};
type ResponseOptionType = {
  response: JSX.Element;
};

export default function TerminalCommandBlock({
  commandOptions,
  responseOptions,
}: {
  commandOptions: CommandOptionsType;
  responseOptions: ResponseOptionType;
}) {
  const [renderCount, setRenderCount] = useState(0);
  const [canReplay, setReplayStatus] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { blinking, cls, command, eventName, onComplete, prefix } =
    commandOptions;
  const { response } = responseOptions;
  const { contextSafe } = useGSAP({ scope: containerRef });

  const resetResponse = contextSafe(() => {
    gsap.set(".tcb-response-animator", { opacity: 0, y: 6, display: "none" });
  });

  const animateRes = contextSafe(() => {
    gsap.fromTo(
      ".tcb-response-animator",
      { opacity: 0, y: 6, display: "block" },
      {
        opacity: 1,
        y: 0,
        duration: 0.3,
        delay: 0.3,
        onComplete: () => {
          console.log("Animated");
          setReplayStatus(true);
          onComplete && onComplete();
        },
      },
    );
  });

  function replay() {
    gsap.killTweensOf(".tcb-response-animator");
    resetResponse();
    setRenderCount((prev) => prev + 1);
    setReplayStatus(false);
  }

  function onCommandTypingDone() {
    if (renderCount !== 0) return;
    animateRes();
  }

  return (
    <div className="tcb-container">
      <span className="tcb-command-line">
        <IoIosArrowRoundForward className="tcb-arrow-icon" />
        <span className="tcb-prefix">{prefix}</span>
        <span>
          <TypingText
            key={renderCount}
            text={command}
            eventName={eventName}
            callBack={onCommandTypingDone}
            blinking={blinking}
            textCls={cls}
          />
        </span>
      </span>

      <div className="tcb-response-wrapper" ref={containerRef}>
        <div className="tcb-response-animator tcb-response-hidden">
          {response ? response : null}
        </div>

        <div className="tcb-replay-container" onClick={replay}>
          {canReplay && <MdOutlineReplay />}
        </div>
      </div>
    </div>
  );
}
