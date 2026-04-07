import { useInitTheme } from "@hooks/theme";
import AppNavBar from "@components/navbar/Navbar";
import Tooltip from "@components/tooltip/tooltip";
import DockCmp from "@components/dock";
import Desktop from "@components/desktop/desktop";

function App() {
  //call theme init
  useInitTheme();
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Tooltip />
      <AppNavBar />
      <Desktop/>
      <DockCmp />
    </div>
  );
}

export default App;
