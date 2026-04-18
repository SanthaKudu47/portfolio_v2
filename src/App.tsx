import { useInitTheme } from "@hooks/theme";
import AppNavBar from "@components/navbar/Navbar";
import Tooltip from "@components/tooltip/tooltip";
import DockCmp from "@components/dock";
import Desktop from "@components/desktop/desktop";
import { gsap } from "gsap";
import { Draggable } from "gsap/all";
import TerminalWrapped from "@components/terminal/desktop/terminal";
import Terminal from "@components/terminal/desktop/terminal";

gsap.registerPlugin(Draggable);

function App() {
  //call theme init
  useInitTheme();
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Tooltip />
      <AppNavBar />
      <Desktop />
      <Terminal />
      <DockCmp />
      {/* <WindowWrapper/> */}
      {/* <ArtWorkLg /> */}
    </div>
  );
}

export default App;
