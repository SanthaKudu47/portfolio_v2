import withWindowWrapper from "@components/window/windowWrapper";
import { useAppStore } from "@store";
import { useState } from "react";
import { IoImageOutline } from "react-icons/io5";
import { Document, Page, pdfjs } from "react-pdf";
import { GrDocumentPdf } from "react-icons/gr";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import PDFViewerMobile from "./mobile/pdfViewerMobile";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

function PDFViewerInner() {
  const [numPages, setNumPages] = useState<number>();
  const [page, setPage] = useState(1);
  const [loaded, setLoaded] = useState(false);
  const path = useAppStore((state) => state.pdfPath);

  return (
    <div className="absolute inset-0">
      <div className="w-full h-full flex flex-col bg-app-white-100 select-none justify-between relative">
        {/* PDF AREA */}
        <div className="flex-1 flex justify-center items-center relative bg-app-gray-450/20">
          {/* SKELETON */}
          {!loaded && (
            <div className="absolute inset-0 animate-pulse bg-app-white-200" />
          )}

          <div
            className={`w-full h-[95%] overflow-y-scroll  relative flex justify-center ${!loaded && "items-center"}`}
          >
            <div className="absolute">
              <Document
                file={path ? path : "pdfs/Sahan_Chathura_CV.pdf"}
                onError={(event) => console.log("Error", event)}
                onLoadSuccess={({ numPages }) => {
                  setNumPages(numPages);
                  setLoaded(true);
                }}
              >
                <Page
                  pageNumber={page}
                  width={550}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                />
              </Document>
            </div>
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
          <span className="truncate">
            Page {page} of {numPages || "…"}
          </span>

          {/* NAVIGATION */}
          <div className="flex items-center gap-3">
            <button
              disabled={page <= 1}
              onClick={() => setPage((p) => p - 1)}
              className="disabled:opacity-30 hover:text-app-gray-500"
            >
              Prev
            </button>

            <button
              disabled={page >= (numPages || 1)}
              onClick={() => setPage((p) => p + 1)}
              className="disabled:opacity-30 hover:text-app-gray-500"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const PDFViewerInnerWrapped = withWindowWrapper(PDFViewerInner);

function PDFViewer() {
  const { isOpened } = useAppStore((state) =>
    state.getWindowByName("pdfViewer"),
  );

  return (
    <>
      {isOpened && (
        <>
          <div className="lg:hidden flex flex-col w-full  z-20  h-full absolute inset-0">
            <div className="w-full h-full">
              <PDFViewerMobile
                Icon={() => <GrDocumentPdf />}
               title="PDF Viewer"
              windowId="pdfViewer"
              />
            </div>
          </div>
          <div className="hidden lg:absolute inset-0 lg:flex justify-center items-center">
            <PDFViewerInnerWrapped
              Icon={() => <GrDocumentPdf />}
              title="PDF Viewer"
              windowId="pdfViewer"
            />
          </div>
        </>
      )}
    </>
  );
}

export default PDFViewer;
