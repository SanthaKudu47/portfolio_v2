import withMobileWindowWrapper from "@components/window/mobileWrapper/mobileWindowWrapper";
import { useAppStore } from "@store";
import { useState } from "react";
import { Document, Page } from "react-pdf";

function PDFViewerMobileInner() {
  const [numPages, setNumPages] = useState<number>();
  const [page, setPage] = useState(1);
  const [loaded, setLoaded] = useState(false);
  const path = useAppStore((state) => state.pdfPath);

  // Fit PDF to screen width with small padding

  return (
    <div className="  flex flex-col select-none bg-app-white-100 h-full">
      {/* PDF AREA */}
      <div className="flex-1 overflow-y-scroll relative bg-app-gray-450/20 ">
        {!loaded && (
          <div className="absolute inset-0 animate-pulse bg-app-white-200" />
        )}

        <div className="flex justify-center pt-3 h-full">
          <Document
            file={path || "/pdfs/Sahan_Chathura_CV.pdf"}
            onLoadSuccess={({ numPages }) => {
              setNumPages(numPages);
              setLoaded(true);
            }}
            onError={(e) => console.log("PDF Error", e)}
          >
            <Page
              pageNumber={page}
              width={370}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </Document>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="h-12 flex items-center justify-between px-4 bg-app-white-150 border-t border-app-white-200 text-xs text-app-gray-400">
        <span>
          Page {page} / {numPages || "…"}
        </span>

        <div className="flex items-center gap-4">
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
  );
}

const PDFViewerMobile = withMobileWindowWrapper(PDFViewerMobileInner);
export default PDFViewerMobile;
