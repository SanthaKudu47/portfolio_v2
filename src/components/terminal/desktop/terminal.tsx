import withWindowWrapper from "@components/window/windowWrapper";
import { CiLock } from "react-icons/ci";
import { useState, useRef } from "react";
import TerminalCommandBlock from "../commandBlock/commandBlock";
import { StackResponse, WhoamiResponse } from "../responseBlock/responseBlocks";
import "./terminal.css";
import TerminalMobile from "../mobile/terminalMobile";
import { useAppStore } from "@store";

type TerminalLines = { [key: string]: boolean };

function TerminalInner() {
  const [step, setState] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  function runAfterStepOne() {
    setState(1);
  }
  return (
    <div className="terminal-container" ref={containerRef}>
      <div className="terminal-header">
        <span className="terminal-header-line">Powershell 7.3.4</span>
        <span className="terminal-header-sub">
          Loading personal and dev stack took <span>262ms.</span>
        </span>
      </div>

      <TerminalCommandBlock
        commandOptions={{
          blinking: false,
          cls: "text-bold",
          command: "whoami",
          eventName: "whoami-event-1",
          prefix: "~/dev",
          onComplete: runAfterStepOne,
        }}
        responseOptions={{
          response: <WhoamiResponse />,
        }}
      />
      {step === 1 && (
        <TerminalCommandBlock
          commandOptions={{
            blinking: false,
            cls: "text-bold",
            command: "ls --stack",
            eventName: "stack-event",
            prefix: "~/skills",
          }}
          responseOptions={{
            response: <StackResponse />,
          }}
        />
      )}
    </div>
  );
}
const TerminalWrapped = withWindowWrapper(TerminalInner);

export default function Terminal() {
  const { isOpened } = useAppStore((state) =>
    state.getWindowByName("terminal"),
  );
  console.log("IsTerminalOpened", isOpened);
  return (
    <>
      <div className="lg:hidden flex w-full h-full relative z-10 ">
        <TerminalMobile Icon={() => <CiLock />} title="Terminal" />
      </div>
      {isOpened && (
        <div className="hidden lg:absolute inset-0 lg:flex justify-center items-center">
          <TerminalWrapped
            windowId="terminal"
            Icon={() => <CiLock />}
            title="root@lumina-os: `/dev/stack"
          />
        </div>
      )}
    </>
  );
}
