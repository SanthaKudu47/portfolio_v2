import { AiFillHome } from "react-icons/ai";
import { Fragment } from "react/jsx-runtime";

export default function Breadcrumb({
  paths,
  resetDirAndPaths,
  updateDirPath,
}: {
  paths: string[];
  resetDirAndPaths: () => void;
  updateDirPath: (param: string) => void;
}) {
  return (
    <div
      className="
      flex items-center gap-2 
      font-inter text-sm 
      select-none z-50 cursor-pointer 
      bg-app-white-200 p-2 rounded-md
      text-app-gray-300
    "
    >
      {/* HOME */}
      <button
        onClick={(e) => {
          e.preventDefault();
          resetDirAndPaths();
        }}
        className="flex items-center gap-1 hover:text-app-gray-500 transition-colors"
      >
        <AiFillHome className="text-base" />
        <span className="font-medium">HOME</span>
      </button>

      {paths.map((path, index) => {
        const isLast = index === paths.length - 1;

        return (
          <Fragment key={path}>
            {/* Chevron */}
            <span className="text-app-gray-200">{`>`}</span>

            {/* Breadcrumb segment */}
            <button
              onClick={(e) => {
                e.preventDefault();
                if (!isLast) updateDirPath(path);
              }}
              className={
                isLast
                  ? "text-app-blue-500 font-semibold cursor-default"
                  : "hover:text-app-gray-500 transition-colors"
              }
            >
              {path.toUpperCase()}
            </button>
          </Fragment>
        );
      })}
    </div>
  );
}
