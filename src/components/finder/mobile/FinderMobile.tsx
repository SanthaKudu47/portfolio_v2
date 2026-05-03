import withMobileWindowWrapper from "@components/window/mobileWrapper/mobileWindowWrapper";
import type { PropsToInner } from "../types";
import withDirHandlerWrapper from "../desktop/dirHandler";
import Breadcrumb from "../breadcrumb/breadcrumb";
import FolderIcon from "../Icons/folder";
import ImageIcon from "../Icons/img";
import PdfIcon from "../Icons/pdf";
import StorageInfo from "../sidebar/storageInfo/storageInfo";
import FinderFooter from "../footer/finderFooter";
import SidePanel from "../sidebar/sidepanel/sidepanel";
import ThumbnailViewer from "../thumbnail/ThumbnailViewer";

function FinderInnerMobile({
  currentDir,
  openFolder,
  paths,
  reset,
  updateDirPath,
}: PropsToInner) {
  console.log(openFolder);
  return (
    <div className=" bg-app-white-150 dark:bg-app-darkBlue-700 grid relative h-full grid-rows-12">
      <div className="row-span-1">
        <Breadcrumb
          paths={paths}
          resetDirAndPaths={reset}
          updateDirPath={updateDirPath}
        />
      </div>

      <div className="w-full row-span-8 overflow-scroll ">
        <div className="grid grid-cols-3 gap-3 px-2 font font-inter dark:text-app-gray-300">
          {currentDir.map((data, index) => (
            <button
              key={index}
              onClick={() =>
                data.pathId && openFolder(data.pathId, data.type, data.url)
              }
            >
              <div className="flex flex-col  h-[150px] justify-between items-center relative p-1">
                <div className="w-full h-full  flex justify-center items-center relative">
                  {data.type === "folder" && (
                    <div className="w-1/2 relative h-1/2">
                      <FolderIcon width="100%" height="100%" />
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
                    <div className="w-1/2 relative h-1/2">
                      <PdfIcon width="100%" height="100%" />
                    </div>
                  )}
                </div>
                <div className="w-full h-1/3">
                  <span className="text-center text-xs font-inter line-clamp-2">
                    {data.fileName}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className="row-span-1 flex justify-center items-center">
        <SidePanel />
      </div>
      <div className="row-span-2 flex flex-col justify-end bg-app-white-100 dark:bg-black">
        <FinderFooter items={currentDir.length} size={24587} />
        <StorageInfo used={128} total={1024} />
      </div>
    </div>
  );
}
const FinderMobile = withMobileWindowWrapper(
  withDirHandlerWrapper(FinderInnerMobile),
);
export default FinderMobile;
