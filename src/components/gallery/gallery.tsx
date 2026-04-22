import withWindowWrapper from "@components/window/windowWrapper";
import { useAppStore } from "@store";

function GalleryInner() {
  return <div>This is gallery</div>;
}

const GalleryWrapped = withWindowWrapper(GalleryInner);

export default function Gallery() {
  const { isOpened } = useAppStore((state) => state.getWindowByName("gallery"));
  return (
    <>
      {isOpened && (
        <div className="hidden lg:absolute inset-0 lg:flex justify-center items-center">
          <GalleryWrapped
            windowId="gallery"
            title="Gallery"
            Icon={() => <>Icon</>}
          />
        </div>
      )}
    </>
  );
}
