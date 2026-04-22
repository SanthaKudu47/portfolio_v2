import withMobileWindowWrapper from "@components/window/mobileWrapper/mobileWindowWrapper";
import TerminalCommandBlock from "../commandBlock/commandBlock";
import { StackResponse, WhoamiResponse } from "../responseBlock/responseBlocks";
import { useState } from "react";

const TerminalMobileInner = function TerminalMobile() {
  const [step, setState] = useState<number>(0);
  function runAfterStepOne() {
    setState(1);
  }
  return (
    <div className="w-full h-full bg-app-white-150 px-2 relative">
      <span className="block w-fit font-inter text-sm px-2">
        root@lumina-os: `/dev/stack
      </span>
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
};
const TerminalMobile = withMobileWindowWrapper(TerminalMobileInner);

export default TerminalMobile;
