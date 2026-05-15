import { AiFillHome } from "react-icons/ai";
import { Fragment } from "react/jsx-runtime";
import { TfiHome } from "react-icons/tfi";

import "./breadcrumb.css";

function BreadcrumbFrag({
  path,
  isLast,
  updateDirPath,
}: {
  path: string;
  isLast: boolean;
  updateDirPath: (param: string) => void;
}) {
  return (
    <Fragment key={path}>
      <span className="breadcrumb-chevron">{` > `}</span>

      <button
        onClick={(e) => {
          e.preventDefault();
          if (!isLast) updateDirPath(path);
        }}
        className={isLast ? "breadcrumb-segment-active" : "breadcrumb-segment"}
      >
        {path.toUpperCase()}
      </button>
    </Fragment>
  );
}

export default function Breadcrumb({
  paths,
  resetDirAndPaths,
  updateDirPath,
}: {
  paths: string[];
  resetDirAndPaths: () => void;
  updateDirPath: (param: string) => void;
}) {
  const pathsSmallScreens =
    paths.length > 2 ? ["...", paths[paths.length - 1]] : paths;
  console.log(pathsSmallScreens);
  return (
    <div className="breadcrumb-container">
      {/* HOME */}
      <button
        onClick={(e) => {
          e.preventDefault();
          resetDirAndPaths();
        }}
        className="breadcrumb-home"
      >
        <TfiHome className="text-base" />
        <span className="font-medium flex">HOME</span>
      </button>

      <div className="hidden md:flex flex-row">
        {paths.map((path, index) => {
          const isLast = index === paths.length - 1;

          return (
            <BreadcrumbFrag
              key={index}
              isLast={isLast}
              path={path}
              updateDirPath={updateDirPath}
            />
          );
        })}
      </div>

      <div className="flex md:hidden">
        {pathsSmallScreens.map((path, index) => {
          const isLast = index === pathsSmallScreens.length - 1;

          return (
            <BreadcrumbFrag
              key={index}
              isLast={isLast}
              path={path}
              updateDirPath={updateDirPath}
            />
          );
        })}
      </div>
    </div>
  );
}
