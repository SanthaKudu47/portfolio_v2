import type { JSX } from "react";
import {
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { SiNestjs, SiPrisma } from "react-icons/si";

import "./responseBlock.css";

const stack: { icon: JSX.Element; name: string; url: string }[] = [
  {
    icon: <BiLogoTypescript />,
    name: "TypeScript",
    url: "https://www.typescriptlang.org/",
  },
  {
    icon: <BiLogoJavascript />,
    name: "JavaScript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    icon: <BiLogoReact />,
    name: "React",
    url: "https://react.dev/",
  },
  {
    icon: <RiNextjsFill />,
    name: "Next.js",
    url: "https://nextjs.org/",
  },
  {
    icon: <BiLogoNodejs />,
    name: "Node.js",
    url: "https://nodejs.org/en",
  },
  {
    icon: <SiPrisma />,
    name: "Prisma.js",
    url: "https://www.prisma.io/",
  },
  {
    icon: <SiNestjs />,
    name: "NestJs",
    url: "https://nestjs.com/",
  },
  {
    icon: <BiLogoTailwindCss />,
    name: "Tailwind css",
    url: "https://tailwindcss.com/",
  },
];

export function WhoamiResponse() {
  return (
    <>
      <div className="whoami-border" />
      <div>
        <p className="whoami-response">
          <span className="whoami-name">Sahan Chathura</span>
          <span className="whoami-role">Full stack-developer,</span>
          <span>"who loves turning ideas into polished systems."</span>
        </p>
      </div>
    </>
  );
}

export function StackResponse() {
  return (
    <>
      <div className="stack-border" />
      <div className="stack-grid">
        {stack.map((value, index) => (
          <div key={index} className="stack-item-wrapper">
            <div>
              <a href={value.url} target="_blank" className="stack-item">
                {value.icon} <span>{value.name}</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
