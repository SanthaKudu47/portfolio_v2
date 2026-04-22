import withWindowWrapper from "@components/window/windowWrapper";
import { useAppStore } from "@store";

function BrowserInner() {
  return <div>This is browser</div>;
}

const BrowserWrapped = withWindowWrapper(BrowserInner);

export default function Browser() {
  const { isOpened } = useAppStore((state) => state.getWindowByName("browser"));
  return (
    <>
      {isOpened && (
        <div className="hidden lg:absolute inset-0 lg:flex justify-center items-center">
          <BrowserWrapped
            windowId="browser"
            title="Browser"
            Icon={() => <>Icon</>}
          />
        </div>
      )}
    </>
  );
}
