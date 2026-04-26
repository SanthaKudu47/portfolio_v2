import withWindowWrapper from "@components/window/windowWrapper";
import { useAppStore } from "@store";
import FolderIcon from "../Icons/folder";
import ImageIcon from "../Icons/img";
import PdfIcon from "../Icons/pdf";
import type { PropsToInner } from "../types";
import Breadcrumb from "../breadcrumb/breadcrumb";
import Sidebar from "../sidebar/sidebar";
import FinderFooter from "../footer/finderFooter";
import { MdLaptopWindows } from "react-icons/md";
import FinderMobile from "../mobile/FinderMobile";
import withDirHandlerWrapper from "./dirHandler";
import "./finder.css";

function FinderInner({
  currentDir,
  openFolder,
  paths,
  reset,
  updateDirPath,
}: PropsToInner) {
  // const [currentDir, setCurrentDir] = useState<FileInfoType[]>(folderData);
  // const [paths, setPaths] = useState<string[]>([]);

  // function reset() {
  //   setCurrentDir(folderData);
  //   setPaths([]);
  // }

  // function openFolder(pathId: string) {
  //   const next = goForward(pathId, currentDir);
  //   if (!next) return;
  //   setPaths((prev) => [...prev, pathId]);
  //   setCurrentDir(next);
  // }

  // function updateDirPath(pathId: string) {
  //   //return if we are already in same path//if pathId is same as last of paths then we are in same.
  //   if (pathId === paths[paths.length - 1]) return;

  //   //get index of pathId
  //   const index = paths.indexOf(pathId);
  //   if (index === -1) return;

  //   const newPaths = paths.slice(0, index + 1);
  //   const next = goBackward(newPaths, folderData);
  //   if (!next) return;
  //   setCurrentDir(next);
  //   setPaths(newPaths);
  // }

  return (
    <div className="finder-container">
      <Sidebar />
      {/* Main */}
      <div className="finder-main">
        <div className="finder-breadcrumb-row">
          <Breadcrumb
            paths={paths}
            resetDirAndPaths={reset}
            updateDirPath={updateDirPath}
          />
        </div>

        <div className="finder-filegrid-wrapper">
          <div className="finder-filegrid">
            {currentDir.map((data, index) => (
              <button
                key={index}
                onClick={() => data.pathId && openFolder(data.pathId)}
              >
                <div className="finder-filetile">
                  {data.type === "folder" && (
                    <div className="w-2/5 absolute inset-0 flex justify-center items-center mx-auto h-4/5">
                      <FolderIcon width="100%" />
                    </div>
                  )}
                  {data.type === "image" && (
                    <div className="w-2/5 absolute inset-0 flex justify-center items-center mx-auto h-4/5">
                      <ImageIcon width="100%" />
                    </div>
                  )}
                  {data.type === "pdf" && (
                    <div className="w-2/5 absolute inset-0 flex justify-center items-center mx-auto h-4/5">
                      <PdfIcon width="100%" />
                    </div>
                  )}

                  <span className="finder-filename">{data.fileName}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="w-full row-span-1 border-t border-solid border-t-gray-200 bg-app-white-200">
          <FinderFooter items={currentDir.length} size={24587} />
        </div>
      </div>
    </div>
  );
}

const FinderWrapped = withWindowWrapper(withDirHandlerWrapper(FinderInner));

export default function Finder() {
  const { isOpened } = useAppStore((state) => state.getWindowByName("finder"));
  return (
    <>
      {isOpened && (
        <>
          <div className="lg:hidden flex  absolute inset-0 z-10">
            <FinderMobile Icon={() => <MdLaptopWindows />} title="Finder" />
          </div>
          <div className="hidden lg:absolute inset-0 lg:flex justify-center items-center">
            <FinderWrapped
              windowId="finder"
              title="Finder"
              Icon={() => <MdLaptopWindows />}
            />
          </div>
        </>
      )}
    </>
  );
}
