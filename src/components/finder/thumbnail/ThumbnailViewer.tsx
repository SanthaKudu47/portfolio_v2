import { useState } from "react";
import "./ThumbnailViewer.css";

export default function ThumbnailViewer({ src }: { src: string }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="thumbnail-viewer">
      {/* SKELETON */}
      {!loaded && (
        <div className="thumbnail-viewer-skeleton" />
      )}

      {/* IMAGE */}
      <img
        src={src}
        alt="thumb"
        onLoad={() => setLoaded(true)}
        className="thumbnail-viewer-image"
        style={{ opacity: loaded ? 1 : 0 }}
      />
    </div>
  );
}
