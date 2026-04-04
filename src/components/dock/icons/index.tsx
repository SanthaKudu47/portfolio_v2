import { useAppStore } from "@store";
import { useState, type MouseEvent } from "react";

export function FolderIcon({
  width = "285",
  height = "229",
  fill = "#788AA0",
  mouseEnter,
  mouseLeave,
}: {
  height?: string;
  width?: string;
  fill?: string;
  mouseEnter: (e: MouseEvent<SVGSVGElement>) => void;
  mouseLeave: (e: MouseEvent<SVGSVGElement>) => void;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 285 229"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <path
        d="M111.446 0C111.726 0 112.007 0.00392669 112.285 0.0126585L140.341 28.0849H155.455L155.258 27.8887C156.306 28.0144 157.369 28.0849 158.44 28.0849H254.773C271.467 28.0849 285 41.6262 285 58.3302V198.755C285 215.459 271.467 229 254.773 229H30.2273C13.5332 229 0 215.459 0 198.755V28.0849C0 12.574 12.5666 0 28.0682 0H111.446Z"
        fill={fill}
      />
    </svg>
  );
}

export function BrowserIcon({
  width = "285",
  height = "229",
  fill = "#788AA0",
  mouseEnter,
  mouseLeave,
}: {
  height?: string;
  width?: string;
  fill?: string;
  mouseEnter: (e: MouseEvent<SVGSVGElement>) => void;
  mouseLeave: (e: MouseEvent<SVGSVGElement>) => void;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 228 229"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <path
        d="M129.26 58.6024C145.058 52.8323 146.614 36.9646 145.417 29.752V17.1299L112.205 9.91732L61.937 22.5394L31.4173 50.4882L18.8504 83.8465L81.685 146.957C75.9402 172.201 93.0551 180.916 102.331 182.118V215.476H136.441L175.937 192.937C176.535 190.833 177.373 184.282 175.937 174.906C174.501 165.529 165.165 160.18 160.677 158.677H145.417V123.516C145.417 115.582 139.433 114.801 136.441 115.402H70.9134V91.9606H92.4567C99.6378 91.9606 102.031 86.5512 102.331 83.8465V58.6024H129.26Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M114 0C176.96 0 228 51.2634 228 114.5C228 177.737 176.96 229 114 229C51.0395 229 0 177.737 0 114.5C0 51.2634 51.0395 0 114 0ZM114 18.0315C60.9546 18.0315 17.9528 61.2219 17.9528 114.5C17.9528 167.778 60.9546 210.969 114 210.969C167.045 210.969 210.047 167.778 210.047 114.5C210.047 61.2219 167.045 18.0315 114 18.0315Z"
        fill={fill}
      />
    </svg>
  );
}

export function ImagesIcon({
  width = "285",
  height = "229",
  fill = "#788AA0",
  mouseEnter,
  mouseLeave,
}: {
  height?: string;
  width?: string;
  fill?: string;
  mouseEnter: (e: MouseEvent<SVGSVGElement>) => void;
  mouseLeave: (e: MouseEvent<SVGSVGElement>) => void;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 229 229"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M202.829 0C217.283 0 229 10.985 229 24.5357V204.464C229 218.015 217.283 229 202.829 229H26.1714C11.7173 229 1.40514e-07 218.015 0 204.464V24.5357C1.12411e-06 10.985 11.7173 7.40968e-08 26.1714 0H202.829ZM106.867 165.616L77.4238 127.79L37.0762 177.884H193.014L145.033 115.522L106.867 165.616Z"
        fill={fill}
      />
    </svg>
  );
}

export function ContactsIcon({
  width = "285",
  height = "229",
  fill = "#788AA0",
  mouseEnter,
  mouseLeave,
}: {
  height?: string;
  width?: string;
  fill?: string;
  mouseEnter: (e: MouseEvent<SVGSVGElement>) => void;
  mouseLeave: (e: MouseEvent<SVGSVGElement>) => void;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 192 229"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M172.475 34.1064C183.258 34.1064 192 42.8321 192 53.5957V175.404C192 186.168 183.258 194.894 172.475 194.894H19.5254C8.74183 194.894 3.14495e-07 186.168 0 175.404V53.5957C3.14495e-07 42.8321 8.74183 34.1064 19.5254 34.1064H172.475ZM96.3385 144.546C71.9096 144.546 50.3435 156.762 37.4237 175.404H155.253C142.333 156.762 120.767 144.546 96.3385 144.546ZM96 64.9645C79.8246 64.9645 66.7119 78.0531 66.7119 94.1986C66.7119 110.344 79.8246 123.433 96 123.433C112.175 123.433 125.288 110.344 125.288 94.1986C125.288 78.0531 112.175 64.9645 96 64.9645Z"
        fill={fill}
      />
      <path d="M19.5254 0H174.102V21.1135H19.5254V0Z" fill={fill} />
      <path d="M19.5254 207.887H174.102V229H19.5254V207.887Z" fill={fill} />
    </svg>
  );
}

export function TerminalIcon({
  width = "285",
  height = "229",
  fill = "#788AA0",
  mouseEnter,
  mouseLeave,
}: {
  height?: string;
  width?: string;
  fill?: string;
  mouseEnter: (e: MouseEvent<SVGSVGElement>) => void;
  mouseLeave: (e: MouseEvent<SVGSVGElement>) => void;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 275 229"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M249.364 0C263.523 2.10764e-06 275 11.5081 275 25.7041V203.296C275 217.492 263.523 229 249.364 229H25.6356C11.4774 229 0 217.492 0 203.296V25.7041C7.50747e-07 11.5081 11.4774 0 25.6356 0H249.364ZM30.2966 56.0816V200.959H244.703V56.0816H30.2966Z"
        fill={fill}
      />
      <path d="M137.5 158.898H219.068V184.602H137.5V158.898Z" fill={fill} />
      <path
        d="M71.7289 70.102L129.406 127.933L111.279 146.109L53.6017 88.2776L71.7289 70.102Z"
        fill={fill}
      />
      <path
        d="M53.6017 167.658L111.279 109.827L129.406 128.002L71.7288 185.833L53.6017 167.658Z"
        fill={fill}
      />
    </svg>
  );
}

export function BinIcon({
  width = "285",
  height = "229",
  fill = "#788AA0",
  mouseEnter,
  mouseLeave,
}: {
  height?: string;
  width?: string;
  fill?: string;
  mouseEnter: (e: MouseEvent<SVGSVGElement>) => void;
  mouseLeave: (e: MouseEvent<SVGSVGElement>) => void;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 196 229"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <path
        d="M131.886 12.3652H195.768V37.0938H181.248C181.309 37.7724 181.343 38.4597 181.343 39.1543V206.072C181.343 218.591 171.194 228.74 158.675 228.74H37.0928C24.5737 228.74 14.4249 218.591 14.4248 206.072V39.1543C14.4248 38.4597 14.4574 37.7724 14.5186 37.0938H0V12.3652H61.8213V0H131.886V12.3652ZM63.8818 74.1865V191.647H86.5498V74.1865H63.8818ZM109.218 191.646H131.886V74.1865H109.218V191.646Z"
        fill={fill}
      />
    </svg>
  );
}

export function IconMouseHandlerWrapper({
  width = "285",
  height = "229",
  Icon,
}: {
  height?: string;
  width?: string;
  Icon: React.ComponentType<{
    height?: string;
    width?: string;
    fill?: string;
    mouseEnter: (e: MouseEvent<SVGSVGElement>) => void;
    mouseLeave: (e: MouseEvent<SVGSVGElement>) => void;
  }>;
}) {
  const mode = useAppStore((state) => state.mode);
  const [hoverColor, setHoverColor] = useState("");
  const fill = hoverColor
    ? hoverColor
    : mode === "LIGHT"
      ? "#617289"
      : "#ACAAB5";

  function handleMouseEnter(event: MouseEvent<SVGSVGElement>) {
    setHoverColor("#5EB4FF");
  }

  function handleMouseLeave(event: MouseEvent<SVGSVGElement>) {
    setHoverColor("");
  }

  return (
    <Icon
      fill={fill}
      height={height}
      width={width}
      mouseEnter={handleMouseEnter}
      mouseLeave={handleMouseLeave}
    />
  );
}
