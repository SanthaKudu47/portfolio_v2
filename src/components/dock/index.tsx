import Dock from "./desktop/dock";
import DockMobile from "./mobile/dock";

export default function DockCmp() {
  return (
    <>
      <div className="lg:hidden">
        <DockMobile />
      </div>
      <div className="lg:block">
        <Dock />
      </div>
    </>
  );
}
