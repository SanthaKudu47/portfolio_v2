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
import "./FinderMobile.css";

function FinderInnerMobile({
  currentDir,
  openFolder,
  paths,
  reset,
  updateDirPath,
  activeDirTag,setActiveDir
}: PropsToInner) {
  return (
    <div className="finder-mobile">
      <div className="finder-mobile-breadcrumb">
        <Breadcrumb
          paths={paths}
          resetDirAndPaths={reset}
          updateDirPath={updateDirPath}
        />
      </div>

      <div className="finder-mobile-content">
        <div className="finder-mobile-grid">
          {currentDir.map((data, index) => (
            <button
              key={index}
              onClick={() =>
                data.pathId && openFolder(data.pathId, data.type, data.url)
              }
            >
              <div className="finder-mobile-item-button">
                <div className="finder-mobile-item-icon-container">
                  {data.type === "folder" && (
                    <div className="finder-mobile-item-icon-size">
                      <FolderIcon width="100%" height="100%" />
                    </div>
                  )}

                  {data.type === "image" && (
                    <>
                      {data.url ? (
                        <div className="finder-mobile-image-url-container">
                          <ThumbnailViewer src={`${data.url}`} />
                        </div>
                      ) : (
                        <div className="finder-mobile-image-icon-container">
                          <ImageIcon width="30%" height="30%" />
                        </div>
                      )}
                    </>
                  )}

                  {data.type === "pdf" && (
                    <div className="finder-mobile-pdf-icon-size">
                      <PdfIcon width="100%" height="100%" />
                    </div>
                  )}
                </div>
                <div className="finder-mobile-filename-wrapper">
                  <span className="finder-mobile-filename">
                    {data.fileName}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className="finder-mobile-sidebar">
        <SidePanel activeDirTag={activeDirTag} setActiveDir={setActiveDir}  />
      </div>
      <div className="finder-mobile-footer-section">
        <div className="finder-mobile-footer-wrapper">
          <FinderFooter items={currentDir.length} size={24587} />
        </div>
        <StorageInfo used={128} total={1024} />
      </div>
    </div>
  );
}
const FinderMobile = withMobileWindowWrapper(
  withDirHandlerWrapper(FinderInnerMobile),
);
export default FinderMobile;
