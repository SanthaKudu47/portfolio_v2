import withWindowWrapper from "@components/window/windowWrapper";
import { useAppStore } from "@store";
import { IoImageOutline } from "react-icons/io5";
import ImageViewerMobile from "./mobile/imageViewerMobile";

function ImageViewerInner() {
  const filePath = useAppStore((state) => state.filePath);
  return (
    <div className="absolute inset-0">
      <div className="w-full h-full flex flex-col bg-app-white-100 select-none justify-between relative">
        {/* IMAGE AREA */}
        <div className="flex justify-center items-center overflow-hidden h-full">
          <div
            className="
              max-w-full max-h-[80%] 
              sm:max-w-[90%] sm:max-h-[90%] 
              flex justify-center items-center
            "
          >
            {filePath ? (
              <img
                src={filePath}
                alt="preview"
                className="max-w-full max-h-full object-contain"
              />
            ) : (
              <>No file path to preview</>
            )}
          </div>
        </div>

        {/* BOTTOM INFO BAR */}
        <div
          className="
            w-full 
            h-10 sm:h-12
            flex items-center justify-between 
            px-3 sm:px-4
            bg-app-white-150 
            border-t border-app-white-200
            text-[10px] sm:text-xs 
            font-inter text-app-gray-400
          "
        >
          <span className="truncate">Image Preview</span>
          <span className="opacity-70">Tap to zoom</span>
        </div>
      </div>
    </div>
  );
}

const ImageViewerWrapped = withWindowWrapper(ImageViewerInner);

function ImageViewer() {
  const { isOpened } = useAppStore((state) =>
    state.getWindowByName("imageViewer"),
  );
  return (
    <>
      {isOpened && (
        <>
          <div className="lg:hidden flex flex-col w-full  z-20  h-full absolute inset-0">
            <div className="w-full h-full">
              <ImageViewerMobile
                Icon={() => <IoImageOutline />}
                title="Image Viewer"
                windowId="imageViewer"
              />
            </div>
          </div>

          <div className="hidden lg:absolute inset-0 lg:flex justify-center items-center">
            <ImageViewerWrapped
              Icon={() => <IoImageOutline />}
              title="Image Viewer"
              windowId="imageViewer"
            />
          </div>
        </>
      )}
    </>
  );
}

export default ImageViewer;
