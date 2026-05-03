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
import ThumbnailViewer from "../thumbnail/ThumbnailViewer";
import TooltipWrapper from "@components/tooltip/wrapper";

function FinderInner({
  currentDir,
  openFolder,
  paths,
  reset,
  updateDirPath,
}: PropsToInner) {
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
                className="grid grid-rows-8 "
                key={index}
                onClick={() =>
                  data.pathId && openFolder(data.pathId, data.type, data.url)
                }
              >
                <div className="row-span-6  flex">
                  {data.type === "folder" && (
                    <div className="mx-auto my-auto justify-center items-center flex">
                      <FolderIcon width="40%" height="50%" />
                    </div>
                  )}
                  {data.type === "image" && (
                    <>
                      {data.url ? (
                        <div className="flex w-full h-full justify-center items-center">
                          <ThumbnailViewer src={`${data.url}`} />
                        </div>
                      ) : (
                        <div className="mx-auto my-auto justify-center items-center flex ">
                          <ImageIcon width="30%" height="30%" />
                        </div>
                      )}
                    </>
                  )}
                  {data.type === "pdf" && (
                    <div className="mx-auto my-auto justify-center items-center flex">
                      <PdfIcon width="30%" height="30%" />
                    </div>
                  )}
                </div>
                <div className="row-span-2  flex justify-center items-center">
                  <TooltipWrapper text={data.fileName} anchor="BOTTOM">
                    <span className="finder-filename">{data.fileName}</span>
                  </TooltipWrapper>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="w-full row-span-1 border-t border-solid border-t-gray-200  bg-app-white-200 dark:bg-app-darkBlue-700 ">
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
          <div className="lg:hidden flex  absolute inset-0 bg-amber-300 z-10">
            <div className="mt-9 bg-amber-700 w-full">
              <FinderMobile
                Icon={() => <MdLaptopWindows />}
                title="Finder"
                windowId="finder"
              />
            </div>
          </div>
          {/* <div
            style={{ zIndex: currentIndex }}
            className="absolute"
            // className={`hidden lg:absolute inset-0 lg:flex justify-center items-center`}
          > */}
          <div className="hidden lg:absolute inset-0 lg:flex justify-center items-center">
            <FinderWrapped
              windowId="finder"
              title="Finder"
              Icon={() => <MdLaptopWindows />}
            />
          </div>

          {/* </div> */}
        </>
      )}
    </>
  );
}
