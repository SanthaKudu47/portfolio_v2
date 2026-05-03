import { useState } from "react";

export default function ThumbnailViewer({ src }: { src: string }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className="
        w-6/8 h-7/8
        bg-app-white-150 
        rounded-md 
        overflow-hidden 
        flex items-center justify-center 
        relative
      "
    >
      {/* SKELETON */}
      {!loaded && (
        <div
          className="
            absolute inset-0
            animate-pulse 
            bg-app-white-200 
          "
        />
      )}

      {/* IMAGE */}
      <img
        src={src}
        alt="thumb"
        onLoad={() => setLoaded(true)}
        className="
          w-full h-full 
          object-cover 
          transition-opacity duration-300
          opacity-0 
          [&.loaded]:opacity-100
        "
        style={{ opacity: loaded ? 1 : 0 }}
      />
    </div>
  );
}
