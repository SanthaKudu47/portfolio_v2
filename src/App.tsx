import { useInitTheme } from "@hooks/theme";
import AppNavBar from "@components/navbar/Navbar";
import Tooltip from "@components/tooltip/tooltip";
import DockCmp from "@components/dock";
import Desktop from "@components/desktop/desktop";
import WindowWrapper from "@components/desktop/window_wrapper/windowWrapper";
import { gsap } from "gsap";
import { Draggable } from "gsap/all";


gsap.registerPlugin(Draggable) 

function App() {
  //call theme init
  useInitTheme();
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Tooltip />
      <AppNavBar />
      <Desktop />
      {/* <div className="bg-green-300 absolute inset-0 flex justify-center items-center">
        <WindowWrapper/>
      </div> */}
      <DockCmp />
      {/* <WindowWrapper/> */}
      {/* <ArtWorkLg /> */}
    </div>
  );
}

export default App;
