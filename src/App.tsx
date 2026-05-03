import { useInitTheme } from "@hooks/theme";
import AppNavBar from "@components/navbar/Navbar";
import Tooltip from "@components/tooltip/tooltip";
import DockCmp from "@components/dock";
import Desktop from "@components/desktop/desktop";
import { gsap } from "gsap";
import { Draggable } from "gsap/all";
import Terminal from "@components/terminal/desktop/terminal";
import Finder from "@components/finder/desktop/finder";
import Browser from "@components/browser/browser";
import Gallery from "@components/gallery/gallery";
import Contacts from "@components/contacts/contacts";
import ImageViewer from "@components/imageViewer/imageViewer";
import PDFViewer from "@components/pdfViewer/pdfViewer";

gsap.registerPlugin(Draggable);

function App() {
  //call theme init
  useInitTheme();
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Tooltip />
      <AppNavBar />
      <Desktop />
      <Finder />
      <Browser />
      <Gallery />
      <Contacts />
      <Terminal />
      <ImageViewer/>
      <PDFViewer/>
      <DockCmp />
      {/* <WindowWrapper/> */}
      {/* <ArtWorkLg /> */}
    </div>
  );
}

export default App;
