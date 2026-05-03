import withMobileWindowWrapper from "@components/window/mobileWrapper/mobileWindowWrapper";
import { useAppStore } from "@store";

function ImageViewerMobileInner() {
  const filePath = useAppStore((state) => state.filePath);

  return (
    <div className="h-full flex flex-col">
      {/* IMAGE AREA */}
      <div className="flex-1 overflow-y-scroll bg-app-gray-450/20">
        <div className="flex justify-center py-4 px-2">
          {filePath ? (
            <img
              src={filePath}
              alt="preview"
              className="
                w-full 
                max-w-full 
                h-auto 
                object-contain 
                rounded-sm
              "
            />
          ) : (
            <div className="text-app-gray-400 text-xs">No file to preview</div>
          )}
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div
        className="
          h-12
          flex items-center justify-between 
          px-4
          bg-app-white-150 
          border-t border-app-white-200
          text-xs font-inter text-app-gray-400
        "
      >
        <span className="truncate">Image Preview</span>
        <span className="opacity-70">Tap to zoom</span>
      </div>
    </div>
   
  );
}

const ImageViewerMobile = withMobileWindowWrapper(ImageViewerMobileInner);
export default ImageViewerMobile;
